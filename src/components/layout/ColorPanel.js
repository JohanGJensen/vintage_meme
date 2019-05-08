import React, { Component } from "react";
//style
import injectSheet from "react-jss";
import { colorPanel } from "../style/style.js";
//redux
import { connect } from "react-redux";
import { changeColorText } from "../actions/actions";

class ColorPanel extends Component {
  changeColor = e => {
    const { classes, changeColorText, theme } = this.props;
    const color = e.target.className;

    switch (color) {
      case classes.colorWhite:
        changeColorText(theme.palette.text);
        break;
      case classes.colorPrimary:
        changeColorText(theme.palette.primary);
        break;
      case classes.colorSecondary:
        changeColorText(theme.palette.secondary);
        break;
      case classes.colorBlack:
        changeColorText(theme.palette.tertiary);
        break;
      default:
        changeColorText(theme.palette.text);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.colorContainer}>
        <div onClick={this.changeColor} className={classes.colorWhite} />
        <div onClick={this.changeColor} className={classes.colorPrimary} />
        <div onClick={this.changeColor} className={classes.colorSecondary} />
        <div onClick={this.changeColor} className={classes.colorBlack} />
      </section>
    );
  }
}

export default connect(
  null,
  { changeColorText }
)(injectSheet(colorPanel)(ColorPanel));
