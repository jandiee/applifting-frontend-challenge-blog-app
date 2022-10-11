import React from "react";

type Props = {
  children?: React.ReactNode;
  bold?: boolean;
  size?: "base" | "xl";
};

const Header = ({ children, bold, size }: Props) => {
  const classNames = ["text-gray-900"];

  if (bold) {
    classNames.push("font-bold");
  }

  if (size === "base") {
    classNames.push("text-base");
  } else if (size === "xl") {
    classNames.push("text-xl");
  } else {
    classNames.push("text-2xl");
  }

  return <span className={classNames.join(" ")}>{children}</span>;
};

export default Header;
