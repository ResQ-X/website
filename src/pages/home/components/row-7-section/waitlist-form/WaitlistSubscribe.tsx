/* eslint-disable @typescript-eslint/no-explicit-any */
import MailchimpSubscribe from "react-mailchimp-subscribe";
import WaitlistForm from "./WaitlistForm";
import useDisplayMessage from "../../../../../hooks/useDisplayMessage";

const WaitlistSubscribe = () => {
  // Functions, States and Variables
  // Hooks
  const {
    errorHandlerObj,
    successHandlerObj,
    setErrorHandlerObj,
    setSuccessHandlerObj,
  } = useDisplayMessage({ noScrollTop: true });
  const URL =
    "https://resqx.us22.list-manage.com/subscribe/post?u=0d53a3cd8dfccebb3884c43b9&amp;id=bb0346d241";

  return (
    <MailchimpSubscribe
      url={URL}
      render={({ subscribe, status, message }: any) => {
        return (
          <WaitlistForm
            status={status}
            message={message}
            onValidated={(formData: FormData) => subscribe(formData)}
            successHandlerObj={successHandlerObj}
            setSuccessHandlerObj={setSuccessHandlerObj}
            errorHandlerObj={errorHandlerObj}
            setErrorHandlerObj={setErrorHandlerObj}
          />
        );
      }}
    />
  );
};

export default WaitlistSubscribe;
