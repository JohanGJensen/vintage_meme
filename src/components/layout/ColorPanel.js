import React, { Component } from "react";
import PropTypes from "prop-types";
//style
import injectSheet from "react-jss";
import { colorPanel } from "../style/style.js";
//redux
import { connect } from "react-redux";
import { changeColorText } from "../actions/actions";

class ColorPanel extends Component {
  changeColor = e => {
    const { classes, changeColorText, theme, memeText } = this.props;
    const color = e.target.className;

    const vid = document.getElementById("meme");
    const canvas = document.getElementById("videoCanvas");
    const ctx = canvas.getContext("2d");

    switch (color) {
      case classes.colorWhite:
        changeColorText(theme.palette.text);
        ctx.fillStyle = theme.palette.text;
        break;
      case classes.colorPrimary:
        changeColorText(theme.palette.primary);
        ctx.fillStyle = theme.palette.primary;
        break;
      case classes.colorSecondary:
        changeColorText(theme.palette.secondary);
        ctx.fillStyle = theme.palette.secondary;
        break;
      case classes.colorBlack:
        changeColorText(theme.palette.tertiary);
        ctx.fillStyle = theme.palette.tertiary;
        break;
      default:
        changeColorText(theme.palette.text);
    }

    ctx.drawImage(vid, 0, 0, 800, 450);
    ctx.fillText(memeText, 400, 400, 600);
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

ColorPanel.propTypes = {
  memeText: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  memeText: state.memeState.memeText
});

export default connect(
  mapStateToProps,
  { changeColorText }
)(injectSheet(colorPanel)(ColorPanel));
