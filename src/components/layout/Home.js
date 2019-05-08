import React, { Component } from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../style/style.js";
//REDUX
import { connect } from "react-redux";
import { writeMemeCaption, saveMeme } from "../actions/actions.js";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//components
import ColorPanel from "./ColorPanel";

class Home extends Component {
  state = {
    togglePlay: true
  };

  handlePlay = () => {
    const { togglePlay } = this.state;
    const { memeText } = this.props;
    const vid = document.getElementById("meme");

    if (togglePlay) {
      vid.pause();
      this.setState({ togglePlay: false });
      this.handleText(memeText);
    } else {
      vid.play();
      this.setState({ togglePlay: true });
      this.handleText(memeText);
    }
  };

  handleText = text => {
    const vid = document.getElementById("meme");
    const canvas = document.getElementById("videoCanvas");
    const ctx = canvas.getContext("2d");
    let color = this.props.changeColor;

    ctx.font = "40px Courier";
    ctx.fillStyle = color;
    ctx.textAlign = "center";

    ctx.drawImage(vid, 0, 0, 800, 450);
    ctx.fillText(text, 400, 400, 600);
  };

  handleDownload = () => {
    const canvas = document.getElementById("videoCanvas");
    let image = canvas.toDataURL("image/jpeg", 1.0);

    const link = document.createElement("a");
    link.download = "meme.jpeg";
    link.href = image;
    link.click();
  };

  handleSave = () => {
    const { memeGallery } = this.props;
    const canvas = document.getElementById("videoCanvas");
    let image = canvas.toDataURL("image/jpeg", 1.0);
    let updGallery = [...memeGallery, image];

    localStorage.setItem("memeGallery", JSON.stringify(updGallery));
    this.props.saveMeme(image);
  };

  handleChange = e => {
    this.props.writeMemeCaption(e.target.value);
    this.handleText(e.target.value);
  };

  render() {
    const { togglePlay } = this.state;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <section className={classes.canvasStyle}>
          <canvas
            className={togglePlay ? "hidden" : "visible"}
            ref="canvas"
            id="videoCanvas"
            width="800"
            height="450"
          />
          <video
            crossOrigin="anonymous"
            id="meme"
            width="800"
            height="450"
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src="https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm"
              type="video/webm"
            />
          </video>
        </section>
        <section className="button-panel">
          <button onClick={this.handlePlay} className={classes.btn}>
            {togglePlay ? (
              <FontAwesomeIcon
                className={classes[`title-primary`] + " icon"}
                size="3x"
                icon="pause"
              />
            ) : (
              <FontAwesomeIcon
                className={classes[`title-secondary`] + " icon"}
                size="3x"
                icon="play"
              />
            )}
          </button>
          <button onClick={this.handleDownload} className={classes.btn}>
            <FontAwesomeIcon
              className={classes[`title-primary`] + " icon"}
              size="3x"
              icon="download"
            />
          </button>
          <button onClick={this.handleSave} className={classes.btn}>
            <FontAwesomeIcon
              className={classes[`title-primary`] + " icon"}
              size="3x"
              icon="save"
            />
          </button>
        </section>
        <section className="input-section">
          <label className={classes.label}>Meme text:</label>
          <input
            className={classes.inputBar}
            onChange={this.handleChange}
            type="text"
            placeholder="Something edgy..."
          />
        </section>
        <ColorPanel />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  memeText: state.memeState.memeText,
  memeGallery: state.memeState.memeGallery,
  changeColor: state.memeState.changeColor
});

export default connect(
  mapStateToProps,
  { writeMemeCaption, saveMeme }
)(injectSheet(styles)(Home));
