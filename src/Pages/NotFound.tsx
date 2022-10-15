import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }, []);

  return (
    <main>
      <h1>NotFound</h1>
    </main>
  );
};

export default NotFound;
