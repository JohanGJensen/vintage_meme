import React, { Component } from "react";
import injectSheet from "react-jss";
import { headerStyle } from "../style/style.js";
import { toggleTitleColor } from "../actions/actions.js";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    const { classes, toggleTitleColor, titleColor } = this.props;

    return (
      <header className={classes.Header}>
        <h1
          onClick={toggleTitleColor}
          className={classes[`title-${titleColor}`]}
        >
          Vintage Meme Machine
        </h1>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  titleColor: state.memeState.titleColor
});

export default connect(
  mapStateToProps,
  { toggleTitleColor }
)(injectSheet(headerStyle)(Header));
