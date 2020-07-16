import produce from 'immer';
import { handleActions } from 'redux-actions';

import { ATTACK_SUCCESS } from './actionTypes';

const initialState = {
  player: 100,
  enemy: 100,
};

export const attackReducer = handleActions(
  {
    [ATTACK_SUCCESS]: (state, { payload: { damage, victim } }) =>
      produce(state, (draft) => {
        draft[victim] =
          draft[victim] - damage >= 0 ? draft[victim] - damage : 0;
      }),
  },
  initialState
);
