import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
// import { connect } from "react-redux";
// import { writeMemeCaption, saveMeme } from "../../state/actions/actions";
// components
import Video from "../components/Video";
import SideMenu from "../components/SideMenu";
import Timeline from "../components/Timeline";

const VideoEditor = (props) => {
  const { classes } = props;

  return (
    <section className={classes.editor}>
      <SideMenu />
      <Video />
      <Timeline />
    </section>
  );
};

export default injectSheet(styles)(VideoEditor);
