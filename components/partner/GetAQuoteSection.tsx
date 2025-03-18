import React from 'react';

const GetAQuoteSection = () => {
  return (
    <section className="w-full min-h-screen px-4 py-16 relative">
      {/* Hero Text */}
      <div className="text-center mb-12">
        <h2 className="text-[46px] lg:text-[64px] font-semibold mb-4">GET A QUOTE</h2>
        <p className="h5 text-[20px] text-lightest">
          Reach out to us for a personalized quote that meets your unique business needs.
        </p>
      </div>

      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-8 relative">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-[32px] text-[#303A42] font-extrabold mb-6">Get a custom quote</h3>
          <form className="space-y-6">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-lg text-gray-800">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-lg text-gray-800">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-gray-800">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-200 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-gray-800">
                Subject
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-gray-800">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-lg border-2 border-[#FF8500] overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-[#FF8500] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                  Send
                </span>
                <svg
                  className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        {/* Info Section with Orange Background */}
        <div className="relative w-full lg:w-1/2">
          {/* Orange Background */}
          <div className="absolute right-0 top-8 w-[340px] h-[calc(100%+2rem)] bg-[#FF8500] rounded-lg" />
          
          {/* Info Container */}
          <div className="relative w-full h-[586px] translate-y-[15%] translate-x-5 max-w-[619px] bg-[#3B3835] text-white p-8 rounded-lg flex flex-col justify-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8">Info</h3>
              
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">
                    <svg
                      fill="white"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-[20px]">Contact -</span>
                  <span>+234-811-1173-779</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-[20px]">Email -</span>
                  <span>hello@resqx.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-[20px]">Address -</span>
                  <span>Lagos, Nigeria</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-6 h-6">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      className="w-full h-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold text-[20px]">Instagram -</span>
                  <span>ResQ-X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuoteSection;