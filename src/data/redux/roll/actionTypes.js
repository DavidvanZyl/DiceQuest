import { createRequestActionTypes } from '../util';

const action__roll = "ROLL";

export const [ROLL, ROLL_SUCCESS, ROLL_FAILURE] = createRequestActionTypes(
  action__roll
);
