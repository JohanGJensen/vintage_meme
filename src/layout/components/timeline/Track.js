import React from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";

const Track = (props) => {
  const { classes, name = "generic", duration = 0, state } = props;

  return (
    <div className={classes.trackContainer}>
      <div
        className={classes.track}
        style={{
          left: "0",
          width: `${(100 / state.duration) * duration}%`,
        }}
      >
        <h6 className={classes.trackText}>{name}</h6>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Track);
