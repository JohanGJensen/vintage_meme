import React from "react";
import ReactDOM from "react-dom";
import "./style/style";
import App from "./layout/App";
// import * as serviceWorker from "./serviceWorker";
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
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
