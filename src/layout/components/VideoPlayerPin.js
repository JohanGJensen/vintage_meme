import React, { useState, useEffect } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../style/style";

const VideoPlayerPin = (props) => {
  const [dragging, setDragging] = useState(false);

  const [playerpin, setPlayerpin] = useState(null);
  const [xPos, setXPos] = useState(0);

  const { classes, parent = null, video = null } = props;

  const onMouseDown = () => setDragging(true);
  const onMouseUp = () => setDragging(false);

  useEffect(() => {
    const onMovePin = (e) => setXPos(e.detail); // e.detail = progress

    const onMouseMove = (e) => {
      let offsetLeft = (window.innerWidth - parent.clientWidth) / 2;
      let x = e.clientX - offsetLeft;

      if (dragging && parent.clientWidth > x && x > 0) {
        let percent = (100 / parent.clientWidth) * x;
        setXPos(percent);

        if (video) {
          video.currentTime = (video.duration * percent) / 100;
        }
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
  }, [playerpin, parent, dragging, video]);

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
