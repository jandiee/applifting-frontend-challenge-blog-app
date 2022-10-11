import React from "react";
import RelatedArticlePreview from "./RelatedArticlePreview";
import Header from "../Header";

const RelatedArticles = () => {
  return (
    <div className="space-y-4">
      <Header size="xl">Related articles</Header>
      <RelatedArticlePreview />
      <RelatedArticlePreview />
      <RelatedArticlePreview />
      <RelatedArticlePreview />
    </div>
  );
};

export default RelatedArticles;
