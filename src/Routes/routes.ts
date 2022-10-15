export const ROUTES = {
  recentArticles: () => "/",
  login: () => "/auth",
  articles: () => "/articles",
  articleDetail: (id?: string) => `/articles/${id || ":id"}`,
  myArticles: () => "/my-articles",
  newArticle: () => "/my-articles/new",
  editArticle: (id?: string) => `/my-articles/${id || ":id"}`,
  about: () => "/about",
  notFound: () => "/not-found",
};
