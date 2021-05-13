import React, { useState, useLayoutEffect, useRef } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
import { useSelector } from "react-redux";
// components
import VideoPlayerPin from "./VideoPlayerPin";
import TimelineSettings from "./TimelineSettings";

const Timeline = (props) => {
  const tracksContainerEl = useRef(null);
  const [animation, setAnimation] = useState(undefined);

  const { classes } = props;
  const state = useSelector((state) => state);
  const { selectedVideo } = state;

  useLayoutEffect(() => {
    if (!selectedVideo) return;

    const updatePinPosition = () => {
      const time = selectedVideo.currentTime;
      const progress = (100 / state.duration) * time;
      const pinEvent = new CustomEvent("movepin", { detail: progress });

      if (100 >= progress || selectedVideo.paused) {
        document.dispatchEvent(pinEvent);
        setAnimation(requestAnimationFrame(updatePinPosition));
      }
    };

    const onPlay = () => {
      setAnimation(requestAnimationFrame(updatePinPosition));
    };

    const onPause = () => {
      cancelAnimationFrame(animation);
    };

    selectedVideo.addEventListener("play", onPlay);
    selectedVideo.addEventListener("pause", onPause);

    return () => {
      selectedVideo.removeEventListener("play", onPlay);
      selectedVideo.removeEventListener("pause", onPause);
    };
  }, [selectedVideo, animation]);

  return (
    <section className={classes.timeline}>
      <TimelineSettings />
      <div className={"tracks-container"} ref={tracksContainerEl}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "30px",
            background: "#ffffff",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <VideoPlayerPin
            parent={tracksContainerEl.current || null}
            video={selectedVideo}
          />
        </div>
      </div>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
