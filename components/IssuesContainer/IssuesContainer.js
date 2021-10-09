import React from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import "./IssuesContainer.scss";
import IssuesList from "../IssuesList/IssuesList";

const IssuesContainer = () => {
  return (
    <div className="issues-container">
      <AppNavigation />
      <IssuesList />
    </div>
  );
};

export default IssuesContainer;
