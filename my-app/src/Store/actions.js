// src/store/actions.js

export const setSelectedAdmin = (admin) => ({
  type: 'SET_SELECTED_ADMIN',
  payload: admin,
});

export const setSelectedWorkspace = (workspace) => ({
  type: 'SET_SELECTED_WORKSPACE',
  payload: workspace,
});

export const setSelectedSidebarComponent = (component) => ({
  type: 'SET_SELECTED_SIDEBAR_COMPONENT',
  payload: component,
});

export const setSelectedSubPage = (sub) => ({
  type: 'SET_SELECTED_SUB_PAGE',
  payload: sub,
});