import { careersData } from '@/data/career';
import CareerCard from '@/components/careers/CareerCard';

export default function CareersPage() {
  return (
    <div className="max-w-[1096px] mx-auto relative py-32 px-6">
      <div className="text-center mb-12">
        <p className="h6 text-lightest mb-2 tracking-tighter">Come Join Us</p>
        <h1 className="text-white text-[40px] tracking-[-2%] font-bold mb-4 uppercase">Career Openings</h1>
        <p className="text-lightest mx-auto w-full max-w-[530px] text-[18px] font-semibold tracking-[-2%]">
          We&apos;re always looking for creative, talented self-starters to join
          the ResQ-X family. Check out our open roles below and fill out an
          application.
        </p>
      </div>
      
      <div className="flex flex-col gap-6">
        {careersData.map((career) => (
          <CareerCard key={career.id} career={career} />
        ))}
      </div>
      <div className="absolute bottom-0 -left-52 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>

    </div>
  );
}