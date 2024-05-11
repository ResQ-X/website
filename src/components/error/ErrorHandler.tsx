import { useState, useEffect } from "react";
import "./ErrorHandler.css";
import cancelImg from "../../assets/images/svg/cancel.svg";
import { ErrorHandlerType } from "../../models/ToastHandlerTypes";

interface IProps {
  errorHandlerObj: ErrorHandlerType;
  className?: string;
}

const ErrorHandler = function ({ errorHandlerObj, className }: IProps) {
  const [show, setShow] = useState(false);

  // Useeffect
  useEffect(() => {
    setShow(false);
    if (errorHandlerObj.hasError) setShow(true);
  }, [errorHandlerObj]);
  return (
    <>
      {show ? (
        <div className={`error-handler-container ${className || ""}`}>
          {/* {className} */}
          <div className="error-handler-header">
            <div className="error-handler-title">{errorHandlerObj.message}</div>

            <div className="cancel-error-buutton-wrrapper">
              <button onClick={() => setShow(false)}>
                <img src={cancelImg} alt="" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ErrorHandler;
