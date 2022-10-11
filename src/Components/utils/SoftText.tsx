import React from "react";

type Props = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "base";
};

const SoftText = ({ children, size }: Props) => {
  const classNames = ["text-gray-500"];
  if (size === "base") {
    classNames.push("text-base");
  } else if (size === "sm") {
    classNames.push("text-sm");
  } else {
    classNames.push("text-xs");
  }

  return <div className={classNames.join(" ")}>{children}</div>;
};

export default SoftText;
