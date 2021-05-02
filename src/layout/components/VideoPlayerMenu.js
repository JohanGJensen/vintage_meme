import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";

const VideoPlayerMenu = (props) => {
  const { classes } = props;

  return (
    <div className={classes.videoPlayerMenu}>
      <code>video player menu</code>
    </div>
  );
};

export default injectSheet(styles)(VideoPlayerMenu);
