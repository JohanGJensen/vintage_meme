import React, { useState, useLayoutEffect, useRef } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
import { useSelector } from "react-redux";
// components
import VideoPlayerPin from "./VideoPlayerPin";

const Timeline = (props) => {
  const timelineEl = useRef(null);
  const [animation, setAnimation] = useState(undefined);

  const { classes } = props;
  const state = useSelector((state) => state);
  const { selectedVideo, duration } = state;

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
      <div style={{ width: "100%", height: "30px" }}>
        <code>
          duration: <span style={{ color: "#FF0000" }}>{duration}</span>
          sec
        </code>
      </div>
      <div
        ref={timelineEl}
        style={{
          width: "98%",
          height: "300px",
          background: "#474646",
          margin: "0 auto",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "30px",
            background: "#ffffff",
            borderRadius: "15px 15px 0 0",
          }}
        >
          {timelineEl && (
            <VideoPlayerPin parent={timelineEl.current} video={selectedVideo} />
          )}
        </div>
      </div>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
