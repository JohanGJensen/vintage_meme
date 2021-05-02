import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
//icons
import { Replay, PlayArrow, FastRewind, FastForward } from "@material-ui/icons";

const VideoPlayerMenu = (props) => {
  const { classes } = props;

  return (
    <div className={classes.videoPlayerMenu}>
      <div className={"button-set"}>
        <Replay style={{ fontSize: 30 }} />
      </div>
      <div className={"button-set"}>
        <FastRewind style={{ fontSize: 30 }} />
        <PlayArrow style={{ fontSize: 50 }} />
        <FastForward style={{ fontSize: 30 }} />
      </div>
      <div className={"button-set"}></div>
    </div>
  );
};

export default injectSheet(styles)(VideoPlayerMenu);
