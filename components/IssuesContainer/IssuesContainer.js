import React, { useReducer } from "react";
import AppSideBar from "../AppSideBar/AppSideBar";
import "./IssuesContainer.scss";
import { initialState } from "../../state/IssuesContext";

import IssuesList from "../IssuesList/IssuesList";
import { IssuesContext } from "../../state/IssuesContext";
import { issuesReducer } from "../../state/issues-reducer";

const IssuesContainer = () => {
  const [state, dispatch] = useReducer(issuesReducer, initialState);

  return (
    <div className="issues-container">
      <IssuesContext.Provider
        value={{
          issues: state.issues,
          currentType: state.currentType,
          dispatch,
        }}
      >
        <AppSideBar />
        <IssuesList />
      </IssuesContext.Provider>
    </div>
  );
};

export default IssuesContainer;
