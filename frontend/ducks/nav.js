// Actions
const NAVIGATE = Symbol("NAVIGATE");


// initialState
const initialState = {};
// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}

// Action Creators
// export function navigateTo(path) {
//   return { type: NAVIGATE, path};
// }

// side effects, only as applicable
// e.g. thunks, epics, etc
export function navigateTo(path) {
  return dispatch => {
    sessionStorage.removeItem('state');
    axios.get('/api/logout')
      .then(resp => dispatch(logoutGenerator()));
  };
  };
}
