import React from "react";

const ContactHero = () => {
  return (
    <div className="relative min-h-screen h-[600px] w-full">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/spannerman.jpeg')", // Replace with a suitable image
        }}
      >
        {/* Black Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-80" // Adjust opacity here
        />

        {/* Main Content Container */}
        <div className="relative w-full h-full flex flex-col justify-center items-center px-8">
          {/* Hero Text Content */}
          <div className="text-white w-full max-w-[720px] flex flex-col items-center gap-[16px] text-center">
            <h1 className="h1 uppercase leading-[85.14px]">
              We&apos;re Here to Help.
            </h1>
            <p className="h4 text-lightest leading-[31.18px]">
              Have questions, need support, or want to learn more about our services? Reach out to us anytime—we’re just a call or message away.
            </p>
            {/* Contact Options */}
            <div className="flex flex-wrap gap-6 justify-center mt-6">
              <a
                href="tel:+1234567890"
                className="w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white flex items-center justify-center text-white text-[16px] font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
              >
                Call Us
              </a>
              <a
                href="mailto:contact@resqx.com"
                className="w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white flex items-center justify-center text-white text-[16px] font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-black"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
