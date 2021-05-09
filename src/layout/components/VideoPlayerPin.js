import React, { useState, useEffect } from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../style/style";

const VideoPlayerPin = (props) => {
  const [playerpin, setPlayerpin] = useState(null);
  const [xPos, setXPos] = useState(0);

  const { classes } = props;

  useEffect(() => {
    const onMovePin = (e) => setXPos(e.detail); // e.detail = progress

    document.addEventListener("movepin", onMovePin);
    return () => document.removeEventListener("movepin", onMovePin);
  }, [playerpin]);

  return (
    <div
      id={"playerpin"}
      ref={setPlayerpin}
      className={classes.playerpin}
      style={{ left: xPos + "%" }}
    ></div>
  );
};

export default injectSheet(styles)(VideoPlayerPin);
