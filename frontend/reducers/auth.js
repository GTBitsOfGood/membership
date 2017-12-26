import * as types from '../actions/types';

const initialState = {
  email: '',
  first_name: '',
  last_name: '',
  user: null,
};

// Reducer that handles all user authentication
// Note Object.assign is used to keep state immutable
function Auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return {
        user: action.user
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default Auth;
