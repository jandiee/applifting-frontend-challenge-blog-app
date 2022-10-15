import React from "react";
import { HiUserCircle } from "react-icons/hi";
import Header from "../Header";
import Comment from "./Comment";

type Props = {
  comments: {
    articleId: string;
    commentId: string;
    author: string;
    content: string;
    score: number;
  }[];
};

const CommentList = ({ comments }: Props) => {
  if (comments.length === 0) {
    return <div className="w-0 h-0 hidden"></div>;
  }

  return (
    <div className="space-y-4">
      <Header bold size="base">
        Comments ({comments.length})
      </Header>

      <div className="flex gap-4 items-center">
        <div>
          <HiUserCircle size={48} />
        </div>

        <input
          type="text"
          placeholder="Join the discussion"
          className="input input-bordered input-primary w-full max-w-xs input-md"
        />
      </div>

      {comments.map((item) => (
        <Comment key={item.commentId} comment={item} />
      ))}

      {/* <Comment />
      <Comment />
      <Comment /> */}
    </div>
  );
};

export default CommentList;
