import React from "react";
import injectSheet from "react-jss";
import { styles } from "../style/style";
import { Route, Switch, Redirect } from "react-router-dom";
// redux
// import { connect } from "react-redux";
// import { saveMeme } from "../state/actions/actions";

import Home from "./components/Home";

const App = (props) => {
  const { classes } = props;

  return (
    <div className="main-container">
      <section className={classes.App}>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </section>
    </div>
  );
};

export default injectSheet(styles)(App);
