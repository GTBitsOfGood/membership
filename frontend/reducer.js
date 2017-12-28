import { combineReducers } from "redux";
import { reducer } from "react-redux-sweetalert";
import { routerReducer as router } from "react-router-redux";

import auth from "./ducks/auth";
import admin from "./ducks/admin";

export default combineReducers({
  auth,
  admin,
  sweetalert: reducer,
  router
});
