import React from "react";
import "./Issue.scss";
import StarSvg from "../../utils/StarSvg/StarSvg";

const Issue = ({ name, id, open }) => {
  return (
    <li className="issue">
      <div className="issue__name">{name}</div>
      <button className="issue__button">
        <StarSvg open={open} />
      </button>
    </li>
  );
};

export default Issue;
