import { useEffect, useState } from "react";
import {
  ErrorHandlerType,
  SetErrorHandlerType,
  SetSuccessHandlerType,
  SuccessHandlerType,
} from "../models/ToastHandlerTypes";

// Functions
export const handleClearToastMessage = function (
  setErrorHandlerObj?: SetErrorHandlerType | null,
  setSuccessHandlerObj?: SetSuccessHandlerType | null
) {
  setSuccessHandlerObj &&
    setSuccessHandlerObj({ isSuccess: false, message: "" });
  setErrorHandlerObj && setErrorHandlerObj({ hasError: false, message: "" });
};

// Interface
interface IProps {
  noScrollTop?: boolean;
}
function useDisplayMessage({ noScrollTop = false }: IProps) {
  // Functions, States and Variables
  // States
  const [errorHandlerObj, setErrorHandlerObj] = useState<ErrorHandlerType>({
    hasError: false,
    message: "",
  });
  const [successHandlerObj, setSuccessHandlerObj] =
    useState<SuccessHandlerType>({
      isSuccess: false,
      message: "",
    });

  // UseEffects
  useEffect(() => {
    //scroll to page top
    if (errorHandlerObj.hasError || successHandlerObj.isSuccess) {
      !noScrollTop && window.scrollTo({ top: 0, behavior: "smooth" });

      // Clear all toast messages after 15 seconds
      const timeout = setTimeout(() => {
        handleClearToastMessage(setErrorHandlerObj, setSuccessHandlerObj);
      }, 15000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [errorHandlerObj, successHandlerObj]);

  // If response is failure, remove success message
  useEffect(() => {
    if (errorHandlerObj.hasError)
      setSuccessHandlerObj({ isSuccess: false, message: "" });
  }, [errorHandlerObj]);

  // If response is success, remove failure message
  useEffect(() => {
    if (successHandlerObj.isSuccess)
      setErrorHandlerObj({ hasError: false, message: "" });
  }, [successHandlerObj]);

  return {
    errorHandlerObj,
    successHandlerObj,
    setErrorHandlerObj,
    setSuccessHandlerObj,
  };
}

export default useDisplayMessage;
