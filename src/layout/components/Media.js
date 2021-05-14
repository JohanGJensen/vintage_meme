import React, { useEffect, useRef } from "react";
// style
// import injectSheet from "react-jss";
// import { styles } from "../../../style/style";
// redux
import { useSelector } from "react-redux";
// hooks
import { useActiveMedia } from "../hooks/useActiveMedia";

const Media = (props) => {
  const { inpoint, outpoint, source, type } = props.trackConfig;
  const mediaRef = useRef(null);
  const state = useSelector((state) => state);
  const { currentTime, playing } = state;

  const isActive = useActiveMedia(currentTime, inpoint, outpoint);

  useEffect(() => {
    if (playing && isActive && mediaRef.current) {
      mediaRef.current.play();
    }
    if (!playing && mediaRef.current) {
      mediaRef.current.pause();
    }
  }, [isActive, playing, mediaRef]);

  return (
    <>
      {isActive && (
        <video ref={mediaRef} crossOrigin="anonymous" muted>
          <source src={source} type={type} />
        </video>
      )}
    </>
  );
};

export default Media;
