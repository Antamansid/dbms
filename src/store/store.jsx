import {createStore, combineReducers, applyMiddleware} from 'redux';

import { userReducers } from '../reducers/userReducers.jsx';
import { adressReducers } from '../reducers/adressReducers.jsx';

import logger from 'redux-logger';

import promiseMiddlware from 'redux-promise-middleware';

const middleware = applyMiddleware(promiseMiddlware(), logger());

//Комбинем редюсеры
const reducers = combineReducers({
  users: userReducers,
  adresses: adressReducers
});

const store = createStore(reducers, middleware);

export default store;