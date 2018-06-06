import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers';

const configureStore = initialState => {
  const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

  const composeMiddleWare = devTools
    ? compose(applyMiddleware(thunk), devTools())
    : compose(applyMiddleware(thunk));
  return createStore(rootReducer, initialState, composeMiddleWare);
};

export default configureStore;
