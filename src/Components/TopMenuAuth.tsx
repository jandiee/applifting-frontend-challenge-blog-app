import React from "react";
import { HiArrowSmRight, HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import NavLink from "../Routes/NavLink";
import { ROUTES } from "../Routes/routes";
import { authActions } from "../Store/authSlice";

const TopMenuAuth = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate(ROUTES.recentArticles());
  };

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
                <button onClick={() => handleLogout()}>Log out</button>
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
