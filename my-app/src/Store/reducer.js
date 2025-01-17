// src/store/reducer.js

const initialState = {
  selectedAdmin: null,
  selectedWorkspace: "Workspace 1",
  selectedSidebarComponent: null,
  selectedSubPage: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_ADMIN':
      return { ...state, selectedAdmin: action.payload, selectedWorkspace: 1 };
    case 'SET_SELECTED_WORKSPACE':
      return { ...state, selectedWorkspace: action.payload };
    case 'SET_SELECTED_SIDEBAR_COMPONENT':
      return { ...state, selectedSidebarComponent: action.payload };
    case 'SET_SELECTED_SUB_PAGE':
      return { ...state, selectedSubPage: action.payload };
    default:
      return state;
  }
};

export default reducer;
