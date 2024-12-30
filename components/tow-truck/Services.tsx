import Image from 'next/image';
import arrow from "@/public/icons/arrow.png"

interface PartnerCard {
  title: string;
  image: string;
}

// Fixed ServicesProps interface
interface ServicesProps {
  title: string;
}

const partnerData: PartnerCard[] = [
  {
    title: 'Fast Response Time',
    image: '/images/confusedman.jpeg',
  },
  {
    title: 'professional service',
    image: '/images/seriouslady.jpeg',
  },
  {
    title: 'affordable rates',
    image: '/images/moneyisplenty.png',
  },
  {
    title: '24/7 availability',
    image: '/images/working-woman.jpeg',
  },
];

// Fixed props destructuring
const Services: React.FC<ServicesProps> = ({ title }) => {
  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full lg:w-[874px] items-center justify-center">
          <h2 className="text-4xl leading-[75px] lg:text-[69px] tracking-[-2%] text-white font-bold text-center mb-12">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
          {partnerData.map((card, index) => (
            <div 
              key={index} 
              className="relative h-[508px] group overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={100}
                  priority={index < 2}
                />
              </div>
              
              {/* Gradient Overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20"></div>
              
              {/* Content */}
              <div className="relative items-center w-full h-full py-6 px-4 flex flex-col justify-end z-10">
                <h3 className="text-[20px] lg:text-[36px] text-center text-white uppercase font-bold mb-3 w-[249px]">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-9">
        <button className="relative flex items-center justify-center gap-3 w-[183px] h-[52px] rounded-[8px] border-[2px] hover:border-white border-white overflow-hidden group">
          <span className="absolute inset-0 w-full h-full bg-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white transition-colors duration-300">See Pricing</span>
          <Image 
            src={arrow} 
            alt="Arrow" 
            className="relative z-10 duration-300"
          />
        </button>
      </div>
    </section>
  );
};

export default Services;