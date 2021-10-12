import React, { useContext, useEffect, useState } from "react";
import DailyIssues from "../DailyIssues/DailyIssues";
import { IssuesContext } from "../../state/IssuesContext";
import { filterEntries } from "../../utils/helpers/helpers";
import _ from "lodash";
import "./IssuesList.scss";

const IssuesList = () => {
  const [groupedIssues, setGroupedIssues] = useState();
  const { issues, currentType } = useContext(IssuesContext);

  useEffect(() => {
    const filteredIssues = filterEntries(currentType, issues);
    const groupedByDate = _.mapValues(
      _.groupBy(filteredIssues, "date"),
      (list) => list.map((i) => i)
    );

    setGroupedIssues(groupedByDate);
  }, [currentType, issues]);

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
