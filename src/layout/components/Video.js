import React from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
// import { connect } from "react-redux";
// import { writeMemeCaption, saveMeme } from "../../state/actions/actions";

const Video = (props) => {
  // const { classes } = props;

  return (
    <video
      crossOrigin="anonymous"
      id="meme"
      width="1042"
      height="586"
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
  );
};

export default injectSheet(styles)(Video);
