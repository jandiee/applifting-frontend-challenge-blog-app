import React from "react";
import Header from "../Components/Header";
import ArticlePreview from "../Components/RecentArticles/ArticlePreview";

const RecentArticles = () => {
  return (
    <>
      <Header>Recent articles</Header>
      <div className="mt-8 space-y-8">
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
      </div>
    </>
  );
};

export default RecentArticles;
