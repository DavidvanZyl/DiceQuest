import { put, takeLatest } from 'redux-saga/effects';

import rollD6Twice from '../../../util/rollD6Twice';
import { CHARATER_TYPES } from '../../constants';
import { attack } from '../../redux/attack/actions';
import { rollSuccess } from '../../redux/roll/actions';
import { ROLL } from '../../redux/roll/actionTypes';

export function* rollSaga(action) {
  yield put(
    rollSuccess({ roller: CHARATER_TYPES.PLAYER, result: rollD6Twice() })
  );
  yield put(
    rollSuccess({ roller: CHARATER_TYPES.ENEMY, result: rollD6Twice() })
  );
  yield put(attack());
}

export function* watchForRollRequests() {
  yield takeLatest(ROLL, rollSaga);
}
