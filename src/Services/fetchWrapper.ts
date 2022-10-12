import { API_KEY, API_ROOT } from "../constants";

let accessToken: string | null = null;

const handleErrors = async (res: Response) => {
  if (res.ok) {
    return res.json();
  } else if (res.status === 400) {
    // TODO: handle all failed requests!!!
    const jsonResponse = await res.json();
    throw new Error(jsonResponse.message);
  }
};

const getAuthorizationHeader = (): HeadersInit => {
  if (accessToken === null) {
    return {};
  }

  return { Authorization: accessToken };
};

export const setAccessToken = (token: string) => {
  accessToken = token;
};

const getCommonHeaders = (): HeadersInit => {
  return {
    "Content-Type": "application/json",
    "X-API-KEY": `${API_KEY}`,
  };
};

export const requests = {
  del: (url: string) =>
    fetch(`${API_ROOT}${url}`, {
      method: "DELETE",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
    }),
  // del2: (url: string) =>
  //   superagent
  //     .del(`${API_ROOT}${url}`)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  //     // .catch(handleErrors)
  //     // .then(getResponseBody),
  // options: (url: string) =>
  //   superagent
  //     .options(`${API_ROOT}${url}`)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  // get: (url: string, query: SuperagentQuery = "") =>
  //   superagent
  //     .get(`${API_ROOT}${url}`)
  //     .query(query)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  // put: (url: string, body: object) =>
  //   superagent
  //     .put(`${API_ROOT}${url}`)
  //     .type("form")
  //     .send(body)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  patch: (url: string, body: BodyInit) =>
    fetch(`${API_ROOT}${url}`, {
      method: "PATCH",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
      body,
    }),
  // patch2: (url: string, body: object) =>
  //   superagent
  //     .patch(`${API_ROOT}${url}`)
  //     .type("form")
  //     .send(body)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  post: (url: string, body?: object) =>
    fetch(`${API_ROOT}${url}`, {
      method: "POST",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
      body: JSON.stringify(body),
    }).then(handleErrors),
  // .then(getResponseBody),
  // post2: (url: string, body?: object) =>
  //   superagent
  //     .post(`${API_ROOT}${url}`)
  //     .type("form")
  //     .send(body)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  // fileUpload: (url: string, file: any) => {
  //   // file size <= 99 MB
  //   if (file.size > 99000000) {
  //     throw new Error("File size exceeded");
  //   }

  //   return superagent.post(`${API_ROOT}${url}`).attach("file", file);
  // },
};
