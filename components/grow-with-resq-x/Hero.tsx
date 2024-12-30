import Image from 'next/image'
import qrcode from "@/public/images/QR Code.png"

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/grow.jpeg" // You'll need to add your image
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
      <div className="relative z-10 container mx-auto px-4 pt-20 -mt-[100px] h-full flex items-center justify-center">
        <div className="max-w-6xl flex items-center flex-col justify-center text-center">
          <h1 className="text-[64px] whitespace-nowrap font-bold text-white mb-6">
            ELEVATE YOUR SERVICE WITH RESQ - X
          </h1>
          <p className="text-[24px] font-semibold text-lightest mb-8">
            Join ResQ X and expand your reach as a trusted service provider. Connect with more 
            customers, increase your job opportunities, and deliver top-notch service. Let&apos;s grow together.
          </p>
          <div className="w-full max-w-[551px] h-[112px] flex items-center gap-[37px] justify-center">
              <div className="flex-1 max-w-[351px] h-full rounded-[6px] p-[12px] flex items-center gap-[8px] bg-dark">
                <Image src={qrcode} alt="Scan qr code" className='w-[88px] h-[88px]' />
                <p className="text-[20px] font-raleway text-white leading-[23.48px] tracking-[-2%] font-semibold whitespace-nowrap">
                  Scan to Download App
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}