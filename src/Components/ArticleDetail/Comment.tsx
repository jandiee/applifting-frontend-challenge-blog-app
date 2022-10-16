import React from "react";
import { HiChevronDown, HiChevronUp, HiUserCircle } from "react-icons/hi";
import agent from "../../Services/agent";
import SoftText from "../utils/SoftText";

type Props = {
  comment: TArticleComment;
  onCommentVote: (comment: TArticleComment) => void;
};

const Comment = ({ comment, onCommentVote }: Props) => {
  const handleVote = async (type: "up" | "down") => {
    let response;
    if (type === "up") {
      response = await agent.Comments.voteUp(comment.commentId);
    } else {
      response = await agent.Comments.voteDown(comment.commentId);
    }
    onCommentVote(response as TArticleComment);
  };

  return (
    <div className="flex gap-4">
      <div>
        <HiUserCircle size={48} />
      </div>

      <div className="space-y-2">
        <div className="flex gap-2 items-baseline">
          <span className="font-bold text-sm">{comment.author}</span>
          {/* <SoftText>2 hours ago</SoftText> */}
        </div>

        <div className="text-sm text-gray-900">{comment.content}</div>

        <SoftText size="sm">
          <div className="flex items-center divide-x-2 gap-x-2">
            <span>{comment.score}</span>
            <button
              onClick={() => handleVote("up")}
              className="flex items-center"
            >
              <span className="pl-2">
                <HiChevronUp />
              </span>
            </button>
            <button
              onClick={() => handleVote("down")}
              className="flex items-center"
            >
              <span className="pl-2">
                <HiChevronDown />
              </span>
            </button>
          </div>
        </SoftText>
      </div>
    </div>
  );
};

export default Comment;
