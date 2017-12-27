// NPM Import
import axios from 'axios';
import { push } from 'react-router-redux';

// Actions
const LOGOUT = Symbol("app/auth/logout");
const LOGIN = Symbol("app/auth/login");
const LOGIN_FAILED = Symbol("LOGIN_FAILED");
const LOGIN_SUCCESS = Symbol("LOGIN_SUCCESS");
const REGISTRATION_FAILED = Symbol("REGISTRATION_FAILED");
const REGISTRATION_SUCCESS = Symbol("REGISTRATION_SUCCESS");

// State Reducer
const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: action.user
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

// Action Creators

export function login() {
  return dispatch => {
    axios
      .get("/api/profile")
      .then(({ data }) => {
        if (data.user) {
          console.log("about to successfully authenticate user");
          dispatch(loginGenerator(data.user));
          return dispatch(push("/"));
        }
        console.log("fail to login....");
        return dispatch(push('/login'));
      })
      .catch(err => {
        console.log("pushing login.... ");
        dispatch(push("/login"));
      });
  };
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem("state");
    axios.get("/api/logout").then(resp => dispatch(logoutGenerator()));
    return dispatch(push("/login"));
  };
}

 // Helper Action Creator Generators
function loginGenerator(user) {
  return user
    ? { type: LOGIN_SUCCESS, user }
    : { type: LOGIN_FAILED };
}


function logoutGenerator() {
  return { type: LOGOUT };
}
