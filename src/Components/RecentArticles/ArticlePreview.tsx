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
        <Header size="xl">{article.title ?? "-"}</Header>
        <SoftText>
          <div className="flex gap-2">
            <span>??? Elizabeth Strain ???</span>
            <span>&#x2022;</span>
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
          {/* TODO: fetch articleDetail */}
          <span>4 comments</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
