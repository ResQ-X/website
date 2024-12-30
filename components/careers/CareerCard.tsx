import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareerCard({ career }: { career: Career }) {
  return (
    <Link href={`/careers/${career.id}`}>
      <div className="p-6 h-[100px] bg-dark rounded-lg hover:shadow-lg transition-all duration-300 flex justify-between items-center group">
        {/* Title Section */}
        <div className="w-1/4">
          <h3 className="text-[24px] tracking-[-2%] font-semibold text-white">{career.title}</h3>
        </div>

        {/* Experience Section */}
        <div className="w-1/4 flex justify-center">
          <div>
            <p className="text-lightest fon-semibold tracking-[-2%] text-[18px]">Experience</p>
            <p className="text-white font-semibold text-[24px] tracking-[-2%]">{career.experience}</p>
          </div>
        </div>

        {/* Deadline Section */}
        <div className="w-1/4 flex justify-center">
          <div>
            <p className="text-lightest fon-semibold tracking-[-2%] text-[18px]">Deadline</p>
            <p className="text-white font-semibold text-[24px] tracking-[-2%]">{career.deadline}</p>
          </div>
        </div>

        {/* Arrow Section */}
        <div className="w-1/4 flex justify-end">
          <ArrowRight className="text-[#CCC8C4] group-hover:text-orange transition-colors duration-300" />
        </div>
      </div>
    </Link>
  );
}