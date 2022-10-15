import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ArticlePreview from "../Components/RecentArticles/ArticlePreview";
import agent from "../Services/agent";

const RecentArticles = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);

  useEffect(() => {
    (async () => {
      const response = await agent.Articles.all();
      // sort articles by createdAt descending, then save it to state
      setArticles(
        response.items.sort(
          (a: TArticle, b: TArticle) =>
            dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()
        )
      );
    })();
  }, []);

  return (
    <>
      <Header>Recent articles</Header>
      <div className="mt-8 space-y-8">
        {articles.map((item) => {
          return <ArticlePreview key={item.articleId} article={item} />;
        })}
      </div>
    </>
  );
};

export default RecentArticles;
