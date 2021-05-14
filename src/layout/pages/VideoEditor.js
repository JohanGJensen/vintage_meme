import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// components
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import SideMenu from "../components/SideMenu";
import Timeline from "../components/timeline/Timeline";

const tracks = [
  {
    name: "man_with_beer",
    extension: "webm",
    type: "video/webm",
    source:
      "https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm",
  },
];

const VideoEditor = (props) => {
  const { classes } = props;

  return (
    <section className={classes.editor}>
      <SideMenu />
      <VideoPlayer tracks={tracks} />
      <Timeline tracks={tracks} />
    </section>
  );
};

export default injectSheet(styles)(VideoEditor);
