import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageWrapper from "../Layouts/PageWrapper";
import About from "../Pages/About";
import ArticleDetail from "../Pages/ArticleDetail";
import ArticleEdit from "../Pages/ArticleEdit";
import Login from "../Pages/Login";
import MyArticles from "../Pages/MyArticles";
import NotFound from "../Pages/NotFound";
import RecentArticles from "../Pages/RecentArticles";
import AuthenticatedRoute from "./AuthenticatedRoute";
import { ROUTES } from "./routes";

const MainAppRouter = () => {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route path={ROUTES.recentArticles} element={<RecentArticles />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.articles}>
          {/* Temporary redirect just to keep the path structure clean */}
          <Route
            index
            element={<Navigate to={ROUTES.recentArticles} replace={true} />}
          />
          <Route path={ROUTES.articleDetail} element={<ArticleDetail />} />
        </Route>
        <Route path={ROUTES.myArticles} element={<AuthenticatedRoute />}>
          <Route index element={<MyArticles />} />
          <Route path={ROUTES.newArticle} element={<ArticleEdit />} />
          <Route path={ROUTES.editArticle} element={<ArticleEdit />} />
        </Route>
        <Route path={ROUTES.about} element={<About />} />
      </Route>
      <Route path={ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
};

export default MainAppRouter;
