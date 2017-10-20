import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import  rootReducer from './Reducers';

const middleware = applyMiddleware(logger);

const store = createStore(rootReducer,middleware);

export default store;