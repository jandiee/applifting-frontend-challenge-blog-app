import React from "react";
import Header from "../Components/Header";

const ArticleEdit = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-start gap-4">
        <Header>Create new article</Header>
        <div className="btn btn-primary btn-sm">Publish article</div>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Article Title</span>
        </label>
        <input
          type="text"
          placeholder="My First Article"
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Featured Image</span>
        </label>
        <input type="file" className="w-full max-w-xs btn-sm" />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Content</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Doesn't support Markdown, yeah!"
        ></textarea>
      </div>
    </div>
  );
};

export default ArticleEdit;
