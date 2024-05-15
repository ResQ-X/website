import { useEffect } from "react";
import { useInView } from "framer-motion";

// Interfaces
interface IProps {
  ref: React.MutableRefObject<null>;
  callback: () => void;
}

function useIsInViewAnimate({ ref, callback }: IProps) {
  // Functions, States and Variables
  const isInView = useInView(ref, { amount: 0, once: false });

  //   UseEffects
  useEffect(() => {
    if (isInView) {
      // Trigger the callback function if ref element is in view
      callback();
    }
  }, [isInView]);
}

export default useIsInViewAnimate;
