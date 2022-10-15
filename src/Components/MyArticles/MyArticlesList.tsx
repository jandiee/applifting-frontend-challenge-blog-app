import React, { useEffect, useState } from "react";
import agent from "../../Services/agent";
import MyArticleListRow from "./MyArticleListRow";

const MyArticlesList = () => {
  const [articles, setArticles] = useState<TArticle[]>([]);
  // TODO: checkboxes in table functionality
  // const [selectedArticles, setSelectedArticles] = useState<string[]>([]);

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
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>
              <input type="checkbox" className="checkbox" />
            </th>
            <th>Article title</th>
            <th>Perex</th>
            <th>Author</th>
            <th># of comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((item) => {
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
    </div>
  );
};

export default MyArticlesList;
