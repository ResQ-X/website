import Image from 'next/image';
import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, imageUrl }) => (
  <div className="relative w-[424px]">
    {/* Image container */}
    <div className="relative w-full h-[296px]">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    
    {/* Content container */}
    <div className="absolute h-[296px] bottom-[-70%] left-1/2 -translate-x-1/2 w-[384px] bg-[#3B3835CC] p-6 rounded-lg flex items-center justify-center flex-col">
      {/* Centered number circle */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <div className="w-[127px] h-[127px] rounded-full border-[2px] border-[#A89887] bg-white flex items-center justify-center">
          <span className="text-[64px] tracking-[-2%] font-bold text-[#736250]">{number}</span>
        </div>
      </div>
      <h3 className="text-white text-[20px] font-semibold mt-12 mb-4">{title}</h3>
      <p className="text-lightest font-normal text-sm">{description}</p>
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps: StepCardProps[] = [
    {
      number: "01",
      title: "GET IN TOUCH",
      description: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      imageUrl: "/images/woman.jpeg"
    },
    {
      number: "02",
      title: "FIND YOUR IDEAL PLAN",
      description: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      imageUrl: "/images/pcmna.jpeg"
    },
    {
      number: "03",
      title: "OPERATE WORRY-FREE",
      description: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      imageUrl: "/images/steering.jpeg"
    }
  ];

  return (
    <section className="w-full pt-16 pb-96 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[64px] tracking-[-2%] font-bold mb-2">HOW IT WORKS</h2>
          <p className="text-lg max-w-[622px] mx-auto font-semibold text-lightest">
            Streamline your operations and enhance customer satisfaction with our quick and efficient roadside assistance services, tailored to meet the needs of your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 justify-items-center">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;