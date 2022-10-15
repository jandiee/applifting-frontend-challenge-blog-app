import React from "react";
import ContentWrapper from "./ContentWrapper";

type Props = {
  children: React.ReactNode;
};

const PageContentWrapper = ({ children }: Props) => {
  return (
    <div className="my-8 mx-8">
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

export default PageContentWrapper;
