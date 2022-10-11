import React from "react";
import { NavLink as ReactRouterNavLink, NavLinkProps } from "react-router-dom";

const NavLink = (
  props: NavLinkProps & React.RefAttributes<HTMLAnchorElement>
) => {
  const classNames = ["rounded-full"];
  return (
    <ReactRouterNavLink
      to={props.to}
      className={({ isActive }) =>
        `${
          isActive ? "text-primary-content bg-primary-focus" : ""
        } ${classNames.join(" ")}`
      }
      end
    >
      {props.children}
    </ReactRouterNavLink>
  );
};

export default NavLink;
