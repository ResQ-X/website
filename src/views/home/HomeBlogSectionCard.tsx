import { FlatRightIconButton } from "@/components/buttons/FlatRightIconButton";

export const HomeBlogSectionCard = ({ 
  backgroundImage, 
  title, 
  date, 
  className = "" 
}: { 
  backgroundImage: string, 
  title: string, 
  date: string, 
  className?: string 
}) => {
  return (
    <div className={`relative rounded-[40px] bg-cover bg-center ${className}`} 
         style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="absolute inset-0 rounded-[40px] bg-black opacity-10"></div>
      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex flex-col justify-between h-full">
          <div className="text-white">
            <p className="mb-3 font-raleway text-[20px] md:text-[24px] font-semibold leading-tight tracking-tighter max-h-[180px] overflow-hidden">
              {title}
            </p>
            <p className="mb-4 font-raleway text-base font-semibold tracking-tighter">
              {date}
            </p>
          </div>
          <div>
            <a href="" rel="noopener noreferrer" className="no-underline" target="_blank">
              <FlatRightIconButton
                text="Read More"
                alt="Arrow Right Icon"
                icon="/icons/arrow_right_long_icon.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};