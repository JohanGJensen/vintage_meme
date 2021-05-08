import React from "react";
// style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
import { useSelector } from "react-redux";

const Timeline = (props) => {
  const { classes } = props;
  const duration = useSelector((state) => state.duration);

  return (
    <section className={classes.timeline}>
      <code>timeline: {duration}</code>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
