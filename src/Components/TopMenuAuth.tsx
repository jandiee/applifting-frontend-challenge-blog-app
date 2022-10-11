import React from "react";
import { HiArrowSmRight, HiUserCircle } from "react-icons/hi";
import NavLink from "../Routes/NavLink";
import { ROUTES } from "../Routes/routes";

const TopMenuAuth = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <ul className="menu menu-horizontal">
        <li>
          <NavLink to={ROUTES.myArticles}>My articles</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.newArticle}>Create article</NavLink>
        </li>
      </ul>
      <div className="dropdown">
        <label tabIndex={0} className="m-1">
          <HiUserCircle size={36} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 bg-opacity-100 shadow rounded-box p-2 w-52"
        >
          <li>
            <a>Log out</a>
          </li>
        </ul>
      </div>

      <ul className="menu menu-horizontal">
        <li>
          <NavLink to={ROUTES.login}>
            Log in
            <HiArrowSmRight />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TopMenuAuth;
