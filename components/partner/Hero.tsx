import Image from 'next/image'
import arrow from "@/public/icons/arrow.png"

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/patnerhero.jpeg" // You'll need to add your image
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(0, 0, 0, 0) -6.69%, rgba(0, 0, 0, 0.9) 101.35%),
              linear-gradient(180deg, rgba(0, 0, 0, 0.7) 2.72%, rgba(0, 0, 0, 0) 35.89%, rgba(0, 0, 0, 0.53) 100%)
            `
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20  h-full flex items-center justify-center">
        <div className="max-w-6xl flex items-center flex-col justify-center text-center">
          <h1 className="text-[64px] whitespace-nowrap font-bold text-white mb-6">
          Optimize Operations, Eliminate<br /> Downtime: ResQ-X for<br /> Businesses
          </h1>
          <p className="text-[24px] font-semibold text-lightest mb-8">
          Empowering your business with customized solutions to keep your fleet moving and your operations running smoothly. 
          </p>
          <div className="w-full max-w-[551px] h-[112px] flex items-center gap-[37px] justify-center">
              <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                <span className="relative z-10 text-white transition-colors duration-300">Get Quote</span>
                <Image 
                  src={arrow} 
                  alt="Arrow" 
                  className="relative z-10 group-hover:[filter:brightness(0)] transition-[filter] duration-300"
                />
        </button>
            </div>
        </div>
      </div>
    </section>
  )
}