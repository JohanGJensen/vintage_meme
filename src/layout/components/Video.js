import React, { useEffect } from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../style/style";
// redux
import { useDispatch } from "react-redux";
// components
import VideoPlayerMenu from "./VideoPlayerMenu";

const films = [
  {
    name: "man_with_beer",
    extension: "webm",
    type: "video/webm",
    source:
      "https://upload.wikimedia.org/wikipedia/en/transcoded/6/61/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm/Old_Man_Drinking_a_Glass_of_Beer_%281897%29.webm.360p.webm",
  },
];

const Video = (props) => {
  const dispatch = useDispatch();

  const videoEl = React.useRef(null);
  const currentFilm = films[0];
  const { classes } = props;

  useEffect(() => {
    const onReadyStateChange = () => {
      if (videoEl.current.readyState === 4)
        dispatch({
          type: "CHANGE_DURATION",
          payload: videoEl.current.duration,
        });
    };

    document.addEventListener("readystatechange", onReadyStateChange);

    return () => {
      document.removeEventListener("readystatechange", onReadyStateChange);
    };
  }, []);

  return (
    <section className={classes.video}>
      <video ref={videoEl} crossOrigin="anonymous" id="video" muted>
        <source src={currentFilm.source} type={currentFilm.type} />
      </video>
      <VideoPlayerMenu />
    </section>
  );
};

export default injectSheet(styles)(Video);
