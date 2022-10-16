import React, { useState } from "react";
import { HiPaperAirplane, HiUserCircle } from "react-icons/hi";
import agent from "../../Services/agent";
import ErrorText from "../utils/ErrorText";

type Props = {
  articleId: string;
  onCommentCreate: (comment: TArticleComment) => void;
};

const NewCommentForm = ({ articleId, onCommentCreate }: Props) => {
  const [commentDetails, setCommentDetails] = useState<
    Pick<TArticleComment, "articleId" | "author" | "content">
  >({ articleId, author: "", content: "" });
  const [error, setError] = useState("");

  const handleSendComment = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!commentDetails.author || !commentDetails.content) {
      setError("Please provide both author and content of the comment!");
      return;
    }

    setError("");
    const response = await agent.Comments.create(commentDetails);
    onCommentCreate(response);
    setCommentDetails({ articleId, author: "", content: "" });
  };

  return (
    <form onSubmit={handleSendComment}>
      <div className="space-y-4 max-w-md">
        <div className="flex gap-4 items-center">
          <HiUserCircle size={48} />
          <div className="form-control w-full">
            <input
              type="text"
              placeholder="Author"
              value={commentDetails.author}
              required
              onChange={(e) =>
                setCommentDetails((old) => ({ ...old, author: e.target.value }))
              }
              className="input input-bordered w-full input-sm"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <textarea
            placeholder="Content"
            value={commentDetails.content}
            required
            onChange={(e) =>
              setCommentDetails((old) => ({ ...old, content: e.target.value }))
            }
            className="textarea textarea-bordered w-full"
          />
        </div>
        {error && <ErrorText size="sm">{error}</ErrorText>}
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="gap-2 btn btn-primary btn-sm"
            onClick={handleSendComment}
          >
            <HiPaperAirplane size={18} />
            Send comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewCommentForm;
