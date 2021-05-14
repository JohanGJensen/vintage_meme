import React from "react";

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

export default Track;
