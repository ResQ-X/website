import Image from "next/image";
import james from "@/public/images/james.jpg";
import john from "@/public/images/john.jpg";
import joy from "@/public/images/joy.jpg";
import { QuoteUpIcon, QuoteDownIcon } from "@/components/Svgs";

export const TESTIMONIALS = [
  {
    text: "I get fuel delivered straight to my office for all my vehicles. It's fast, reliable, and frees up my time for what truly matters.",
    author: "John O.",
    image: john,
  },
  {
    text: "Waking up early to queue for fuel used to be my reality. With Refuel by ResQ-X, no queues, no stress, just fast and reliable service.",
    author: "Rahima A.",
    image: joy,
  },
  {
    text: "No more getting cheated at fuel stations. Enjoy fair pricing, accurate litres, and total peace of mind with every delivery.",
    author: "Damilare B.",
    image: james,
  },
];

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
}) => (
  <div className="bg-white border border-[#FF8500] rounded-[30px] p-5 w-full max-w-[350px] h-[auto] flex-grow">
    <div className="relative py-7 px-3">
      <QuoteUpIcon />
      <p>{testimonial.text}</p>
      <QuoteDownIcon />
    </div>
    <div className="flex flex-row items-center mt-2 gap-5">
      <Image
        src={testimonial.image}
        alt={testimonial.author}
        className="w-[40px] h-[40px] rounded-full object-cover"
      />
      <div>
        <p>{testimonial.author}</p>
        <p className="text-yellow-500">★★★★★</p>
      </div>
    </div>
  </div>
);
