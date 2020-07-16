import { createAction } from 'redux-actions';

import { ATTACK, ATTACK_FAILURE, ATTACK_SUCCESS } from './actionTypes';

export const attack = createAction(ATTACK);
export const attackSuccess = createAction(ATTACK_SUCCESS);
export const attackFailure = createAction(ATTACK_FAILURE);
