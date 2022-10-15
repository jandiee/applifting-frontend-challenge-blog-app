type TArticleDetail = {
  articleId: string;
  author: string;
  title: string;
  perex: string;
  imageId: string;
  image: string;
  content?: string;
  comments: {
    articleId: string;
    commentId: string;
    author: string;
    content: string;
    score: number;
  }[];
};

type TArticle = {
  articleId: string;
  createdAt: string;
  imageId?: string;
  lastUpdatedAt: string;
  perex?: string;
  title?: string;
};
