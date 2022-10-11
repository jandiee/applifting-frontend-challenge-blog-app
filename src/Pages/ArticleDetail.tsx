import React from "react";
import CommentList from "../Components/ArticleDetail/CommentList";
import RelatedArticles from "../Components/ArticleDetail/RelatedArticles";
import Header from "../Components/Header";
import SoftText from "../Components/utils/SoftText";

const ArticleDetail = () => {
  return (
    <div className="flex w-full gap-x-8">
      <div className="w-3/4 h-full space-y-4">
        <Header bold>Why Do Cats Have Whiskers?</Header>
        <SoftText>
          <div className="flex gap-2">
            <span>Elizabeth Strain</span>
            <span>&#x2022;</span>
            <span>02/13/17</span>
          </div>
        </SoftText>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/1000/600"
            height="400"
            style={{ height: 400 }}
            className="object-cover"
          />
        </div>
        {/* TODO: markdown formatting */}
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales
          nulla non sapien porttitor, ac pharetra nisi auctor. Phasellus quis
          pharetra libero. Proin sagittis tellus dui, sit amet bibendum nibh
          elementum at. Ut eleifend magna sed dictum pulvinar. Nullam mollis
          ipsum nisi, ac pharetra est fringilla at. In semper pharetra arcu,
          eget ultricies erat maximus auctor. Ut cursus et dui ac euismod.
          Aenean condimentum leo et odio sagittis ultricies. Ut vel elementum
          risus, at venenatis ipsum. Sed et facilisis felis, id pharetra lorem.
          Mauris interdum nisl ut neque dictum commodo. Nullam ut erat a orci
          mattis aliquet. Praesent eu gravida lectus. Quisque lorem nisi,
          sagittis ut lorem et, suscipit convallis dui. Aenean scelerisque
          pellentesque libero, ut tempus massa dignissim in. Nam pretium gravida
          nisl ac feugiat. Nulla efficitur at elit at mollis. Sed nec maximus
          nibh, id semper lorem. Aliquam volutpat elementum ligula at euismod.
          Suspendisse eget tincidunt metus, vitae laoreet arcu. Sed ac turpis et
          nibh dictum suscipit. Phasellus id tempus lorem. Quisque et gravida
          lorem. Pellentesque vel mattis arcu. Nunc tempor viverra ipsum in
          consequat. Duis laoreet justo vitae sem gravida euismod. Vivamus eget
          nulla ligula. Sed pellentesque dapibus tortor, a venenatis augue
          pretium vitae. Aenean vulputate hendrerit nunc, at posuere arcu
          ullamcorper et. Vestibulum at purus erat. Donec facilisis scelerisque
          ligula, et interdum augue. Cras mauris est, lacinia vitae auctor ac,
          lacinia quis sem. Pellentesque imperdiet sed diam et fermentum. Mauris
          finibus orci sem, id placerat magna dictum in. Maecenas in condimentum
          lacus.
        </div>
        <div className="border-b-2 border-gray-200"></div>
        <CommentList />
      </div>

      {/* pl-* needed because of Tailwind's weird grid divide spacing */}
      <aside className="w-1/4 pl-8 border-l-2 border-gray-200 h-min">
        <RelatedArticles />
      </aside>
    </div>
  );
};

export default ArticleDetail;
