export const FeatureCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => (
  <div className="flex items-center select-none bg-[#FFFFFF12] gap-3 border pt-2 pb-4 px-4 border-[#FF8500] rounded-lg w-full hover:shadow-[0_4px_20px_#FF8500] transition-shadow duration-300">
    {icon}
    <div>
      <p className="text-[14px]">{title}</p>
      <p className="leading-[20px] text-[10px] font-normal">{subtitle}</p>
    </div>
  </div>
);
