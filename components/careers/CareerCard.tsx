import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareerCard({ career }: { career: Career }) {
  return (
    <Link href={`/careers/${career.id}`}>
      <div className="p-4 sm:p-6 h-auto sm:h-[100px] bg-dark rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row justify-between items-center group gap-4 sm:gap-0">
        {/* Title Section */}
        <div className="w-full sm:w-1/4">
          <h3 className="text-[20px] sm:text-[24px] tracking-[-2%] font-semibold text-white">{career.title}</h3>
        </div>

        {/* Experience Section */}
        <div className="w-full sm:w-1/4 flex justify-start sm:justify-center">
          <div>
            <p className="text-lightest font-semibold tracking-[-2%] text-[16px] sm:text-[18px]">Experience</p>
            <p className="text-white font-semibold text-[20px] sm:text-[24px] tracking-[-2%]">{career.experience}</p>
          </div>
        </div>

        {/* Deadline Section */}
        <div className="w-full sm:w-1/4 flex justify-start sm:justify-center">
          <div>
            <p className="text-lightest font-semibold tracking-[-2%] text-[16px] sm:text-[18px]">Deadline</p>
            <p className="text-white font-semibold text-[20px] sm:text-[24px] tracking-[-2%]">{career.deadline}</p>
          </div>
        </div>

        {/* Arrow Section */}
        <div className="w-full sm:w-1/4 flex justify-start sm:justify-end">
          <ArrowRight className="text-[#CCC8C4] group-hover:text-orange transition-colors duration-300" />
        </div>
      </div>
    </Link>
  );
}