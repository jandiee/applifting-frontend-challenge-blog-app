import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainAppRouter from "./Routes/MainAppRouter";
import store from "./Store";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

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
