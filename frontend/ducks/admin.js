// NPM Import
import axios from "axios";
import { push } from "react-router-redux";

import { projectData, applicantData } from './sample-data';

// Actions

const LOAD_PROJECTS = Symbol("app/admin/LOAD_PROJECTS");
const LOAD_APPLICANTS = Symbol("app/admin/LOAD_APPLICANTS");
const UPDATE_CURRENT_PROJECT = Symbol("app/admin/UPDATE_CURRENT_PROJECT");
const UPDATE_CURRENT_APPLICANT = Symbol("app/admin/UPDATE_CURRENT_APPLICANT");


// State Reducer
const initialState = {
  applicants: [],
  currentApplicant: null,
  projects: [],
  currentProject: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return { ...state, projects: action.projects };
    case LOAD_APPLICANTS:
      return { ...state, applicants: action.applicants };
    case UPDATE_CURRENT_PROJECT:
      return { ...state, currentProject: action.project };
    case UPDATE_CURRENT_APPLICANT:
      return { ...state, currentApplicant: action.applicant };
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

export function updateCurrentApplicant(id) {
  return (dispatch, getState) => {
    const { applicants } = getState().admin;
    const applicant = applicants.find(element => element._id === id);
    dispatch(push(`/applicant/${id}`));
    return dispatch({ type: UPDATE_CURRENT_APPLICANT, applicant });
  };
}
export function loadProjects() {
  return (dispatch) => {
    // this should be updated with an API CALL
    return dispatch({ type: LOAD_PROJECTS, projects: projectData });
  };
}

export function loadApplicants() {
  return (dispatch) => {
    // this should be updated with an API CALL
    return dispatch({ type: LOAD_APPLICANTS, applicants: applicantData });
  };
}


