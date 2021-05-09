import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
//icons
import {
  Replay,
  PlayArrow,
  Pause,
  FastRewind,
  FastForward,
} from "@material-ui/icons";

const VideoPlayerMenu = (props) => {
  const [playing, setPlaying] = React.useState(false);
  const { classes, player } = props;

  const handlePlay = () => {
    player?.play();
    setPlaying(true);
  };

  const handlePause = () => {
    player?.pause();
    setPlaying(false);
  };

  const handleReplay = () => {
    if (!player) return;

    player.currentTime = 0;
    document.dispatchEvent(
      new CustomEvent("movepin", { detail: player.currentTime })
    );
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
