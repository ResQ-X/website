import Image from "next/image";
import { FaqsAccordion } from "@/components/FaqsAccordion";
import { faqsList } from "@/lib/values/faqs.values";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const ContactForm = () => {
  return (
    <div className="bg-transparent">
      <div className="flex flex-col items-end lg:flex-row lg:justify-end lg:gap-16">
        <div className="w-full p-8 lg:w-2/4">
          <div className="card w-full shrink-0 bg-white shadow-2xl">
            <div className="card-body">
              <p className="mb-6 font-['Raleway'] text-[32px] font-extrabold leading-[37.57px] tracking-[-2%] text-[#303A42]">
                We love to hear from you!
              </p>
              <form className="">
                <div className="flex flex-row gap-10">
                  <div className="form-control">
                    <label className="label font-['Raleway'] text-xl">
                      <span className="label-text">First name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input input-bordered w-[212px] rounded-[10px] bg-[#E9E9E9] py-8 text-lg text-[#303A4280]"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-['Raleway'] text-xl">
                      <span className="label-text">Last name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="input input-bordered w-[212px] rounded-[10px] bg-[#E9E9E9] py-8 text-lg text-[#303A4280]"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label font-['Raleway'] text-xl">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Ex JohnDoe214@gmail.com"
                    className="input input-bordered rounded-[10px] bg-[#E9E9E9] py-8 text-lg text-[#303A4280]"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label font-['Raleway'] text-xl">
                    <span className="label-text">Email</span>
                  </label>
                  <textarea
                    placeholder="Ex JohnDoe214@gmail.com"
                    className="input input-bordered rounded-[10px] bg-[#E9E9E9] py-8 text-lg text-[#303A4280]"
                    required
                  ></textarea>
                </div>

                <div className="font-raleway form-control relative box-border flex max-h-[65px] max-w-[464px] rounded-[88px] px-1 py-3 text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
                  <button className="text-center text-lg text-white ">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/4"></div>
      </div>
    </div>
  );
};
