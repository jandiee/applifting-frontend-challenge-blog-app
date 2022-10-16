import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import agent from "../../Services/agent";
import MyArticleListRow from "./MyArticleListRow";

const MyArticlesList = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);

  useEffect(() => {
    (async () => {
      const response = await agent.Articles.all();
      setArticles(response.items);
    })();
  }, []);

  const handleArticleDelete = (articleId: string) => {
    setArticles((old) => old.filter((item) => item.articleId !== articleId));
  };

  return (
    <div className="overflow-x-auto">
      {articles.length > 0 ? (
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Article title</th>
              <th>Perex</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles
              .sort(
                (a: TArticle, b: TArticle) =>
                  dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()
              )
              .map((item) => {
                return (
                  <MyArticleListRow
                    key={item.articleId}
                    article={item}
                    onDelete={() => handleArticleDelete(item.articleId)}
                  />
                );
              })}
          </tbody>
        </table>
      ) : (
        <div className="flex items-center justify-center">No articles</div>
      )}
    </div>
  );
};

export default MyArticlesList;
