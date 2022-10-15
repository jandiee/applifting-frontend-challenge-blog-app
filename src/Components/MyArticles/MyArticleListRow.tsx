import React, { useEffect, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { useAppSelector } from "../../hooks";
import { ROUTES } from "../../Routes/routes";
import agent from "../../Services/agent";

type Props = {
  article: TArticle;
  onDelete: () => void;
};

const MyArticleListRow = ({ article, onDelete }: Props) => {
  const [articleDetail, setArticleDetail] = useState<TArticleDetail>();
  const navigate = useNavigate();
  const tenantName = useAppSelector((state) => state.auth.tenantName);

  useEffect(() => {
    (async () => {
      const response = await agent.Articles.detail(article.articleId);
      setArticleDetail(response);
    })();
  }, []);

  const handleDelete = async () => {
    await agent.Articles.delete(article.articleId);
    onDelete();
  };

  const handleEdit = () => {
    navigate(ROUTES.editArticle(article.articleId));
  };

  if (articleDetail === undefined) {
    return <tr></tr>;
  }

  return (
    <tr>
      <td>
        <input type="checkbox" className="checkbox" />
      </td>
      <td>{articleDetail.title || "No title"}</td>
      <td className="max-w-xs">
        <TextTruncate
          line={1}
          text={articleDetail.perex || articleDetail.content}
          textElement="span"
        />
      </td>
      <td>{tenantName || "Author unknown"}</td>
      <td>{articleDetail.comments.length}</td>
      <td>
        <div className="flex items-center gap-4">
          <div
            className="btn btn-link text-gray-900"
            onClick={() => handleEdit()}
          >
            <HiOutlinePencil size={18} />
          </div>
          <div
            className="btn btn-link text-gray-900"
            onClick={() => handleDelete()}
          >
            <HiOutlineTrash size={18} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MyArticleListRow;
