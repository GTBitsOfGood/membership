// NPM Import
import axios from "axios";
import { push } from "react-router-redux";

import { adminData } from './sample-data';

// Actions
const UPDATE_CURRENT_PROJECT = Symbol("app/admin/UPDATE_CURRENT_PROJECT");
const LOAD_PROJECTS = Symbol("app/admin/LOAD_PROJECTS");

// State Reducer
const initialState = {
  projects: [],
  currentProject: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: action.projects,
      };
    case UPDATE_CURRENT_PROJECT:
      return {
        ...state,
        currentProject: action.project
      };
    default:
      return state;
  }
}

// Action Creators
export function updateCurrentProject(id) {
  return (dispatch, getState) => {
    const { projects } = getState().admin;
    const project = projects.find(element => element._id === id);
    dispatch(push(`/projects/${id}`));
    return dispatch({ type: UPDATE_CURRENT_PROJECT, project });
  };
}
export function loadProjects() {
  return (dispatch) => {
    // this should be updated with an API CALL
    return dispatch({ type: LOAD_PROJECTS, projects: adminData });
  };
}


