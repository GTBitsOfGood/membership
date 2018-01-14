// NPM Import
import axios from 'axios';
import { push } from 'react-router-redux';

// Actions
const LOGOUT = Symbol('app/auth/logout');
const LOAD_USER = Symbol('app/auth/load_user');

// State Reducer
const initialState = {
  user: undefined
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
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
      .get('/api/profile')
      .then(({ data }) => {
        const { user } = data;
        if (user) {
          return dispatch(loadUser(user));
        }
        return dispatch(push('/login'));
      })
      .catch(() => dispatch(push('/login')));
  };
}

export function register(formData) {
  return (dispatch, getState) => {
    const { user } = getState().auth;
    axios
      .put(`/api/users/${user._id}`, {
        application_status: 'submitted',
        ...formData
      })
      .then(({ data }) => {
        dispatch(loadUser(data.user));
      })
      .catch(() => dispatch(push('/login')));
  };
}

export function logout() {
  return dispatch => {
    sessionStorage.removeItem('state');
    axios.get('/api/logout').then(() => dispatch(logoutGenerator()));
    return dispatch(push('/login'));
  };
}

// Helper Action Creator Generators
function loadUser(user) {
  return user ? { type: LOAD_USER, user } : {};
}

function logoutGenerator() {
  return { type: LOGOUT };
}
