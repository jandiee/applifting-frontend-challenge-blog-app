import dayjs from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { ROUTES } from "../../Routes/routes";
import Header from "../Header";
import SoftText from "../utils/SoftText";

type Props = {
  article: TArticle;
};

const ArticlePreview = ({ article }: Props) => {
  const navigate = useNavigate();

  const handleReadWholeArticleClick = () => {
    navigate(ROUTES.articleDetail(article.articleId));
  };

  // README:
  // I would like to fetch the number of comments on the article, but
  // it would mean to call a different endpoint for each of the article (even just for the preview!)
  // Better solution would be to redesign the backend API for this purpose...

  return (
    <div className="flex flex-nowrap gap-8 max-h-48">
      {/* TODO: fetch img using imageId */}
      <img
        src="https://picsum.photos/200"
        width="200"
        height="200"
        style={{ width: 200, height: 200 }}
      />
      <div className="space-y-2">
        <Header size="xl">{article.title || "-"}</Header>
        <SoftText>
          <div className="flex gap-2">
            {/* An article doesn't have an author in BE design */}
            {/* <span>??? Elizabeth Strain ???</span>
            <span>&#x2022;</span> */}
            <span>{dayjs(article.createdAt).format("l")}</span>
          </div>
        </SoftText>
        <TextTruncate
          line={4}
          containerClassName="text-sm text-gray-900"
          textElement="span"
          text={article.perex}
        />
        <div className="flex items-center text-gray-500 text-sm gap-4">
          <button
            className="btn btn-link btn-xs p-0"
            onClick={() => handleReadWholeArticleClick()}
          >
            Read whole article
          </button>
          {/* reason in README at the top */}
          {/* <span>4 comments</span> */}
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
