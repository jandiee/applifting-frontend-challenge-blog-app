import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import articleImage from "../Assets/articleImage1.jpeg";
import CommentList from "../Components/ArticleDetail/CommentList";
import RelatedArticles from "../Components/ArticleDetail/RelatedArticles";
import Header from "../Components/Header";
import SoftText from "../Components/utils/SoftText";
import agent from "../Services/agent";

const ArticleDetail = () => {
  const { id: articleId } = useParams();
  const [articleDetail, setArticleDetail] = useState<Partial<TArticleDetail>>({
    comments: [],
  });

  useEffect(() => {
    (async () => {
      if (articleId) {
        const response = await agent.Articles.detail(articleId);
        setArticleDetail(response);
      }
    })();
    // setArticleDetail(mockedArticle);
    // fetch(articleContent)
    //   .then((response) => response.text())
    //   .then((text) => {
    //     setArticleDetail((old) => ({ ...old, content: text }));
    //   });
  }, [articleId]);

  if (Object.keys(articleDetail).length === 0) {
    // TODO: loader
    return <div></div>;
  }

  return (
    <div className="flex w-full gap-x-8">
      <div className="w-3/4 h-full space-y-4">
        <Header bold>{articleDetail.title}</Header>
        <SoftText>
          <div className="flex gap-2">
            {/* <span>{articleDetail.author}</span>
            <span>&#x2022;</span> */}
            <span>{dayjs().format("l")}</span>
          </div>
        </SoftText>
        <main className="space-y-4">
          <div className="flex justify-center">
            <img
              src={articleImage}
              height="400"
              style={{ height: 400 }}
              className="object-cover"
            />
          </div>
          {articleDetail.content && (
            <article>
              <ReactMarkdown>{articleDetail.content}</ReactMarkdown>
            </article>
          )}
        </main>
        <div className="border-b-2 border-gray-200"></div>
        {articleDetail.comments && (
          <CommentList comments={articleDetail.comments} />
        )}
      </div>

      <aside className="w-1/4 pl-8 border-l-2 border-gray-200 h-min">
        <RelatedArticles />
      </aside>
    </div>
  );
};

export default ArticleDetail;
