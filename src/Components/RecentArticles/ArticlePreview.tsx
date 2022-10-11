import React from "react";
import TextTruncate from "react-text-truncate";
import Header from "../Header";
import SoftText from "../utils/SoftText";

const ArticlePreview = () => {
  return (
    <div className="flex flex-nowrap gap-8 max-h-48">
      <img
        src="https://picsum.photos/200"
        width="200"
        height="200"
        style={{ width: 200, height: 200 }}
      />
      <div className="space-y-2">
        <Header size="xl">Why do cats have whiskers?</Header>
        <SoftText>
          <div className="flexgap-2">
            <span>Elizabeth Strain</span>
            <span>&#x2022;</span>
            <span>02/13/17</span>
          </div>
        </SoftText>
        <TextTruncate
          line={4}
          containerClassName="text-sm text-gray-900"
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
        <div className="flex text-gray-500 text-sm gap-4">
          <span className="link link-secondary">Read whole article</span>
          <span>4 comments</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
