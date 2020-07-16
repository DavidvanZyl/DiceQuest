import { all } from 'redux-saga/effects';

import { watchForAttackRequests } from './attack/attackSaga';
import { watchForRollRequests } from './roll/rollSaga';

export default function* rootSaga() {
  yield all([watchForAttackRequests(), watchForRollRequests()]);
}
