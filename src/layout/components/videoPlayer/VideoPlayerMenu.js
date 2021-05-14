import React from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
import { useDispatch, useSelector } from "react-redux";
// icons
import {
  Replay,
  PlayArrow,
  Pause,
  FastRewind,
  FastForward,
} from "@material-ui/icons";

const VideoPlayerMenu = (props) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const { playing } = state;
  const { classes } = props;

  const handlePlay = () => {
    dispatch({ type: "CHANGE_PLAYING", payload: true });
  };

  const handlePause = () => {
    dispatch({ type: "CHANGE_PLAYING", payload: false });
  };

  const handleReplay = () => {
    dispatch({ type: "CHANGE_CURRENT_TIME", payload: 0 });
    document.dispatchEvent(new CustomEvent("movepin", { detail: 0 }));
  };

  return (
    <div className={classes.videoPlayerMenu}>
      <div className={"button-set"}>
        <Replay onClick={handleReplay} style={{ fontSize: 30 }} />
      </div>
      <div className={"button-set"}>
        <FastRewind style={{ fontSize: 30 }} />
        {!playing ? (
          <PlayArrow onClick={handlePlay} style={{ fontSize: 50 }} />
        ) : (
          <Pause onClick={handlePause} style={{ fontSize: 50 }} />
        )}
        <FastForward style={{ fontSize: 30 }} />
      </div>
      <div className={"button-set"}></div>
    </div>
  );
};

export default injectSheet(styles)(VideoPlayerMenu);
