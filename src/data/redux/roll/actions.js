import { createAction } from 'redux-actions';

import { ROLL, ROLL_SUCCESS } from './actionTypes';

export const roll = createAction(ROLL);
export const rollSuccess = createAction(ROLL_SUCCESS);
