import dayjs from "dayjs";
import React from "react";
import Header from "../Header";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

type Props = {
  articleId: string;
  comments: TArticleComment[];
  onCommentUpdate: (comments: TArticleComment[]) => void;
};

const CommentList = ({ articleId, comments, onCommentUpdate }: Props) => {
  const onCommentCreate = (newComment: TArticleComment) => {
    const newComments = [newComment, ...comments];
    onCommentUpdate(newComments);
  };

  const onCommentVote = (updatedComment: TArticleComment) => {
    onCommentUpdate(
      comments.map((item) =>
        item.commentId === updatedComment.commentId ? updatedComment : item
      )
    );
  };

  return (
    <div className="space-y-4">
      <Header bold size="base">
        Comments ({comments.length})
      </Header>

      <NewCommentForm
        articleId={articleId}
        onCommentCreate={(comment) => onCommentCreate(comment)}
      />

      {/* sort comments by createdAt descending, then render */}
      {comments
        .sort(
          (a: TArticleComment, b: TArticleComment) =>
            dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix()
        )
        .map((item) => (
          <Comment
            key={item.commentId}
            comment={item}
            onCommentVote={(comment) => onCommentVote(comment)}
          />
        ))}
    </div>
  );
};

export default CommentList;
