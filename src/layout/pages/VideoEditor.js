import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
// import { connect } from "react-redux";
// import { writeMemeCaption, saveMeme } from "../../state/actions/actions";
// components
import Video from "../components/Video";

const VideoEditor = (props) => {
  const { classes } = props;

  return (
    <section className={classes.canvasStyle}>
      <canvas id="videoCanvas" width="1042" height="586" />
      <Video />
    </section>
  );
};

export default injectSheet(styles)(VideoEditor);
