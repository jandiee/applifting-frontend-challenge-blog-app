import React from "react";
import Header from "../Components/Header";
import MyArticlesList from "../Components/MyArticles/MyArticlesList";
import NavLink from "../Routes/NavLink";
import { ROUTES } from "../Routes/routes";

const MyArticles = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-start gap-4">
        <Header>My articles</Header>
        <NavLink to={ROUTES.newArticle()} className="btn btn-primary btn-sm">
          Create new article
        </NavLink>
      </div>
      <main>
        <MyArticlesList />
      </main>
    </div>
  );
};

export default MyArticles;
