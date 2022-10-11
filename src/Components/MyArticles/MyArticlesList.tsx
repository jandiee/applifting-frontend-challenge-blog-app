import React from "react";
import MyArticleListRow from "./MyArticleListRow";

const MyArticlesList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
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
          <MyArticleListRow />
          <MyArticleListRow />
          <MyArticleListRow />
          <MyArticleListRow />
        </tbody>
      </table>
    </div>
  );
};

export default MyArticlesList;
