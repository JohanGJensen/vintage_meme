import React from "react";
import ReactDOM from "react-dom";
import PrimaryRoute from "./layout/PrimaryRoute";

import { ThemeProvider } from "react-jss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./state/store";
import { theme } from "./style/theme";

import "./style/index.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PrimaryRoute />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
