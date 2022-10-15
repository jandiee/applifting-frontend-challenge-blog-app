import React from "react";

type Props = {
  children: React.ReactNode;
  size?: "xs" | "sm" | "base";
  className?: string & React.HTMLAttributes<HTMLSpanElement>;
};

const ErrorText = ({ children, size, className }: Props) => {
  const classNames = ["text-red-500", "font-bold"];
  if (size === "base") {
    classNames.push("text-base");
  } else if (size === "sm") {
    classNames.push("text-sm");
  } else {
    classNames.push("text-xs");
  }

  return (
    <span className={`${className} ${classNames.join(" ")}`}>{children}</span>
  );
};

export default ErrorText;
