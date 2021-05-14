import React, { useState, useEffect } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
import { useDispatch, useSelector } from "react-redux";

const VideoPlayerPin = (props) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const [dragging, setDragging] = useState(false);
  const [playerpin, setPlayerpin] = useState(null);
  const [duration, setDuration] = useState(0);
  const [xPos, setXPos] = useState(0);

  const { classes, parent = null } = props;

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);

  useEffect(() => {
    setDuration(state.duration * 1000);
  }, [state.duration]);

  useEffect(() => {
    const onMovePin = (e) => setXPos(e.detail); // e.detail = progress
    const onMouseMove = (e) => {
      let offsetLeft = (window.innerWidth - parent.clientWidth) / 2;
      let x = e.clientX - offsetLeft;

      if (dragging && parent.clientWidth > x && x > 0) {
        let percent = (100 / parent.clientWidth) * x;
        setXPos(percent);

        dispatch({
          type: "CHANGE_CURRENT_TIME",
          payload: (duration / parent.clientWidth) * x,
        });
      }
    };

    const onMouseLeave = () => setDragging(false);

    document.addEventListener("movepin", onMovePin);

    parent?.addEventListener("mousemove", onMouseMove);
    parent?.addEventListener("mouseup", onMouseUp);
    parent?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("movepin", onMovePin);

      parent?.removeEventListener("mousemove", onMouseMove);
      parent?.removeEventListener("mouseup", onMouseUp);
      parent?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [playerpin, parent, dragging, dispatch, duration]);

  return (
    <div
      id={"playerpin"}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      ref={setPlayerpin}
      className={classes.playerpin}
      style={{ left: xPos + "%" }}
    ></div>
  );
};

export default injectSheet(styles)(VideoPlayerPin);
