/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useEffect, useState } from "react";
import styles from "./WaitlistForm.module.css";
// import { motion } from "framer-motion";
import { decode } from "html-entities";
import {
  ErrorHandlerType,
  SetErrorHandlerType,
  SetSuccessHandlerType,
  SuccessHandlerType,
} from "../../../../../models/ToastHandlerTypes";
import { handleClearToastMessage } from "../../../../../hooks/useDisplayMessage";
import PrimaryButton from "../../../../../components/buttons/primary-button/PrimaryButton";

interface IProps {
  status: any;
  message: any;
  onValidated: any;
  setSuccessHandlerObj: SetSuccessHandlerType;
  successHandlerObj: SuccessHandlerType;
  errorHandlerObj: ErrorHandlerType;
  setErrorHandlerObj: SetErrorHandlerType;
}

function WaitlistForm({
  status,
  message,
  onValidated,
  setSuccessHandlerObj,
  successHandlerObj,
  errorHandlerObj,
  setErrorHandlerObj,
}: IProps) {
  // Functions, states and variables

  // States
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  //   Functions
  //   Handles API call to submit form
  const handleSubmitForm = function (e: MouseEvent<HTMLButtonElement>) {
    // Clear Toast Message
    handleClearToastMessage(setErrorHandlerObj, setSuccessHandlerObj);

    // if (email === "") {
    //   e.preventDefault();
    //   setErrorHandlerObj({
    //     hasError: true,
    //     message: "Please enter a valid email address",
    //   });

    //   return null;
    // }

    const isAnyFormInputEmpty = email === "" || firstName === "";

    if (!isAnyFormInputEmpty) {
      e.preventDefault();

      const data = {
        MERGE0: email,
        MERGE1: firstName,
      };
      // Call onValidated function to validate form and submit data
      const isFormValidated = onValidated(data);
      return isFormValidated;
    }
  };

  const getMessage = (message: any) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  const handleEmptyInputStates = function () {
    setEmail("");
    setFirstName("");
  };

  // UseEffects
  useEffect(() => {
    if (successHandlerObj.isSuccess) {
      handleEmptyInputStates();
      // Remove success message after 20 seconds
      setTimeout(() => {
        setSuccessHandlerObj({ isSuccess: false, message: "" });
      }, 20000);
    }
  }, [successHandlerObj]);

  useEffect(() => {
    if (status === "success") {
      setSuccessHandlerObj({
        isSuccess: true,
        message: "You have successfully joined our waitlist!",
      });
    }
  }, [status]);

  return (
    <section className={styles.subscribe_form_section}>
      <form
        className={`waitlist-form-container ${
          successHandlerObj.isSuccess ? "none" : ""
        }`}
      >
        {/* Email */}
        <div className={styles.form_group_wrapper}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First Name"
          />
        </div>

        <div className={styles.form_group_wrapper}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
          />
        </div>

        {/* Submit Button Wrapper */}
        <PrimaryButton
          placeholder={status === "sending" ? "Joining..." : "Join Waitlist"}
          withArrow={true}
          isActionLoading={status === "sending"}
          disabled={status === "sending"}
          onClick={(e) => handleSubmitForm(e)}
          className={styles.subscribe_button_wrapper}
        />
      </form>

      <div className={styles.app_form_info}>
        {status === "error" || errorHandlerObj.hasError ? (
          <div
            className={styles.app_form_error}
            dangerouslySetInnerHTML={{
              __html: errorHandlerObj.message || getMessage(message) || "",
            }}
          />
        ) : null}
      </div>
      {status === "success" &&
        status !== "error" &&
        !errorHandlerObj.hasError && (
          <div
            className={`email-success-container ${styles.app_form_info} ${
              successHandlerObj.isSuccess ? "" : "none"
            }`}
          >
            {successHandlerObj.message}
          </div>
        )}
    </section>
  );
}

export default WaitlistForm;
