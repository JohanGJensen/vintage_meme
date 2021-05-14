import React, { useEffect } from "react";
//style
import injectSheet from "react-jss";
import { styles } from "../../../style/style";
// redux
// import { useDispatch } from "react-redux";
// components
import VideoPlayerMenu from "./VideoPlayerMenu";

const VideoPlayer = (props) => {
  // const dispatch = useDispatch();

  // const [videoEl, setVideoEl] = React.useState(null);
  const { classes, tracks } = props;
  // const currentFilm = tracks[0];

  // useEffect(() => {
  // const onReadyStateChange = () => {
  //   if (videoEl && videoEl.readyState === 4) {
  // dispatch({
  // type: "CHANGE_DURATION",
  // payload: videoEl.duration,
  // });

  //     dispatch({ type: "CHANGE_VIDEO", payload: videoEl });
  //   }
  // };

  //   document.addEventListener("readystatechange", onReadyStateChange);

  //   return () => {
  //     document.removeEventListener("readystatechange", onReadyStateChange);
  //   };
  // }, [videoEl, dispatch]);

  return (
    <section className={classes.video}>
      {/* <video ref={setVideoEl} crossOrigin="anonymous" id="video" muted>
        <source src={currentFilm.source} type={currentFilm.type} />
      </video> */}
      <VideoPlayerMenu />
    </section>
  );
};

export default injectSheet(styles)(VideoPlayer);
