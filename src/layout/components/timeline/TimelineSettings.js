import React from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
import { useSelector } from "react-redux";

const TimelineSettings = (props) => {
  // const { classes } = props;
  const duration = useSelector((state) => state.duration);

  return (
    <div style={{ width: "100%", height: "30px" }}>
      <code>
        duration: <span style={{ color: "#FF0000" }}>{duration}</span>
        sec
      </code>
    </div>
  );
};

export default injectSheet(styles)(TimelineSettings);
