import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentWrapper = ({ children }: Props) => {
  return <div className="w-full max-w-screen-lg mx-auto">{children}</div>;
};

export default ContentWrapper;
