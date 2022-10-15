import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { ROUTES } from "../Routes/routes";
import { login } from "../Store/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authError = useAppSelector((state) => state.auth.error);
  const prevAuthError = useRef<boolean | null>(authError);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (err) {
      console.error("Something went wrong!", err);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  // handle redirect to homepage after successful login
  useEffect(() => {
    if (prevAuthError.current === null && authError === false) {
      navigate(ROUTES.recentArticles(), { replace: true });
    }
    prevAuthError.current = authError;
  }, [authError]);

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
                type="password"
                placeholder="theBestPasswordInTheWorld123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
              />
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
