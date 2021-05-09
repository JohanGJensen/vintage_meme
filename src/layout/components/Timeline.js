import React, { useState, useLayoutEffect, useEffect } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
import { useSelector } from "react-redux";

const Timeline = (props) => {
  const [animation, setAnimation] = useState(undefined);
  const [playerpin, setPlayerpin] = useState(null);
  const [xPos, setXPos] = useState(0);

  const { classes, video = null } = props;
  const duration = useSelector((state) => state.duration);

  useLayoutEffect(() => {
    if (!video || !playerpin) return;

    const updatePinPosition = () => {
      const time = video.currentTime;
      const progress = (100 / duration) * time;
      const pinEvent = new CustomEvent("movepin", { detail: progress });

      if (100 >= progress || video.paused) {
        // setXPos(progress);
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

  useEffect(() => {
    const onMovePin = (e) => {
      let progress = e.detail;

      setXPos(progress);
    };

    document.addEventListener("movepin", onMovePin);
    return () => document.removeEventListener("movepin", onMovePin);
  }, [playerpin]);

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
          <div
            id={"playerpin"}
            ref={setPlayerpin}
            className={classes.playerpin}
            style={{ left: xPos + "%" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
