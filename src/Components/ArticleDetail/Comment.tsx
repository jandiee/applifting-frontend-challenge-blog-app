import React from "react";
import { HiChevronDown, HiChevronUp, HiUserCircle } from "react-icons/hi";
import SoftText from "../utils/SoftText";

type Props = {
  comment: {
    articleId: string;
    commentId: string;
    author: string;
    content: string;
    score: number;
  };
};

const Comment = ({ comment }: Props) => {
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
            <span className="pl-2">
              <HiChevronUp />
            </span>
            <span className="pl-2">
              <HiChevronDown />
            </span>
          </div>
        </SoftText>
      </div>
    </div>
  );
};

export default Comment;
