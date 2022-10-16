import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorText from "../Components/utils/ErrorText";
import { useAppDispatch } from "../hooks";
import { ROUTES } from "../Routes/routes";
import { login } from "../Store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const passwordTextInputRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please provide both email and password!");
      return;
    }

    try {
      setError("");
      await dispatch(login({ email, password })).unwrap();
      setEmail("");
      setPassword("");
      navigate(ROUTES.recentArticles(), { replace: true });
    } catch (err) {
      setError((err as { message: string })?.message);
      setPassword("");
      if (passwordTextInputRef.current) {
        (passwordTextInputRef.current as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
      <main>
        <section className="card-body">
          <h2 className="card-title">Log In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="bestGuy"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                ref={passwordTextInputRef}
                type="password"
                required
                placeholder="theBestPasswordInTheWorld123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
              />
              {error && (
                <label className="label">
                  <ErrorText className="label-text-alt">{error}</ErrorText>
                </label>
              )}
            </div>
            <div className="flex justify-end">
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
