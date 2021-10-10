import React from "react";
import { useEffect, useState } from "react";
import "./IssuesList.scss";
import DailyIssues from "../DailyIssues/DailyIssues";
import { issuesMock } from "../../utils/mocks/issues-mock";
import _ from "lodash";

const IssuesList = () => {
  const [groupedIssues, setGroupedIssues] = useState();

  useEffect(() => {
    const grouped = _.mapValues(_.groupBy(issuesMock, "date"), (list) =>
      list.map((i) => i)
    );
    setGroupedIssues(grouped);
  }, []);

  return (
    <div className="issues-list">
      {groupedIssues &&
        Object.keys(groupedIssues).map((k, i) => (
          <DailyIssues key={i} issues={groupedIssues[k]} />
        ))}
    </div>
  );
};

export default IssuesList;
