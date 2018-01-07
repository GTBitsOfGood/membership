// NPM Import
import axios from "axios";
import { push } from "react-router-redux";


// Actions

const LOAD_PROJECTS = Symbol("app/admin/LOAD_PROJECTS");
const LOAD_MORE_PROJECTS = Symbol("app/admin/LOAD_MORE_PROJECTS");
const LOAD_APPLICANTS = Symbol("app/admin/LOAD_APPLICANTS");
const LOAD_MORE_APPLICANTS = Symbol("app/admin/LOAD_MORE_APPLICANTS");
const UPDATE_CURRENT_PROJECT = Symbol("app/admin/UPDATE_CURRENT_PROJECT");
const UPDATE_CURRENT_APPLICANT = Symbol("app/admin/UPDATE_CURRENT_APPLICANT");
const LOAD_NUM_APPS_SUBMITTED = Symbol("app/admin/LOAD_NUM_APPS_SUBMITTED");
const LOAD_NUM_APPS_REJECTED = Symbol("app/admin/LOAD_NUM_APPS_REJECTED");
const LOAD_NUM_APPS_ACCEPTED = Symbol("app/admin/LOAD_NUM_APPS_ACCEPTED");
const LOAD_NUM_PM_INTEREST = Symbol("app/admin/LOAD_NUM_PM_INTEREST");


// State Reducer
const initialState = {
  applicants: [],
  applicantCount: 0,
  currentApplicant: null,
  projects: [],
  projectCount: 0,
  currentProject: null,
  numAppsSubmitted: 0,
  numAppsRejected: 0,
  numAppsAccepted: 0,
  numPMInterest: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      return {
        ...state,
        projects: action.projects,
        projectCount: action.projectCount,
      };
    case LOAD_MORE_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, ...action.projects],
        projectCount: action.projectCount,
      };
    case LOAD_APPLICANTS:
      return { ...state, applicants: action.applicants };
    case LOAD_MORE_APPLICANTS:
      return {
        ...state,
        applicants: [...state.applicants, ...action.applicants],
        applicantCount: action.applicantCount,
      };
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
  return dispatch => {
    dispatch(push(`/projects/${id}`));
    axios.get(`/api/projects/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: UPDATE_CURRENT_PROJECT, project: data.project
        });
      }).catch(console.log);
  };
}

export function updateCurrentApplicant(id) {
  return dispatch => {
    dispatch(push(`/applicants/${id}`));
    axios.get(`/api/users/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: UPDATE_CURRENT_APPLICANT, applicant: data.user
        });
      }).catch(console.log);
  };
}

export function loadProjects() {
  return dispatch => {
    axios.get('/api/projects')
      .then(({ data }) => {
        dispatch({
          type: LOAD_PROJECTS,
          projects: data.projects,
          projectCount: data.count
        });
      });
  };
}

export function loadMoreProjects(page, pageSize = 10) {
  return (dispatch, getState) => {
    const numLoaded = getState().admin.projects.length;
    const totalCount = getState().admin.projectCount;
    if (numLoaded < (page * pageSize) && numLoaded !== totalCount) {
      axios.get(`/api/projects?page=${page}`)
        .then(({ data }) => {
          dispatch({
            type: LOAD_MORE_PROJECTS,
            projects: data.projects,
            projectCount: data.count
          });
        });
    }
  };
}

export function loadApplicants() {
  return dispatch => {
    axios.get('/api/users')
      .then(({ data }) => {
        dispatch({
          type: LOAD_APPLICANTS,
          applicants: data.users,
          applicantCount: data.count
        });
      });
  };
}

export function loadMoreApplicants(page, pageSize = 10) {
  return (dispatch, getState) => {
    const numLoaded = getState().admin.applicants.length;
    const totalCount = getState().admin.applicantCount;
    if (numLoaded < (page * pageSize) && numLoaded !== totalCount) {
      axios.get(`/api/projects?page=${page}`)
        .then(({ data }) => {
          dispatch({
            type: LOAD_MORE_APPLICANTS,
            applicants: data.users,
            applicantCount: data.count
          });
        });
    }
  };
}

export function loadDashboard() {
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

