import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import Header from "../Components/Header";
import agent from "../Services/agent";
import { ROUTES } from "../Routes/routes";
import ErrorText from "../Components/utils/ErrorText";

const ArticleEdit = () => {
  const params = useParams();
  const articleId = params.id;
  const navigate = useNavigate();

  const [articleDetail, setArticleDetail] = useState<Partial<TArticleDetail>>(
    {}
  );
  const [action, setAction] = useState<"EDIT" | "NEW">("NEW");
  const [error, setError] = useState("");

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
    if (
      !articleDetail.title ||
      !articleDetail.perex ||
      !articleDetail.content
    ) {
      setError("Please provide all fields values!");
      return;
    }

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
    <div className="space-y-4">
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

      <main className="space-y-4">
        {/* this expression avoids the need to use another state variable 'isLoading' */}
        {/* except we cannot use this for loader when saving the article... */}
        {articleId && Object.keys(articleDetail).length === 0 ? (
          <div></div>
        ) : (
          <>
            {error && <ErrorText size="sm">{error}</ErrorText>}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Article title</span>
              </label>
              <input
                type="text"
                placeholder="My First Article"
                required
                value={articleDetail.title || ""}
                onChange={(e) =>
                  setArticleDetail((old) => ({
                    ...old,
                    title: e.target.value,
                  }))
                }
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Perex</span>
              </label>
              <textarea
                placeholder="Once upon a time..."
                value={articleDetail.perex || ""}
                required
                onChange={(e) =>
                  setArticleDetail((old) => ({
                    ...old,
                    perex: e.target.value,
                  }))
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
