import Image from "next/image";
import Link from "next/link";
import React from "react";

function GetStartedModal() {
  return (
    <div className="nav-get-started-modal absolute top-14 right-0 z-50 hidden">
      <div className="get-started-modal-wrapper w-350 h-[270px] px-8 py-6 bg-white rounded-larger">
        {/* Merchantt signup wrapper */}
        <div className="merchant-signup-wrapper flex items-start justify-between">
          <div className="icon-section w-16 h-8 flex justify-center items-center bg-grayPrimary rounded-md">
            <Image
              src="/merchant-signup-icon.svg"
              width={18}
              height={18}
              layout="intrinsic"
              alt=""
              className=""
            />
          </div>

          {/* Wrapper main Content */}
          <div className="wrapper-main-section ml-5 ">
            <Link href={`${process.env.NEXT_PUBLIC_MERCHANT_URL}`}>
              <a>
                <div className="wrapper-title-text text-purplePrimary text-xl font-bold">
                  Signup as Merchant
                </div>

                <div className="wrapper-sub-text text-grayTertiary mt-3 text-sm font-medium">
                  Register as a Merchant, Upload your products, your payment is
                  guaranteed.
                </div>
              </a>
            </Link>
          </div>
        </div>

        {/* Employer signup wrapper */}
        <div className="employer-signup-wrapper flex items-start justify-between mt-8">
          <div className="icon-section w-16 h-8 flex justify-center items-center bg-grayPrimary rounded-md">
            <Image
              src="/employer-signup-icon.svg"
              width={18}
              height={18}
              layout="intrinsic"
              alt=""
              className=""
            />
          </div>

          {/* Wrapper main Content */}
          <div className="wrapper-main-section ml-5 ">
            <Link href={`${process.env.NEXT_PUBLIC_COMPANY_URL}`}>
              <a>
                <div className="wrapper-title-text text-purplePrimary text-xl font-bold">
                  Signup as an Employer
                </div>

                <div className="wrapper-sub-text text-grayTertiary mt-3 text-sm font-medium">
                  Register as a company and make everyday a pay day for your
                  staff.
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedModal;
