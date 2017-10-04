import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import recipeReducer from 'reducers/recipeReducer';

const logger = createLogger({
  //options
});

const store = createStore(combineReducers({
  recipeReducer
}), {}, applyMiddleware(logger));

export default store;
