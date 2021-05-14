import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
import { useSelector, useDispatch } from "react-redux";
// components
import VideoPlayerPin from "./VideoPlayerPin";
import TimelineSettings from "./TimelineSettings";
import Track from "./Track";

const Timeline = (props) => {
  const dispatch = useDispatch();

  const tracksContainerEl = useRef(null);
  const [animation, setAnimation] = useState(undefined);
  const [duration, setDuration] = useState(0);

  const { classes, tracks } = props;
  const state = useSelector((state) => state);
  const { playing, currentTime } = state;

  useEffect(() => {
    setDuration(state.duration * 1000);
  }, [state.duration]);

  useLayoutEffect(() => {
    !playing && cancelAnimationFrame(animation);
  }, [playing, animation]);

  useEffect(() => {
    const updatePinPosition = (start, ts) => {
      const now = new Date().getTime();
      const runtime = now - start + ts;
      const progress = runtime / duration;

      const pinEvent = new CustomEvent("movepin", { detail: 100 * progress });

      dispatch({ type: "CHANGE_CURRENT_TIME", payload: runtime });

      if (runtime < duration) {
        document.dispatchEvent(pinEvent);
        setAnimation(requestAnimationFrame(() => updatePinPosition(start, ts)));
      } else {
        dispatch({ type: "CHANGE_PLAYING", payload: false });
      }
    };

    if (playing) {
      setAnimation(
        requestAnimationFrame(() => {
          updatePinPosition(new Date().getTime(), currentTime);
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, duration]);

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
