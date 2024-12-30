"use client"

import Image from 'next/image'
import BlurredHeading from './BlurHeading';

export default function WhyResqX() {
  return (
    <>
    <div className="w-full h-32 relative -py-20" style={{
      background: 'radial-gradient(circle at 50% 50%, rgba(38, 36, 34, 1) 0%, rgba(38, 36, 34, 1) 70%, rgba(38, 36, 34, 1) 100%)',
      filter: 'blur(60px)',
      transform: 'scale(1.9)'
    }}></div>
    <section className="relative -py-20">
      {/* Content */}
      <BlurredHeading text="WHY RESQ-X?" />
      <div className="relative z-10 container mx-auto px-4">

      <div className="w-full max-w-[1324px] mx-auto h-[555px] px-4 md:px-8 flex flex-row-reverse items-center justify-between gap-8 border-[5px] bg-white border-[#736250] rounded-[12px]">
        {/* Left side - Image */}
        <div className="flex-1 relative h-[526.87px] hidden md:block">
          <Image
            src="/images/business.png"
            alt="Business opportunities"
            fill
            className="object-contain"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-[600px]">
          <div className="flex flex-col gap-6">
            <h2 className="h1 tracking-[-2%] leading-[75.13px] font-semibold text-dark-brown w-[702px]">
            Steady Stream of Work, Transparent Earnings
            </h2>
            
            <p className="h5 w-[685px] font-normal text-[16px] text-[#333333] leading-[23.48px]">
            Access a constant flow of service requests to keep your business busy and profitable. Easily track your earnings through the app and receive payments promptly.
            </p>
          </div>

          {/* Download App Section */}
          <div className="w-full max-w-[551px] h-[112px] flex items-center gap-[37px]">
            <div className="flex-1 max-w-[351px] h-full rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark">
              <Image 
                src="/images/QR Code.png" 
                alt="Scan qr code" 
                width={88}
                height={88}
              />
              <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                Scan to Download App
              </p>
            </div>
            <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-orange border-orange overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10 text-dark-brown transition-colors duration-300">Learn More</span>
              <Image 
                src="/icons/arrow.png" 
                alt="Arrow" 
                width={24}
                height={24}
                className="relative z-10 [filter:brightness(0)] transition-[filter] duration-300"
              />
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}