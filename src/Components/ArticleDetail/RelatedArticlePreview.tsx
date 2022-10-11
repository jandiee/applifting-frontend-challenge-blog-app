import React from "react";
import TextTruncate from "react-text-truncate";
import Header from "../Header";

const RelatedArticlePreview = () => {
  return (
    <div className="space-y-1">
      <Header size="base">Related article header</Header>
      <TextTruncate
        line={3}
        containerClassName="text-sm text-gray-500"
        textElement="span"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              sodales nulla non sapien porttitor, ac pharetra nisi auctor.
              Phasellus quis pharetra libero. Proin sagittis tellus dui, sit
              amet bibendum nibh elementum at. Ut eleifend magna sed dictum
              pulvinar. Nullam mollis ipsum nisi, ac pharetra est fringilla at.
              In semper pharetra arcu, eget ultricies erat maximus auctor. Ut
              cursus et dui ac euismod. Aenean condimentum leo et odio sagittis
              ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc sodales nulla non sapien porttitor, ac pharetra nisi
              auctor. Phasellus quis pharetra libero. Proin sagittis tellus dui,
              sit amet bibendum nibh elementum at. Ut eleifend magna sed dictum
              pulvinar. Nullam mollis ipsum nisi, ac pharetra est fringilla at.
              In semper pharetra arcu, eget ultricies erat maximus auctor. Ut
              cursus et dui ac euismod. Aenean condimentum leo et odio sagittis
              ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nunc sodales nulla non sapien porttitor, ac pharetra nisi
              auctor. Phasellus quis pharetra libero. Proin sagittis tellus dui,
              sit amet bibendum nibh elementum at. Ut eleifend magna sed dictum
              pulvinar. Nullam mollis ipsum nisi, ac pharetra est fringilla at.
              In semper pharetra arcu, eget ultricies erat maximus auctor. Ut
              cursus et dui ac euismod. Aenean condimentum leo et odio sagittis
              ultricies."
      />
    </div>
  );
};

export default RelatedArticlePreview;
