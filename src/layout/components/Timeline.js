import React, { useState, useLayoutEffect } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
import { useSelector } from "react-redux";
// components
import VideoPlayerPin from "./VideoPlayerPin";

const Timeline = (props) => {
  const [animation, setAnimation] = useState(undefined);

  const { classes, video = null } = props;
  const duration = useSelector((state) => state.duration);

  useLayoutEffect(() => {
    if (!video) return;

    const updatePinPosition = () => {
      const time = video.currentTime;
      const progress = (100 / duration) * time;
      const pinEvent = new CustomEvent("movepin", { detail: progress });

      if (100 >= progress || video.paused) {
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

    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [video, animation, duration]);

  return (
    <section className={classes.timeline}>
      <div style={{ width: "100%", height: "30px" }}>
        <code>
          duration: <span style={{ color: "#FF0000" }}>{duration}</span>sec
        </code>
      </div>
      <div
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
          <VideoPlayerPin />
        </div>
      </div>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
