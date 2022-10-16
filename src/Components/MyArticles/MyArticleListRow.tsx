import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import { useAppSelector } from "../../hooks";
import NavLink from "../../Routes/NavLink";
import { ROUTES } from "../../Routes/routes";
import agent from "../../Services/agent";

type Props = {
  article: TArticle;
  onDelete: () => void;
};

const MyArticleListRow = ({ article, onDelete }: Props) => {
  const navigate = useNavigate();
  const tenantName = useAppSelector((state) => state.auth.tenantName);

  const handleDelete = async () => {
    await agent.Articles.delete(article.articleId);
    onDelete();
  };

  const handleEdit = () => {
    navigate(ROUTES.editArticle(article.articleId));
  };

  return (
    <tr>
      <td>
        <NavLink to={ROUTES.articleDetail(article.articleId)}>
          <span className="link link-neutral">
            {article.title || "No title"}
          </span>
        </NavLink>
      </td>
      <td className="max-w-xs">
        <TextTruncate
          line={1}
          text={article.perex || "No perex"}
          textElement="span"
        />
      </td>
      <td>{tenantName || "Author unknown"}</td>
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
