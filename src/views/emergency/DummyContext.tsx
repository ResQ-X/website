"use client";

import Image from "next/image";

interface DummyContentProps {
  title: string;
  description: string;
  arrival: string;
  price: string;
  additionalInfo?: string;
  image: string;
}

const DummyContent: React.FC<DummyContentProps> = ({
  title,
  description,
  arrival,
  price,
  additionalInfo,
  image,
}) => {
  return (
    <div className="relative w-[90%] text-white p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[2.3rem] font-extrabold">{title}</h2>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
          {arrival}
        </span>
      </div>
      <p className="text-slate-100 font-semibold mb-4">{description}</p>
      <div className="pt-1">
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
                <span className="font-bold text-lg">Price</span>
                <span className="text-xl font-semibold">{price}</span>
            </div>
            <div className="">
            <a
                href="https://wa.me/+2347010363424?text=Hi%20ResQx.%20I%20Want%20to%20order%20emergency%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex px-4 py-3 bg-green-500 text-white text-sm rounded-3xl shadow-lg font-semibold hover:bg-green-600 transition"
            >
                <i className="pi pi-whatsapp text-center mt-1 mr-2"></i>
                Get ResQ
            </a>
            </div>
        </div>
        {additionalInfo && (
          <p className="text-gray-500 text-sm mt-2">{additionalInfo}</p>
        )}
      </div>
      <div className="">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="object-contain rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default DummyContent;
