import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
// import { connect } from "react-redux";
// import { writeMemeCaption, saveMeme } from "../../state/actions/actions";

const Home = (props) => {
  const { classes } = props;

  return (
    <section className={classes.canvasStyle}>
      <canvas id="videoCanvas" width="800" height="450" />
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
  );
};

export default injectSheet(styles)(Home);
