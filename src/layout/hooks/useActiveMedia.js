import { useState, useEffect } from "react";

export const useActiveMedia = (time, inpoint, outpoint) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const currentTime = time / 1000;

    if (currentTime >= inpoint && outpoint > currentTime) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [time, inpoint, outpoint]);

  return active;
};
