import { API_KEY, API_ROOT } from "../constants";
import { ROUTES } from "../Routes/routes";

let accessToken: string | null = null;

const processResponse = async (res: Response) => {
  const data = await res.json();

  if (!res.ok) {
    const errorMessage: string | undefined = data?.message;
    const errorStatus = res.status;

    if (errorStatus === 400) {
      return Promise.reject(errorMessage);
    } else if (errorStatus === 401 || errorStatus === 403) {
      // for the purpose of the simple project, we redirect both
      // the ApiKeyInvalid and the Unauthorized errors to 404 page...
      history.replaceState(null, "", ROUTES.notFound());
      return Promise.resolve();
    }

    return Promise.reject();
  }

  return data;
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
    }).then(processResponse),
  // TODO: add searchParams funcionality
  get: (url: string) =>
    fetch(`${API_ROOT}${url}`, {
      method: "GET",
      headers: { ...getCommonHeaders(), ...getAuthorizationHeader() },
    }).then(processResponse),
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
    }).then(processResponse),
  // .then(getResponseBody),
  // fileUpload: (url: string, file: any) => {
  //   // file size <= 99 MB
  //   if (file.size > 99000000) {
  //     throw new Error("File size exceeded");
  //   }

  //   return superagent.post(`${API_ROOT}${url}`).attach("file", file);
  // },
};
