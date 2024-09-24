"use client";

import { ServerResponseModel } from "@/lib/models";
import { ContactMessageModel } from "@/lib/models/contact.model";
import { hasEmptyFields } from "@/lib/utils";
import { handleContactMessage } from "@/server/contact";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProps {
  title?: string;
  textSize?: string;
  bgFrom?: string;
  bgTo?: string;
}

export const ContactForm = ({
  title = "We love to hear from you!",
  textSize = "text-[32px]",
  bgFrom = "#ff8500",
  bgTo = "#995000",
}: IProps) => {
  const defaultData: ContactMessageModel = {
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  };
  const defaultServerResponse: ServerResponseModel = {} as ServerResponseModel;

  const [data, setData] = useState<ContactMessageModel>(defaultData);
  const [hasEmptyvalue, setHasEmptyFields] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [serverResponseMessage, setServerResponseMessage] = useState("");
  const [serverResponse, setServerResponse] = useState<ServerResponseModel>(
    defaultServerResponse,
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [customToast, setToast] = useState<JSX.Element | null>(null);

  const notify = (message: string) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form validation function
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!data.firstName) {
      newErrors.firstName = "First name is required";
    }

    if (!data.lastName) {
      newErrors.lastName = "Last name is required";
    }

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!data.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      console.log("handleSubmit CLICKED !!!");
      e.preventDefault();

      const hasEmptyProperty: boolean = hasEmptyFields(data);
      if (hasEmptyProperty) {
        setHasEmptyFields(true);
        console.log("handleSubmit setHasEmptyFields !!!");
        return;
      } else {
        setIsLoading(true);
        console.log(`handleSubmit setIsLoading ${isLoading} !!!`);
        if (validateForm()) {
          console.log("handleSubmit VALIDATED !!!");
          const response: ServerResponseModel =
            await handleContactMessage(data);
          setServerResponseMessage(response.message);
          setServerResponse(response);
          setIsLoading(false);
          notify(response.message);
        }
        setIsLoading(false);
        setData(defaultData);
        console.log("handleSubmit COMPLETED !!!");
      }
    } catch (error) {
      console.log(`handleSubmit ERROR: ${error} !!!`);
    }
  };

  return (
    <div className="card w-full shrink-0 bg-white shadow-2xl">
      <div className="card-body">
        <p className={`mb-6 text-center font-['Raleway'] ${textSize} font-extrabold leading-[37.57px] tracking-[-2%] text-[#303A42] lg:text-start lg:text-[32px]`}>
          {title}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-control flex max-w-full flex-row items-center justify-between gap-4">
            <div className="form-control">
              <label className="label pb-4 font-['Raleway'] text-xl font-medium text-[#303A42]">
                <span className="">First name</span>
              </label>
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleInputChange}
                className="input input-bordered w-full rounded-[10px] bg-[#E9E9E9] py-3 text-lg text-[#303A42] placeholder-[#93979b]"
                required
              />
            </div>

            <div className="form-control">
              <label className="label pb-4 font-['Raleway'] text-xl font-medium text-[#303A42]">
                <span className="">Last name</span>
              </label>
              <input
                type="text"
                placeholder="Last name"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleInputChange}
                className="input input-bordered w-full rounded-[10px] bg-[#E9E9E9] py-3 text-lg text-[#303A42] placeholder-[#93979b]"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label pb-4 font-['Raleway'] text-xl font-medium text-[#303A42]">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="Ex JohnDoe214@gmail.com"
              id="email"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              className="input input-bordered rounded-[10px] bg-[#E9E9E9] py-3 text-lg text-[#303A42] placeholder-[#93979b]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label pb-4 font-['Raleway'] text-xl font-medium text-[#303A42]">
              <span className="">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={data.subject}
              onChange={handleInputChange}
              className="input input-bordered rounded-[10px] bg-[#E9E9E9] py-3 text-lg text-[#303A42] placeholder-[#93979b]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label pb-4 font-['Raleway'] text-xl font-medium text-[#303A42]">
              <span className="">What can we help you with ?</span>
            </label>
            <textarea
              placeholder="Type here your message"
              id="message"
              name="message"
              value={data.message}
              onChange={handleInputChange}
              className="input input-bordered min-h-[138px] rounded-[10px] bg-[#E9E9E9] py-3 text-lg text-[#303A42] placeholder-[#93979b]"
              required
            ></textarea>
          </div>

          <div
            className={`font-raleway text-2xl form-control relative mt-6 box-border flex max-h-[65px]  justify-center rounded-[12px] px-1 py-3 font-semibold text-white [background:linear-gradient(180deg,_${bgFrom},_${bgTo})]`}
          >
            <button type="submit" className={`text-center text-lg text-white`}>
              {isLoading ? "...Sending" : "Submit"}
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};
