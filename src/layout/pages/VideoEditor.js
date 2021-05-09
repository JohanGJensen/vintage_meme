import React, { useState } from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// components
import Video from "../components/Video";
import SideMenu from "../components/SideMenu";
import Timeline from "../components/Timeline";

const VideoEditor = (props) => {
  const [video, setVideo] = useState(null);
  const { classes } = props;

  return (
    <section className={classes.editor}>
      <SideMenu />
      <Video setVideo={setVideo} />
      <Timeline video={video} />
    </section>
  );
};

export default injectSheet(styles)(VideoEditor);
