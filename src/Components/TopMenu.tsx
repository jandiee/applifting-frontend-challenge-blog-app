import React from "react";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import NavLink from "../Routes/NavLink";
import { ROUTES } from "../Routes/routes";
import TopMenuAuth from "./TopMenuAuth";

const TopMenu = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start items-center gap-8">
        <NavLink to={ROUTES.recentArticles()}>
          <Logo title="logo" />
        </NavLink>
        <ul className="menu menu-horizontal">
          <li>
            <NavLink to={ROUTES.recentArticles()}>Recent articles</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.about()}>About</NavLink>
          </li>
        </ul>
      </div>
      <TopMenuAuth />
    </div>
  );
};

export default TopMenu;
