import React from "react";
import { HiUserCircle } from "react-icons/hi";
import Header from "../Header";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div className="space-y-4">
      <Header bold size="base">
        Comments (4)
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

      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentList;
