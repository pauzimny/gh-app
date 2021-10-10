import React from "react";

const StarSvg = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill={open ? "none" : "rgb(33, 35, 61)"}
  >
    <path
      d="M8.500,0.000 L11.301,5.028 L16.999,6.112 L13.033,10.302 L13.753,16.000 L8.500,13.561 L3.247,16.000 L3.967,10.302 L0.001,6.112 L5.699,5.028 L8.500,0.000 "
      className="cls-1"
      stroke={open ? "rgb(224, 224, 224)" : "none"}
      strokeWidth={open ? "1" : "none"}
    />
  </svg>
);

export default StarSvg;
