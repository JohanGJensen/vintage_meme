import React from "react";
// import injectSheet from "react-jss";
// import { styles } from "../style/style";
import { Route, Switch, Redirect } from "react-router-dom";
// redux
// import { connect } from "react-redux";
// import { saveMeme } from "../state/actions/actions";

import VideoEditor from "./pages/VideoEditor";

const PrimaryRoute = (props) => {
  // const { classes } = props;

  return (
    <Switch>
      <Route path="/main" component={VideoEditor} />
      <Redirect to="/main" />
    </Switch>
  );
};

export default PrimaryRoute;
