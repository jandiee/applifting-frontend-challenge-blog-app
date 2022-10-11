import React from "react";
import ContentWrapper from "./ContentWrapper";

type Props = {
  children?: React.ReactNode;
};

const PageHeader = ({ children }: Props) => {
  return (
    <header className="bg-secondary opacity-70 text-secondary-content">
      <ContentWrapper>{children}</ContentWrapper>
    </header>
  );
};

export default PageHeader;
