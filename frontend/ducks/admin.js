// NPM Import
import axios from "axios";
import { push } from "react-router-redux";

import { projectData, applicantData } from './sample-data';

// Actions

const LOAD_PROJECTS = Symbol("app/admin/LOAD_PROJECTS");
const LOAD_APPLICANTS = Symbol("app/admin/LOAD_APPLICANTS");
const UPDATE_CURRENT_PROJECT = Symbol("app/admin/UPDATE_CURRENT_PROJECT");
const UPDATE_CURRENT_APPLICANT = Symbol("app/admin/UPDATE_CURRENT_APPLICANT");
const LOAD_NUM_APPS_SUBMITTED = Symbol("app/admin/LOAD_NUM_APPS_SUBMITTED");
const LOAD_NUM_APPS_REJECTED = Symbol("app/admin/LOAD_NUM_APPS_REJECTED");
const LOAD_NUM_APPS_ACCEPTED = Symbol("app/admin/LOAD_NUM_APPS_ACCEPTED");
const LOAD_NUM_PM_INTEREST = Symbol("app/admin/LOAD_NUM_PM_INTEREST");


// State Reducer
const initialState = {
  applicants: [],
  currentApplicant: null,
  projects: [],
  currentProject: null,
  numAppsSubmitted: 0,
  numAppsRejected: 0,
  numAppsAccepted: 0,
  numPMInterest: 0,
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
    case LOAD_NUM_APPS_ACCEPTED:
      return { ...state, numAppsAccepted: action.accepted };
    case LOAD_NUM_APPS_SUBMITTED:
      return { ...state, numAppsSubmitted: action.submitted };
    case LOAD_NUM_APPS_REJECTED:
      return { ...state, numAppsRejected: action.rejected };
    case LOAD_NUM_PM_INTEREST:
      return { ...state, numPMInterest: action.pm_interest };
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
    dispatch(push(`/applicants/${id}`));
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
    axios.get('/api/users')
      .then(({ data }) => {
        dispatch({ type: LOAD_APPLICANTS, applicants: data.users });
      });
    // return dispatch({ type: LOAD_APPLICANTS, applicants: applicantData });
  };
}

export function loadNums() {
  return (dispatch) => {
    axios.get('/api/users?count=submitted')
      .then(({ data }) => {
        dispatch({ type: LOAD_NUM_APPS_SUBMITTED, submitted: data.submitted });
      });
    axios.get('/api/users?count=accepted')
      .then(({ data }) => {
        dispatch({ type: LOAD_NUM_APPS_ACCEPTED, accepted: data.accepted });
      });
    axios.get('/api/users?count=rejected')
      .then(({ data }) => {
        dispatch({ type: LOAD_NUM_APPS_REJECTED, rejected: data.rejected });
      });
    axios.get('/api/users?count=pm_interest')
      .then(({ data }) => {
        dispatch({ type: LOAD_NUM_PM_INTEREST, pm_interest: data.pm_interest });
      });
  };
}

