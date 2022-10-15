import React from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { ROUTES } from "./routes";

const AuthenticatedRoute = (props: RouteProps) => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate
        to={ROUTES.recentArticles()}
        replace={true}
        state={{ redirectedFrom: props.path }}
      />
    );
  }

  return <Outlet />;
};

export default AuthenticatedRoute;
