import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  // add support for Redux dev tools
  // const composeEnhancers = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE || compose;
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
