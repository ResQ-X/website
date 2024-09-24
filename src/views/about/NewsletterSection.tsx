"use client";

import { ServerResponseModel } from "@/lib/models";
import { handleNewsletterSignup } from "@/server/contact";
import {
  ContactMessageModel,
  NewsletterModel,
} from "@/lib/models/contact.model";
import { hasEmptyFields } from "@/lib/utils";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewsletterSection = () => {
  const defaultData: NewsletterModel = {
    firstName: "",
    email: "",
  };
  const defaultServerResponse: ServerResponseModel = {} as ServerResponseModel;

  const [data, setData] = useState<NewsletterModel>(defaultData);
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

    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid";
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
            await handleNewsletterSignup(data);
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
    <div className="relative mx-4 flex min-h-[350px] items-center justify-center rounded-xl bg-[url('/images/newsletter_bg.png')] bg-cover bg-center md:min-h-[300px] lg:mx-[120px] lg:px-[100px]">
      <div className="absolute inset-0 rounded-xl bg-black opacity-20"></div>
      <div className="relative z-10 mb-10 mt-[57px] flex flex-col items-center">
        <p className="mb-[43px] max-h-[180px] text-center font-['Merriweather'] text-[40px] font-bold leading-[58px] text-white md:text-[50px]">
          Keep up with the latest tips by subscribing to our newsletter
        </p>

        <form onSubmit={handleSubmit} className="">
          <div className="form-control flex max-w-full flex-row items-center justify-between gap-4">
            <div className="form-control">
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
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={data.email}
                onChange={handleInputChange}
                className="input input-bordered w-full rounded-[10px] bg-[#E9E9E9] py-3 text-lg text-[#303A42] placeholder-[#93979b]"
                required
              />
            </div>
          </div>
          <div className="font-raleway text-2xl form-control relative mt-6 box-border flex max-h-[65px] max-w-[464px] justify-center rounded-[12px] px-1 py-3 font-semibold text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
            <button type="submit" className="text-center text-lg text-white">
              {isLoading ? "...Sending" : "Subscribe"}
            </button>
          </div>

          <ToastContainer />
        </form>
        {/*  <Link href="/contact">
          <div
            className={`font-raleway relative box-border flex min-h-[60px] w-[250px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[88px] p-[10px] text-lg leading-6 tracking-[-2%] text-white [background:linear-gradient(180deg,_#407BFF,_#08318D)]`}
          >
            <button
              className={`text-center font-['Raleway'] text-base font-semibold leading-[21px] tracking-[-2%]`}
            >
              Get a quote
            </button>
          </div>
        </Link> */}
      </div>
    </div>
  );
};
