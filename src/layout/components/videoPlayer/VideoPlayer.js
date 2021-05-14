import React from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// components
import VideoPlayerMenu from "./VideoPlayerMenu";
import Media from "../Media";

const VideoPlayer = (props) => {
  const { classes, tracks } = props;

  return (
    <section className={classes.video}>
      {tracks &&
        tracks.map((track) => {
          return <Media key={track.id} trackConfig={track} />;
        })}
      <VideoPlayerMenu />
    </section>
  );
};

export default injectSheet(styles)(VideoPlayer);
