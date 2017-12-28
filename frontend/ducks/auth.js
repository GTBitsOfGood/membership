// NPM Import
import axios from 'axios';
import { push } from 'react-router-redux';

// Actions
const LOGOUT = Symbol("app/auth/logout");
const LOGIN = Symbol("app/auth/login");

// State Reducer
const initialState = {
  user: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
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
        const { user } = data;
        if (user) {
          return dispatch(loginGenerator(user));
        }
        return dispatch(push('/login'));
      })
      .catch(() => dispatch(push("/login")));
  };
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem("state");
    axios.get("/api/logout").then(() => dispatch(logoutGenerator()));
    return dispatch(push("/login"));
  };
}

 // Helper Action Creator Generators
function loginGenerator(user) {
  return user
    ? { type: LOGIN, user }
    : { type: LOGIN };
}

function logoutGenerator() {
  return { type: LOGOUT };
}
