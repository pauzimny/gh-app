import React, { useContext } from "react";
import "./Issue.scss";
import StarSvg from "../../utils/StarSvg/StarSvg";
import { IssuesContext } from "../../state/IssuesContext";
import { TOGGLE_ISSUE } from "../../state/issues-reducer";

const Issue = ({ name, id, open }) => {
  const { dispatch } = useContext(IssuesContext);

  const handleIssueState = () => {
    dispatch({ type: TOGGLE_ISSUE, id });
  };

  return (
    <li className="issue">
      <div className="issue__name">{name}</div>
      <button className="issue__button" onClick={() => handleIssueState()}>
        <StarSvg open={open} />
      </button>
    </li>
  );
};

export default Issue;
