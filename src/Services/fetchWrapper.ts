import { API_KEY, API_ROOT } from "../constants";

let accessToken: string | null = null;

const handleErrors = async (res: Response) => {
  if (res.ok) {
    if (res.status === 200) {
      return res.json();
    }
    return {};
  } else if (res.status === 400) {
    // TODO: handle all failed requests!!!
    const jsonResponse = await res.json();
    throw new Error(jsonResponse.message);
  } else if (res.status === 401) {
    // TODO: handle ApiKeyInvalidError!!!
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
    }).then(handleErrors),
  // options: (url: string) =>
  //   superagent
  //     .options(`${API_ROOT}${url}`)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  // TODO: add searchParams funcionality
  get: (url: string) =>
    fetch(`${API_ROOT}${url}`, {
      method: "GET",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
    }).then(handleErrors),
  // put: (url: string, body: object) =>
  //   superagent
  //     .put(`${API_ROOT}${url}`)
  //     .type("form")
  //     .send(body)
  //     .use(setCommonHeaders)
  //     .use(setAuthorizationHeader),
  // .catch(handleErrors)
  // .then(getResponseBody),
  patch: (url: string, body: object) =>
    fetch(`${API_ROOT}${url}`, {
      method: "PATCH",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
      body: JSON.stringify(body),
    }),
  post: (url: string, body?: object) =>
    fetch(`${API_ROOT}${url}`, {
      method: "POST",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
      body: JSON.stringify(body),
    }).then(handleErrors),
  // .then(getResponseBody),
  // fileUpload: (url: string, file: any) => {
  //   // file size <= 99 MB
  //   if (file.size > 99000000) {
  //     throw new Error("File size exceeded");
  //   }

  //   return superagent.post(`${API_ROOT}${url}`).attach("file", file);
  // },
};
