import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainAppRouter from "./Routes/MainAppRouter";

// TODO: create error boundings (read error router tutorial / docs - error handling)
function App() {
  return (
    <BrowserRouter>
      <MainAppRouter />
    </BrowserRouter>
  );
}

export default App;
