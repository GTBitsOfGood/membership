// NPM Import
import axios from 'axios';
import { push } from 'react-router-redux';
// Action Creators
import * as types from './types';


/*
 * Login Async Action Creator
 */
export function login() {
  return (dispatch, getState) => { // using Thunks
    axios.get('/api/profile')
      .then(({ data }) => {
        if (data.user) {
          console.log('about to successfully authenticate user');
          return dispatch(loginGenerator(data.user));
        }
        console.log('fail to login....');
        // return dispatch(push('/login'));
      })
      .catch(err => {
        console.log('pushing login.... ')
        dispatch(push('/login')
      }));
  };
}

/*
 * Registration Async Action Creator
 */
export function register() {
  return (dispatch, getState) => {
    const { email, password, first_name, last_name, date_of_birth,
            street_address, city, state, zip_code, phone_number } = getState().auth;
    axios.post('/api/users', { email, password, first_name, last_name,
      date_of_birth, street_address, city, state, zip_code, phone_number })
      .then(resp => {
        dispatch(registerGenerator(resp.data.user));
      })
      .catch(err => dispatch(registerGenerator()));
  };
}

/*
 * Logout Async Action Creator
 */
export function logout() {
  return function(dispatch, getState) {
    sessionStorage.removeItem('state');
    axios.get('/api/logout')
      .then(resp => dispatch(logoutGenerator()));
  };
}


/*
 * Helper Action Creator Generators
 */
function loginGenerator(user) {
  return user ? { type: types.LOGIN_SUCCESS, user } : { type: types.LOGIN_FAILED };
}

function registerGenerator(user) {
  return user ? { type: types.REGISTRATION_SUCCESS, user } : { type: types.REGISTRATION_FAILED };
}

function logoutGenerator() {
  return { type: types.LOGOUT };
}