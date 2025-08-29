import {
  GraphIcon,
  ClockIcon,
  SheildIcon,
  CallIcon,
  BadgeIcon,
} from "@/components/Svgs";

export const BUSINESS_BENEFITS = [
  {
    icon: <ClockIcon />,
    title: "Zero Vehicle Downtime",
    description:
      "Fuel delivered directly to your parking lot. Vehicles stay productive, not stuck in fuel queues.",
  },
  {
    icon: <SheildIcon />,
    title: "Eliminate Fuel Fraud",
    description:
      "Digital receipts, GPS tracking, and sealed meters. Know exactly where every litre goes.",
  },
  {
    icon: <GraphIcon />,
    title: "25% Cost Reduction",
    description:
      "No more inflated receipts, ghost purchases, or driver kickbacks. Transparent pricing always.",
  },
  {
    icon: <CallIcon />,
    title: "Dedicated Account Manager",
    description:
      "24/7 support line, priority delivery slots, and customized billing cycles for your business.",
  },
  {
    icon: <BadgeIcon />,
    title: "Volume Discounts",
    description:
      "The more you order, the more you save. Up to 15% off for high-volume corporate accounts.",
  },
];

export const BenefitCard = ({
  benefit,
}: {
  benefit: (typeof BUSINESS_BENEFITS)[0];
}) => (
  <div className="hover:shadow-[0_4px_20px_#FF8500] select-none transition-shadow duration-300 bg-[#FF85002B] text-white h-[240px] border border-[#FF8500] rounded-[30px] md:w-[48%] lg:w-[30%] p-7 flex flex-col">
    <div className="bg-[#FF8500] w-[60px] py-4 flex items-center justify-center rounded-full mb-4">
      {benefit.icon}
    </div>
    <p className="font-bold">{benefit.title}</p>
    <p className="mb-4">{benefit.description}</p>
  </div>
);
