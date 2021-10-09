import React from "react";
import AppSideBar from "../AppSideBar/AppSideBar";
import "./IssuesContainer.scss";
import DailyIssues from "../DailyIssues/DailyIssues";

const IssuesContainer = () => {
  return (
    <div className="issues-container">
      <AppSideBar />
      <DailyIssues />
    </div>
  );
};

export default IssuesContainer;
