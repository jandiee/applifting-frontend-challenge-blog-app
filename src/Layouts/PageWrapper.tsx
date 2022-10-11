import React from "react";
import { Outlet } from "react-router-dom";
import TopMenu from "../Components/TopMenu";
import PageContentWrapper from "./PageContentWrapper";
import PageHeader from "./PageHeader";

const PageWrapper = () => {
  return (
    <div>
      <PageHeader>
        <TopMenu />
      </PageHeader>
      <PageContentWrapper>
        <Outlet />
      </PageContentWrapper>
    </div>
  );
};

export default PageWrapper;
