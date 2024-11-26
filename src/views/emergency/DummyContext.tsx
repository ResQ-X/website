"use client";

import Image from "next/image";

const DummyContent = () => {
  return (
    <Image
      src="/images/home/blog/carImg2.jpeg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default DummyContent;
