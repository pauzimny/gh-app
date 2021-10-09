import React from "react";
import "./Issue.scss";
import StarSvg from "../../utils/StarSvg/StarSvg";

const Issue = ({ name, id, open }) => {
  return (
    <li className="issue">
      <div className="issue__name">{name}</div>
      <div>
        <StarSvg open={open} />
      </div>
    </li>
  );
};

export default Issue;
