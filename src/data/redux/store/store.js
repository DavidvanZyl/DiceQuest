import rootSaga from 'data/sagas/rootSaga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { attackReducer } from '../attack/reducer';
import { rollReducer } from '../roll/reducer';

const initStore = () => {
  const initialState = {};
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  const rootReducer = combineReducers({
    health: attackReducer,
    rolls: rollReducer,
  });

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  const store = createStore(rootReducer, initialState, composedEnhancers);
  sagaMiddleware.run(rootSaga);

  return store;
};

const store = initStore();

export default store;
