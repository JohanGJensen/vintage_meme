import React, { Component } from "react";
import injectSheet from "react-jss";
import { galleryStyle } from "../style/style.js";
import { connect } from "react-redux";
import uuid from "uuid";

class Gallery extends Component {
  render() {
    const { classes, memeGallery } = this.props;

    return (
      <div className={classes.galleryContainer}>
        {memeGallery.map(meme => (
          <img
            key={uuid()}
            src={meme}
            alt="meme"
            className={classes.galleryImage}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  memeGallery: state.memeState.memeGallery
});

export default connect(mapStateToProps)(injectSheet(galleryStyle)(Gallery));
