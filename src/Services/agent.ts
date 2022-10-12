import { requests } from "./fetchWrapper";

const Authentication = {
  login: (email: string, password: string) =>
    requests.post("login", { username: email, password }),
};

export default { Authentication };
