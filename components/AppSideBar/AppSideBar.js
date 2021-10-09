import React from "react";
import SystemButtons from "../../utils/SystemButtons/SystemButtons";
import "./AppSideBar.scss";
import AppMenu from "../AppMenu/AppMenu";

const AppSideBar = () => {
  return (
    <div className="app-nav">
      <SystemButtons />
      <AppMenu />
    </div>
  );
};

export default AppSideBar;
