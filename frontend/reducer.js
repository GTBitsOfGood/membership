import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import auth from './ducks/auth';
import admin from './ducks/admin';

export default combineReducers({
  auth,
  admin,
  router
});
