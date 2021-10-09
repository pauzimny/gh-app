import React from "react";
import { issuesMock } from "../../utils/mocks/issues-mock";
import Issue from "../Issue/Issue";
import "./DailyIssues.scss";

const DailyIssues = () => {
  return (
    <div className="daily-issues">
      <h6 className="daily-issues__date">19-07-2016</h6>
      {issuesMock.map((i, index) => (
        <Issue key={index} open={i.open} name={i.name} id={i.id} />
      ))}
    </div>
  );
};

export default DailyIssues;
