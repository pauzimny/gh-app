import React, { useContext, useEffect, useState } from "react";
import ghIcon from "../../assets/icon-github.svg";
import closedIcon from "../../assets/icon-closed-issue.svg";
import openIcon from "../../assets/icon-open-issue.svg";
import { countEntries } from "../../utils/helpers/helpers";
import { IssuesContext } from "../../state/IssuesContext";
import { SET_ACTIVE_TYPE } from "../../state/issues-reducer";
import "./AppMenu.scss";

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

const MenuEntry = ({ type, icon, active, entryStateCallback }) => {
  const [entriesCount, setEntriesCount] = useState();
  const { issues } = useContext(IssuesContext);

  useEffect(() => {
    setEntriesCount(countEntries(type, issues));
  }, [type, issues]);

  return (
    <li className={active ? "menu-entry active" : "menu-entry"}>
      <button
        className="menu-entry__button"
        onClick={() => entryStateCallback(type)}
      >
        <img src={icon} alt="type" />
        <div className="menu-entry__type">{type}</div>
        <div className="menu-entry__count">{entriesCount}</div>
      </button>
    </li>
  );
};

const AppMenu = () => {
  const [entries, setEntries] = useState(menuEntries);
  const { dispatch } = useContext(IssuesContext);

  const handleEntryState = (activeType) => {
    dispatch({ type: SET_ACTIVE_TYPE, payload: activeType });

    setEntries((prevState) =>
      prevState.map((e) => {
        if (e.type === activeType) {
          return { ...e, active: true };
        }
        return { ...e, active: false };
      })
    );
  };

  return (
    <nav>
      <ul className="app-menu">
        {entries &&
          entries.map((e, i) => (
            <MenuEntry
              key={i}
              type={e.type}
              icon={e.icon}
              active={e.active}
              entryStateCallback={handleEntryState}
            />
          ))}
      </ul>
    </nav>
  );
};

export default AppMenu;
