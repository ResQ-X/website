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
import axios from "axios";
import { api } from "../../../../../api/config";
import { handleAPIError } from "../../../../../utils/handleAPIError";

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
  //
  const [isLoading, setIsLoading] = useState(false);

  //   Functions
  //   Handles API call to submit form
  const handleSubmitForm = function (e: MouseEvent<HTMLButtonElement>) {
    // Clear Toast Message
    handleClearToastMessage(setErrorHandlerObj, setSuccessHandlerObj);
    // Check if any form input is empty
    const isAnyFormInputEmpty = email === "" || firstName === "";

    if (!isAnyFormInputEmpty) {
      e.preventDefault();

      // Check if email address is valid

      const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]/;
      // Email Pattern validation
      const isEmailPatternMatched = emailPattern.test(email);
      if (!isEmailPatternMatched) {
        setErrorHandlerObj({
          hasError: true,
          message: "Please enter a valid email address.",
        });
        return false;
      }

      // Call the API to submit form
      handleCallAPIToSubmitForm();
    }
  };

  // Handle Call the API to submit form and submit form to mailchimp on sucess
  const handleCallAPIToSubmitForm = function () {
    // Mailchimp Payload Data
    const mailchimpPayloadData = {
      MERGE0: email,
      MERGE1: firstName,
    };

    // API Payload Data
    const apiPayloadData = {
      firstName,
      email,
    };

    // API URL
    const URL = `${api}/api/v1/contact/welcome-email`;
    setIsLoading(true);
    axios
      .post(URL, apiPayloadData)
      .then(() => {
        // Call the onValidated function to submit data mailchimp on success to validate form and submit data
        const isFormValidated = onValidated(mailchimpPayloadData);
        return isFormValidated;
      })
      .catch((ex) => {
        handleAPIError(ex, setErrorHandlerObj);
      })
      .finally(() => setIsLoading(false));
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
          placeholder={
            isLoading || status === "sending" ? "Joining..." : "Join Waitlist"
          }
          withArrow={true}
          isActionLoading={isLoading || status === "sending"}
          disabled={isLoading || status === "sending"}
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
