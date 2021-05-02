import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";

const Timeline = (props) => {
  const { classes } = props;

  return (
    <section className={classes.timeline}>
      <code>timeline</code>
    </section>
  );
};

export default injectSheet(styles)(Timeline);
