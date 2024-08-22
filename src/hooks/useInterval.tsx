/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";

function useInterval(callback: any, delay: any, reset: any) {
  const savedCallback = useRef<any>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, reset]);
}

export default useInterval;
