import produce from 'immer';
import { handleActions } from 'redux-actions';

import { ROLL_SUCCESS } from './actionTypes';

const initialState = {
  player: [],
  enemy: [],
};

export const rollReducer = handleActions(
  {
    [ROLL_SUCCESS]: (state, { payload: { result, roller } }) =>
      produce(state, (draft) => {
        draft[roller] = result;
      }),
  },
  initialState
);
