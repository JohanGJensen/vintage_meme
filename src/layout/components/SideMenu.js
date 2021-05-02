import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";

const SideMenu = (props) => {
  const { classes } = props;

  return (
    <section className={classes.sideMenu}>
      <code>insert menu here</code>
    </section>
  );
};

export default injectSheet(styles)(SideMenu);
