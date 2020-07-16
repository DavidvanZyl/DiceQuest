import { toast } from 'react-toastify';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { BASE_DAMAGE, CHARATER_TYPES } from '../../constants';
import { attackFailure, attackSuccess } from '../../redux/attack/actions';
import { ATTACK, ATTACK_FAILURE, ATTACK_SUCCESS } from '../../redux/attack/actionTypes';
import * as healthSelector from './../../selectors/health';
import * as rollSelector from './../../selectors/roll';

export function* attackSaga(action) {
  yield call(toast.clearWaitingQueue);
  yield call(toast.dismiss);
  const playerRoll = yield select(rollSelector.playerRoll);
  const enemyRoll = yield select(rollSelector.enemyRoll);
  const damage = playerRoll[0] + playerRoll[1] - (enemyRoll[0] + enemyRoll[1]);
  const victim = damage > 0 ? CHARATER_TYPES.ENEMY : CHARATER_TYPES.PLAYER;
  if (damage) {
    yield put(
      attackSuccess({ victim, damage: Math.abs(damage) * BASE_DAMAGE })
    );
  } else {
    yield put(attackFailure());
  }
}

export function* attackSuccessSaga(action) {
  const turn = action.payload;
  if (turn.victim === CHARATER_TYPES.ENEMY) {
    const enemyHealth = yield select(healthSelector.enemyHealth);
    if (enemyHealth <= 0) {
      yield call(toast.success, "You Win", { autoClose: false });
    } else {
      yield call(toast, `Success! Enemy hit for ${turn.damage} damage!`, {
        toastId: "attack",
      });
    }
  } else if (turn.victim === CHARATER_TYPES.PLAYER) {
    const playerHealth = yield select(healthSelector.playerHealth);
    if (playerHealth <= 0) {
      yield call(toast.error, "Game Over", { autoClose: false });
    } else {
      yield call(
        toast,
        `Your attack was countered! Hit for ${turn.damage} damage!`,
        {
          toastId: "attack",
        }
      );
    }
  }
}

export function* attackFailureSaga(action) {
  yield call(toast, `The attack failed!`, {
    toastId: "attack",
  });
}

export function* watchForAttackRequests() {
  yield takeLatest(ATTACK, attackSaga);
  yield takeLatest(ATTACK_SUCCESS, attackSuccessSaga);
  yield takeLatest(ATTACK_FAILURE, attackFailureSaga);
}
