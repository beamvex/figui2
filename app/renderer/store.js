import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware, push } from 'connected-react-router';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import user from './reducers/user';
import userActions from './actions/user';
import footballers from './reducers/footballers';
import footballActions from './actions/footballers';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...footballActions,
    ...userActions,
    push,
  };

  const reducers = {
    footballers,
    user,
  };

  const middlewares = [thunk, router];

  const composeEnhancers = (() => {
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (process.env.NODE_ENV === 'development' && compose_) {
      return compose_({ actionCreators });
    }
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares), persistState());
  const rootReducer = combineReducers(reducers);
  const rootReducerWithRouter = connectRouter(routerHistory)(rootReducer);

  return createStore(rootReducerWithRouter, initialState, enhancer);
}
