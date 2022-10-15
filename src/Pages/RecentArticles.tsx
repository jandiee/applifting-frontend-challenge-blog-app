import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ArticlePreview from "../Components/RecentArticles/ArticlePreview";
import agent from "../Services/agent";

const RecentArticles = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);

  useEffect(() => {
    (async () => {
      const response = await agent.Articles.all();
      setArticles(response.items);
    })();
  }, []);

  return (
    <>
      <Header>Recent articles</Header>
      <div className="mt-8 space-y-8">
        {articles.map((item) => {
          console.log(item);
          return <ArticlePreview key={item.articleId} article={item} />;
        })}
        {/* <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview />
        <ArticlePreview /> */}
      </div>
    </>
  );
};

export default RecentArticles;
