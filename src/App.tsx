import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainAppRouter from "./Routes/MainAppRouter";
import store from "./Store";

// TODO: create error boundings (read error router tutorial / docs - error handling)
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MainAppRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
