import React from "react";
import { HiArrowSmRight, HiUserCircle } from "react-icons/hi";
import { useAppSelector } from "../hooks";
import NavLink from "../Routes/NavLink";
import { ROUTES } from "../Routes/routes";

const TopMenuAuth = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="flex justify-start items-center gap-4">
      {isLoggedIn && (
        <>
          <ul className="menu menu-horizontal">
            <li>
              <NavLink to={ROUTES.myArticles()}>My articles</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.newArticle()}>Create article</NavLink>
            </li>
          </ul>
          <div className="dropdown h-9">
            <label tabIndex={0} className="cursor-pointer p-0">
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
        </>
      )}

      {!isLoggedIn && (
        <ul className="menu menu-horizontal">
          <li>
            <NavLink to={ROUTES.login()}>
              Log in
              <HiArrowSmRight />
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default TopMenuAuth;
