import { createRequestActionTypes } from '../util';

const action__attack = "ATTACK";

export const [
  ATTACK,
  ATTACK_SUCCESS,
  ATTACK_FAILURE,
] = createRequestActionTypes(action__attack);
