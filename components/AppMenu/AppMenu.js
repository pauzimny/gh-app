import React from "react";
import ghIcon from "../../assets/icon-github.svg";
import closedIcon from "../../assets/icon-closed-issue.svg";
import openIcon from "../../assets/icon-open-issue.svg";
import "./AppMenu.scss";

const MenuEntry = ({ type, icon, active }) => {
  // TODO: state handlers for issues count
  return (
    <li className={active ? "menu-entry active" : "menu-entry"}>
      <img src={icon} alt="type" />
      <div className="menu-entry__type">{type}</div>
      <div className="menu-entry__count">12</div>
    </li>
  );
};

const menuEntries = [
  {
    type: "All",
    icon: ghIcon,
    active: true,
  },
  {
    type: "Open",
    icon: openIcon,
    active: false,
  },
  {
    type: "Closed",
    icon: closedIcon,
    active: false,
  },
];

const AppMenu = () => (
  <nav>
    <ul className="app-menu">
      {menuEntries.map((e, i) => (
        <MenuEntry key={i} type={e.type} icon={e.icon} active={e.active} />
      ))}
    </ul>
  </nav>
);

export default AppMenu;
