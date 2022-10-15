import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import Header from "../Components/Header";
import agent from "../Services/agent";
import { ROUTES } from "../Routes/routes";

const ArticleEdit = () => {
  const params = useParams();
  const articleId = params.id;
  const navigate = useNavigate();

  const [articleDetail, setArticleDetail] = useState<Partial<TArticleDetail>>(
    {}
  );
  const [action, setAction] = useState<"EDIT" | "NEW">("NEW");

  useEffect(() => {
    // Fetch only on article edit, not on article new
    (async () => {
      if (articleId) {
        setAction("EDIT");
        const response = await agent.Articles.detail(articleId);
        setArticleDetail(response);
      }
    })();
  }, []);

  const handlePublish = async () => {
    if (action === "EDIT") {
      // edit article
      await agent.Articles.update(articleId as string, articleDetail);
    } else {
      // new article
      await agent.Articles.create(articleDetail);
    }
    navigate(ROUTES.myArticles());
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-start gap-4">
        <Header>
          {action === "NEW" ? "Create new article" : "Edit article"}
        </Header>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handlePublish()}
        >
          {action === "NEW" ? "Publish article" : "Publish changes"}
        </button>
      </div>

      <main>
        {/* this expression avoids the need to use another state variable 'isLoading' */}
        {/* except we cannot use this for loader when saving the article... */}
        {articleId && Object.keys(articleDetail).length === 0 ? (
          <div></div>
        ) : (
          <>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Article title</span>
              </label>
              <input
                type="text"
                placeholder="My First Article"
                value={articleDetail.title || ""}
                onChange={(e) =>
                  setArticleDetail((old) => ({ ...old, title: e.target.value }))
                }
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Featured Image</span>
              </label>
              <input type="file" className="w-full max-w-xs btn-xs p-0" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Perex</span>
              </label>
              <textarea
                placeholder="Once upon a time..."
                value={articleDetail.perex || ""}
                onChange={(e) =>
                  setArticleDetail((old) => ({ ...old, perex: e.target.value }))
                }
                className="input input-bordered w-full h-32"
              ></textarea>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <MDEditor
                value={articleDetail.content || ""}
                placeholder="Supports Markdown, yeah!"
                onChange={(val) =>
                  setArticleDetail((old) => ({
                    ...old,
                    content: val,
                  }))
                }
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ArticleEdit;
