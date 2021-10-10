import React from "react";
import AppSideBar from "../AppSideBar/AppSideBar";
import "./IssuesContainer.scss";

import IssuesList from "../IssuesList/IssuesList";

const IssuesContainer = () => {
  return (
    <div className="issues-container">
      <AppSideBar />
      <IssuesList />
    </div>
  );
};

export default IssuesContainer;
