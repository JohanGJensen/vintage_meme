import { useLayoutEffect, useRef, useState, useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";

export const useAnimationFrame = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { playing, currentTime } = state;

  const [duration, setDuration] = useState(0);
  const requestRef = useRef();

  useEffect(() => {
    setDuration(state.duration * 1000);
  }, [state.duration]);

  useLayoutEffect(() => {
    const updatePinPosition = (start, ts) => {
      const now = new Date().getTime();
      const runtime = now - start + ts;
      const progress = runtime / duration;

      const pinEvent = new CustomEvent("movepin", { detail: 100 * progress });

      dispatch({ type: "CHANGE_CURRENT_TIME", payload: runtime });

      if (runtime < duration) {
        document.dispatchEvent(pinEvent);
        requestRef.current = requestAnimationFrame(() =>
          updatePinPosition(start, ts)
        );
      } else {
        dispatch({ type: "CHANGE_PLAYING", payload: false });
      }
    };

    if (!playing) {
      cancelAnimationFrame(requestRef.current);
    }

    if (playing) {
      requestRef.current = requestAnimationFrame(() => {
        updatePinPosition(new Date().getTime(), currentTime);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, duration]);
};
