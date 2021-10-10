import React from "react";
import Issue from "../Issue/Issue";
import "./DailyIssues.scss";

const DailyIssues = ({ issues }) => {
  return (
    <div className="daily-issues">
      <h6 className="daily-issues__date">{issues[0].date}</h6>
      {issues.map((i, index) => (
        <Issue key={index} open={i.open} name={i.name} id={i.id} />
      ))}
    </div>
  );
};

export default DailyIssues;
