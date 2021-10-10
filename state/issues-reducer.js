export const SET_ACTIVE_TYPE = "SET_ACTIVE_TYPE";
export const TOGGLE_ISSUE = "TOGGLE_ISSUE";

export const issuesReducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_TYPE:
      return { ...state, currentType: action.payload };
    case TOGGLE_ISSUE:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return { ...issue, open: !issue.open };
          }
          return issue;
        }),
      };
    default:
      return state;
  }
};
