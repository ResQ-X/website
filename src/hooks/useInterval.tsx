import { useEffect } from "react";

function useInterval(callback: () => void, delay: number) {
  // const savedCallback = useRef();

  // Remember the latest callback.
  // useEffect(() => {
  //   savedCallback.current = callback;
  // }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      callback();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
