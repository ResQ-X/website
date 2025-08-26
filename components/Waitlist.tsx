"use client";
import { useState, useEffect } from "react";
import React, { FormEvent } from "react";
import Image from "next/image";
import bus from "../public/images/bus.png";
import logo from "../public/images/logo.png";
import james from "../public/images/james.jpg";
import john from "../public/images/john.jpg";
import joy from "../public/images/joy.jpg";
import checkmark from "../public/images/checkmark.gif";

export const WaitList: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [accountType, setAccountType] = useState("personal");
  const [fuelType, setFuelType] = useState("petrol");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://internal-backend-rdhj.onrender.com/waitlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-resqx-key": "OGCALMDOWNLETMETHROUGH",
          },
          body: JSON.stringify({
            name,
            email,
            entity: accountType.toUpperCase(),
            fuel_type: fuelType.toUpperCase(),
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Response:", data);
      setShowPopup(true); // show popup
    } catch (error) {
      console.error("Error posting to waitlist:", error);
      alert("Failed to submit");
    }
  };

  //timer

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = new Date("2025-09-22T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="overflow-x-hidden ">
        <div
          style={{ backgroundColor: "#6D5E4E" }}
          className="fixed text-white text-xl w-full sm:w-full md:w-full lg:w-full"
        >
          <div className="flex justify-center">
            <Image
              src={bus}
              alt="Resqx fuel Tank"
              className="w-full h-[calc(100vh-64px)] object-cover opacity-50  mask-gradient "
            />
          </div>
        </div>

        <div className="relative sm:inset-0 md:inset-0 lg:pt-[10px]  lg:mx-[70px] lg:mt-[0px] flex flex-col lg:justify-center overflow-x-hidden">
          <div className="w-[250px] mt-5 mx-7">
            <Image src={logo} alt="Resqx logo " />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 my-0 lg:m-7  font-['General_Sans'] tracking-[0.01em] text-white text-[18px]  justify-items-center">
            <div className="flex  flex-col w-[80%] lg:w-[100%] justify-items-center gap-5 m-0 my-7">
              <div className="w-full">
                <p className=" font-semibold text-[35px] leading-[100%] lg:w-70vw ">
                  Fuel Delivered. Anytime, Anywhere.
                </p>
              </div>

              <div className="leading-[30px] w-100vw  ">
                <p>Join the Refuel by ResQ-X Waitlist</p>
                <p className="w-[80%]">
                  Fuel delivered to your home, office, or anywhere in Lagos on
                  demand or scheduled. Save time. Get quality fuel. Fair
                  pricing.
                </p>

                <p className="mb-3">
                  For individuals & businesses: Cars, Generators, Fleets.
                </p>

                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big-icon lucide-circle-check-big inline mr-2 text-[#FF8500]"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  We deliver within your selected 1-hour time slot
                </p>

                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big-icon lucide-circle-check-big inline mr-2 text-[#FF8500]"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  DPR certified • Sealed meters • Zero tampering
                </p>

                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-check-big-icon lucide-circle-check-big inline mr-2 text-[#FF8500]"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  First 500 members get ₦5,000 welcome credit
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 md:gap-5 lg:gap-5 w-full ">
                <div className="flex items-center select-none bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[100%] lg:w-[100%] md:w-[100%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                  <svg
                    width="14"
                    height="20"
                    viewBox="0 0 14 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.192 0.279976L0.231997 10.528C0.0639974 10.696 0.183998 10.96 0.399998 10.96H6.16C6.352 10.96 6.472 11.152 6.4 11.32L2.776 19.456C2.656 19.72 2.992 19.936 3.184 19.72L13.696 7.81598C13.84 7.64798 13.72 7.38398 13.504 7.38398H7.408C7.216 7.38398 7.096 7.19198 7.192 7.02398L10.576 0.567976C10.72 0.327976 10.384 0.087976 10.192 0.279976Z"
                      fill="#FF8500"
                    />
                  </svg>
                  <div>
                    <p className="text-[14px]">On-Demand Delivery</p>
                    <p className="leading-[20px] text-[10px] font-normal">
                      Fuel in Minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-center select-none bg-[#FFFFFF12]  gap-4 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[100%] lg:w-[100%] md:w-[100%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 2.8999H18V1.8999C18 1.2999 17.6 0.899902 17 0.899902C16.4 0.899902 16 1.2999 16 1.8999V2.8999H8V1.8999C8 1.2999 7.6 0.899902 7 0.899902C6.4 0.899902 6 1.2999 6 1.8999V2.8999H5C3.3 2.8999 2 4.1999 2 5.8999V19.8999C2 21.5999 3.3 22.8999 5 22.8999H19C20.7 22.8999 22 21.5999 22 19.8999V5.8999C22 4.2999 20.7 2.8999 19 2.8999ZM7 18.8999C6.4 18.8999 6 18.4999 6 17.8999C6 17.2999 6.4 16.8999 7 16.8999C7.6 16.8999 8 17.2999 8 17.8999C8 18.4999 7.6 18.8999 7 18.8999ZM7 14.8999C6.4 14.8999 6 14.4999 6 13.8999C6 13.2999 6.4 12.8999 7 12.8999C7.6 12.8999 8 13.2999 8 13.8999C8 14.4999 7.6 14.8999 7 14.8999ZM12 18.8999C11.4 18.8999 11 18.4999 11 17.8999C11 17.2999 11.4 16.8999 12 16.8999C12.6 16.8999 13 17.2999 13 17.8999C13 18.4999 12.6 18.8999 12 18.8999ZM12 14.8999C11.4 14.8999 11 14.4999 11 13.8999C11 13.2999 11.4 12.8999 12 12.8999C12.6 12.8999 13 13.2999 13 13.8999C13 14.4999 12.6 14.8999 12 14.8999ZM17 18.8999C16.4 18.8999 16 18.4999 16 17.8999C16 17.2999 16.4 16.8999 17 16.8999C17.6 16.8999 18 17.2999 18 17.8999C18 18.4999 17.6 18.8999 17 18.8999ZM17 14.8999C16.4 14.8999 16 14.4999 16 13.8999C16 13.2999 16.4 12.8999 17 12.8999C17.6 12.8999 18 13.2999 18 13.8999C18 14.4999 17.6 14.8999 17 14.8999ZM20 8.8999H4V5.8999C4 5.2999 4.4 4.8999 5 4.8999H6V5.8999C6 6.4999 6.4 6.8999 7 6.8999C7.6 6.8999 8 6.4999 8 5.8999V4.8999H16V5.8999C16 6.4999 16.4 6.8999 17 6.8999C17.6 6.8999 18 6.4999 18 5.8999V4.8999H19C19.6 4.8999 20 5.2999 20 5.8999V8.8999Z"
                      fill="#FF8500"
                    />
                  </svg>

                  <div>
                    <p className="text-[14px]">Scheduled & Recurring</p>
                    <p className="leading-[20px] text-[10px] font-normal">
                      Plan ahead
                    </p>
                  </div>
                </div>

                <div className="flex items-center select-none bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[100%] lg:w-[100%] md:w-[100%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1703_56)">
                      <path
                        d="M15.375 13.875L17.4375 15.9375L15.9375 17.4375L13.875 15.375L15.375 13.875Z"
                        fill="#FF8500"
                      />
                      <path
                        d="M17.8125 15.5625L23.25 21L21 23.25L15.5625 17.8125L17.8125 15.5625Z"
                        fill="#B7946E"
                      />
                      <path
                        d="M9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25Z"
                        fill="#B7946E"
                      />
                      <path
                        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
                        fill="#FBBF80"
                      />
                      <path
                        d="M9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5Z"
                        fill="#FF8500"
                      />
                      <path
                        d="M9.5625 8.625H8.4375C8.02387 8.625 7.6875 8.28863 7.6875 7.875C7.6875 7.46137 8.02387 7.125 8.4375 7.125H9.5625C9.97613 7.125 10.3125 7.46137 10.3125 7.875H11.0625C11.0625 7.04775 10.3898 6.375 9.5625 6.375H9.375V5.625H8.625V6.375H8.4375C7.61025 6.375 6.9375 7.04775 6.9375 7.875C6.9375 8.70225 7.61025 9.375 8.4375 9.375H9.5625C9.97613 9.375 10.3125 9.71137 10.3125 10.125C10.3125 10.5386 9.97613 10.875 9.5625 10.875H8.4375C8.02387 10.875 7.6875 10.5386 7.6875 10.125H6.9375C6.9375 10.9523 7.61025 11.625 8.4375 11.625H8.625V12.375H9.375V11.625H9.5625C10.3898 11.625 11.0625 10.9523 11.0625 10.125C11.0625 9.29775 10.3898 8.625 9.5625 8.625Z"
                        fill="#B7946E"
                      />
                      <path
                        d="M13.2427 4.22705L13.773 4.75768L4.75687 13.7731L4.22662 13.2428L13.2427 4.22705Z"
                        fill="#FFD6AA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1703_56">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <div>
                    <p className="text-[14px]">Top-Quality Fuel Always </p>
                    <p className="leading-[20px] text-[10px] font-normal">
                      Trusted, safe for your engine.
                    </p>
                  </div>
                </div>

                <div className="flex items-center select-none bg-[#FFFFFF12]  gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-[100%] lg:w-[100%] md:w-[100%] hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1703_56)">
                      <path
                        d="M15.375 13.875L17.4375 15.9375L15.9375 17.4375L13.875 15.375L15.375 13.875Z"
                        fill="#FF8500"
                      />
                      <path
                        d="M17.8125 15.5625L23.25 21L21 23.25L15.5625 17.8125L17.8125 15.5625Z"
                        fill="#B7946E"
                      />
                      <path
                        d="M9 17.25C13.5563 17.25 17.25 13.5563 17.25 9C17.25 4.44365 13.5563 0.75 9 0.75C4.44365 0.75 0.75 4.44365 0.75 9C0.75 13.5563 4.44365 17.25 9 17.25Z"
                        fill="#B7946E"
                      />
                      <path
                        d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z"
                        fill="#FBBF80"
                      />
                      <path
                        d="M9 13.5C11.4853 13.5 13.5 11.4853 13.5 9C13.5 6.51472 11.4853 4.5 9 4.5C6.51472 4.5 4.5 6.51472 4.5 9C4.5 11.4853 6.51472 13.5 9 13.5Z"
                        fill="#FF8500"
                      />
                      <path
                        d="M9.5625 8.625H8.4375C8.02387 8.625 7.6875 8.28863 7.6875 7.875C7.6875 7.46137 8.02387 7.125 8.4375 7.125H9.5625C9.97613 7.125 10.3125 7.46137 10.3125 7.875H11.0625C11.0625 7.04775 10.3898 6.375 9.5625 6.375H9.375V5.625H8.625V6.375H8.4375C7.61025 6.375 6.9375 7.04775 6.9375 7.875C6.9375 8.70225 7.61025 9.375 8.4375 9.375H9.5625C9.97613 9.375 10.3125 9.71137 10.3125 10.125C10.3125 10.5386 9.97613 10.875 9.5625 10.875H8.4375C8.02387 10.875 7.6875 10.5386 7.6875 10.125H6.9375C6.9375 10.9523 7.61025 11.625 8.4375 11.625H8.625V12.375H9.375V11.625H9.5625C10.3898 11.625 11.0625 10.9523 11.0625 10.125C11.0625 9.29775 10.3898 8.625 9.5625 8.625Z"
                        fill="#B7946E"
                      />
                      <path
                        d="M13.2427 4.22705L13.773 4.75768L4.75687 13.7731L4.22662 13.2428L13.2427 4.22705Z"
                        fill="#FFD6AA"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1703_56">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div>
                    <p className="text-[14px]">Emergency Refills</p>
                    <p className="leading-[20px] text-[10px] font-normal">
                      Fast refills for urgent needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[100%] rounded-[18px] border-1 border-[#FF2914] bg-white p-7 text-center">
                <h2 className="text-[#FF2914] font-semibold text-lg mb-4">
                  Early Bird Bonus Expires In:
                </h2>

                <div className="flex justify-between text-center text-[#FF2914] font-bold text-3xl px-4">
                  {/* Days */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.days}</span>
                    <span className="text-xs font-normal mt-1 text-[#FF2914]">
                      Days
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.hours}</span>
                    <span className="text-xs font-normal mt-1 text-[#FF2914]">
                      Hours
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.minutes}</span>
                    <span className="text-xs font-normal mt-1 text-[#FF2914]">
                      Minutes
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.seconds}</span>
                    <span className="text-xs font-normal mt-1 text-[#FF2914]">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>

              <div className=" tracking-[0.01em] text-white text-[18px] pr-7 w-full ">
                <div className=" w-full lg:w-full ">
                  <div className="items-center">
                    <p className=" font-semibold text-[30px] leading-[100%] mb-3 text-center ">
                      Fueling Solutions For:
                    </p>
                  </div>

                  <div className=" flex  flex-wrap  items-center gap-4 justify-center w-full ">
                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500] w-[200px]  text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Fleets and Business
                    </p>

                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500] w-[200px]  text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Corporate Vehicles
                    </p>

                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500] w-[200px]  text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Staff Buses
                    </p>

                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500]  w-[200px] text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Generator Farms
                    </p>

                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500]  w-[200px]  text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Ride-hailing Drivers
                    </p>

                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500] w-[200px]  text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Construction Sites
                    </p>

                    <p className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 border border-[#FF8500]  w-[200px]  text-center bg-[#FF85002B] rounded-full  leading-[20px] text-[14px] font-normal py-3 px-5 bg">
                      Everyday Drivers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-[80%] border h-[800px] border-[#FF8500] border-[] rounded-[50px] py-7 px-0  text-[#777777] flex flex-col items-center gap-5">
              <div className="w-full flex flex-col items-center justify-center gap-3">
                <p className="font-semibold text-[30px] leading-[100%] w-[75%] text-center">
                  Be the first to fuel smarter with Refuel by ResQ-X
                </p>

                <p className="w-[82%] text-center text-[18px] leading-[26px] tracking-[0.02em]">
                  ResQ-X delivers fuel straight to your vehicle at home, at work
                  or on the road. Anytime you need it.
                </p>
              </div>

              <form
                id="waitlistForm"
                onSubmit={handleSubmit}
                className="w-[100%] flex flex-col items-center justify-center px-7 gap-4 text-[14px] "
              >
                <div className="flex flex-col items-start w-full  ">
                  <p className="mb-2 text-black">Account Type</p>
                  <div className="flex justify-between w-full  text-black gap-2">
                    <button
                      type="button"
                      name="entity"
                      onClick={() => setAccountType("personal")}
                      className={`border  w-full rounded-[10px]  
                                        ${
                                          accountType === "personal"
                                            ? "border-[#FF8500] bg-[#FFE0B3]"
                                            : "border-[#C6C6C6]"
                                        } `}
                    >
                      Personal
                    </button>

                    <button
                      type="button"
                      name="entity"
                      onClick={() => setAccountType("business")}
                      className={`border  w-full  py-4 rounded-[10px]
                                        ${
                                          accountType === "business"
                                            ? "border-[#FF8500]  bg-[#FFE0B3]"
                                            : "border-[#C6C6C6]"
                                        }`}
                    >
                      Business
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full  ">
                  <p className="mb-2  text-black">Your Name</p>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} //setting the data inside the input field as name
                    id="nameInput"
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border rounded border-gray-300"
                  />
                </div>

                <div className="flex flex-col items-start w-full  ">
                  <p className="mb-2 text-black">Your Email</p>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="emailInput"
                    required
                    placeholder="johndoe@gmail.com"
                    className="w-full p-3 border rounded border-gray-300"
                  />
                </div>

                <div className="flex flex-col items-start w-full ">
                  <p className="mb-2 text-black">Primary Fuel Type</p>
                  <div className="flex justify-between w-full text-black  gap-2">
                    <button
                      type="button"
                      name="fuel_type"
                      onClick={() => setFuelType("petrol")}
                      className={`border  w-full rounded-[10px]
                                        ${
                                          fuelType === "petrol"
                                            ? "border-[#FF8500] bg-[#FFE0B3]"
                                            : "border-[#C6C6C6]"
                                        } `}
                    >
                      Petrol (PMS)
                    </button>

                    <button
                      type="button"
                      name="fuel_type"
                      onClick={() => setFuelType("diesel")}
                      className={`border  w-full py-4 rounded-[10px]
                                        ${
                                          fuelType === "diesel"
                                            ? "border-[#FF8500]  bg-[#FFE0B3]"
                                            : "border-[#C6C6C6]"
                                        }`}
                    >
                      Diesel (AGO)
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF8500] text-white font-bold text-sm py-3 border rounded-[12px] cursor-pointer mt-[30px] lg:mt-5"
                >
                  Get Early Access + ₦5,000 Credit ➔
                </button>
              </form>
              <p className="text-[12px]  ">🔒 Your data is secured.</p>

              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                  <div className="relative bg-white px-6 py-4 rounded-[30px] shadow-lg text-center w-[270px] h-[270px] lg:w-[362px] lg:h-[270px] flex flex-col justify-center ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute right-[20px] top-[30px] -translate-y-1/2 text-[#777777] cursor-pointer"
                      onClick={() => {
                        setShowPopup(false); // close popup
                      }}
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="#474747"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.16992 14.8299L14.8299 9.16992"
                        stroke="#474747"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.8299 14.8299L9.16992 9.16992"
                        stroke="#474747"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div className="flex justify-center ">
                      <Image
                        src={checkmark}
                        alt="checkmark"
                        className=" w-[124px] h-[124px] justify-center"
                      />
                    </div>
                    <p className="text-[#777777] font-medium">
                      Your details have been successfully added to the waitlist.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-[100%] mb-7 md:w-80% mt-5">
            <p className="lg:font-[600] lg:text-[36px] mx-auto font-[600] text-[25px] text-center  text-white w-[90%] mb-2">
              Testimonials from Our Beta Testers
            </p>

            <div className="flex flex-wrap justify-center w-full text-[#5E5E5E] gap-7 text-[18px]">
              <div className=" bg-white border border-[#FF8500] rounded-[30px] p-5 w-full max-w-[350px] h-[auto] flex-grow">
                <div className="relative py-7 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#FF8500] rotate-180 absolute top-0 left-0 w-6 h-6"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 
                                                    0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 
                                            1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                  </svg>
                  <p>
                    I get fuel delivered straight to my office for all my
                    vehicles. It’s fast, reliable, and frees up my time for what
                    truly matters.
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#FF8500] absolute bottom-0 right-0 w-6 h-6  "
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 
                                                    0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 
                                            1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                  </svg>
                </div>

                <div className="flex flex-row items-center mt-2 gap-5">
                  <Image
                    src={john}
                    alt="Resqx fuel Tank"
                    className="w-[40px] h-[40px] rounded-full object-cover "
                  />

                  <div>
                    <p>John O.</p>
                    <p className="text-yellow-500 ">★★★★★</p>
                  </div>
                </div>
              </div>

              <div className=" bg-white border border-[#FF8500] rounded-[30px] p-5  w-full max-w-[350px] h-[auto] flex-grow">
                <div className="relative py-7 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#FF8500] rotate-180 absolute top-0 left-1 w-6 h-6"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 
                                                    0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 
                                            1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                  </svg>

                  <p>
                    Waking up early to queue for fuel used to be my reality.
                    With Refuel by ResQ-X, no queues, no stress, just fast and
                    reliable service.
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#FF8500] absolute bottom-0 right-0 w-6 h-6  "
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 
                                                    0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 
                                            1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-row items-center  mt-2 gap-5">
                  <Image
                    src={joy}
                    alt="Resqx fuel Tank"
                    className="w-[40px] h-[40px] rounded-full object-cover "
                  />

                  <div>
                    <p>Rahima A.</p>
                    <p className="text-yellow-500 ">★★★★★</p>
                  </div>
                </div>
              </div>

              <div className=" bg-white border border-[#FF8500] rounded-[30px] p-5 w-full max-w-[350px] h-[auto] flex-grow">
                <div className="relative py-7 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#FF8500] rotate-180 absolute top-0 left-1 w-6 h-6"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 
                                                    0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 
                                            1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                  </svg>

                  <p>
                    No more getting cheated at fuel stations. Enjoy fair
                    pricing, accurate litres, and total peace of mind with every
                    delivery.
                  </p>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-quote-icon lucide-quote text-[#FF8500] absolute bottom-0 right-0 w-6 h-6  "
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 
                                                    0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 
                                            1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    />
                  </svg>
                </div>

                <div className="flex flex-row mt-2 items-center gap-5">
                  <Image
                    src={james}
                    alt="Resqx fuel Tank"
                    className="w-[40px] h-[40px] rounded-full object-cover "
                  />

                  <div>
                    <p>Damilare B.</p>
                    <p className="text-yellow-500 ">★★★★★</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-0 w-full items-center flex flex-col justify-center text-white my-7 text-center">
            <div className="items-center flex flex-col justify-center">
              <p className="flex items-center space-x-2 bg-[#FF8500] px-7 py-3 mb-4 rounded-4xl font-bold">
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 
                                        5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 
                                        12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 
                                        1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                For Businesses & Fleet Managers
              </p>

              <p className=" font-semibold text-[35px] leading-[100%] lg:w-70vw mx-5">
                Fuel Your Fleet Without the Hassle.
              </p>
            </div>

            <div className="leading-[30px]  w-[60%] mt-2">
              <p className=" text-center">
                Reduce operational costs by 25%. Eliminate fuel theft. Track
                every litre. Join companies saving millions with Refuel for
                Business.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[100%] mb-7 md:w-80%">
            <div className="flex flex-wrap items-center gap-4 justify-center w-[90%] text-[#5E5E5E]  mx-auto">
              <div className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 bg-[#FF85002B] text-white h-[240px] border border-[#FF8500] rounded-[30px] md:w-[48%] lg:w-[30%] p-7 flex flex-col">
                <div className="bg-[#FF8500] w-[60px] py-4 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-clock-icon lucide-clock "
                  >
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>

                <p className="font-bold">Zero Vehicle Downtime</p>
                <p className="mb-4 ">
                  Fuel delivered directly to your parking lot. Vehicles stay
                  productive, not stuck in fuel queues.
                </p>
              </div>

              <div className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 bg-[#FF85002B] text-white h-[240px] border border-[#FF8500]  rounded-[30px] md:w-[48%] lg:w-[30%] p-7 flex flex-col">
                <div className="bg-[#FF8500] w-[60px] py-4 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield-icon lucide-shield"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0
                                                0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    />
                  </svg>
                </div>

                <p className="font-bold">Eliminate Fuel Fraud</p>
                <p className=" ">
                  Digital receipts, GPS tracking, and sealed meters. Know
                  exactly where every litre goes.
                </p>
              </div>

              <div className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 bg-[#FF85002B] text-white h-[240px] border border-[#FF8500]  rounded-[30px] md:w-[48%] lg:w-[30%] p-7 flex flex-col">
                <div className="bg-[#FF8500] w-[60px] py-4 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 
                                            5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 
                                            12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 
                                            1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p className="font-bold">25% Cost Reduction</p>
                <p className=" ">
                  No more inflated receipts, ghost purchases, or driver
                  kickbacks. Transparent pricing always.
                </p>
              </div>

              <div className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 bg-[#FF85002B] text-white h-[240px] border border-[#FF8500]  rounded-[30px] md:w-[48%] lg:w-[30%] p-7 flex flex-col">
                <div className="bg-[#FF8500] w-[60px] py-4 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone-icon lucide-phone"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 
                                            0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                    />
                  </svg>
                </div>

                <p className="font-bold">Dedicated Account Manager</p>
                <p className=" ">
                  24/7 support line, priority delivery slots, and customized
                  billing cycles for your business.
                </p>
              </div>

              <div className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 bg-[#FF85002B] text-white h-[240px] border border-[#FF8500] rounded-[30px] md:w-[48%] lg:w-[30%] p-7 flex flex-col">
                <div className="bg-[#FF8500] w-[60px] py-4 flex items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-award-icon lucide-award"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>

                <p className="font-bold">Volume Discounts</p>
                <p className=" ">
                  The more you order, the more you save. Up to 15% off for
                  high-volume corporate accounts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
