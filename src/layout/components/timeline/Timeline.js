import React, { useRef } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
import { useSelector } from "react-redux";
// components
import VideoPlayerPin from "./VideoPlayerPin";
import TimelineSettings from "./TimelineSettings";
import Track from "./Track";
// hooks
import { useAnimationFrame } from "../../hooks/useAnimationFrame";

const Timeline = (props) => {
  const { classes, tracks } = props;
  const tracksContainerEl = useRef(null);
  const state = useSelector((state) => state);

  useAnimationFrame();

  return (
    <section className={classes.timeline}>
      <TimelineSettings />
      <div className={"tracks-container"} ref={tracksContainerEl}>
        <div className={"tracks-container-header"} />
        <VideoPlayerPin parent={tracksContainerEl.current || null} />

        {state &&
          tracks.map((track, index) => {
            return (
              <Track
                key={index}
                state={state}
                name={track.name}
                duration={track.duration}
              />
            );
          })}
      </div>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
