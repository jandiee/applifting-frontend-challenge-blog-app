import { requests } from "./fetchWrapper";

const Authentication = {
  login: (email: string, password: string) =>
    requests.post("login", { username: email, password }),
};

const Articles = {
  all: () => requests.get("articles"), // TODO: pagination
  create: (articleDetail: object) => requests.post("articles", articleDetail),
  detail: (articleId: string) => requests.get(`articles/${articleId}`),
  delete: (articleId: string) => requests.del(`articles/${articleId}`),
  update: (articleId: string, articleDetail: object) =>
    requests.patch(`articles/${articleId}`, articleDetail),
};

export default { Authentication, Articles };
