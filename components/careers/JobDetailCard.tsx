import Image from "next/image";
import Vector from "@/public/icons/Vector.svg";
import Vector1 from "@/public/icons/Vector1.svg";
import Vector2 from "@/public/icons/Vector2.svg";
import Vector3 from "@/public/icons/Vector3.svg";
import Vector4 from "@/public/icons/Vector4.svg";
import Vector5 from "@/public/icons/Vector5.svg";
import Vector6 from "@/public/icons/Vedtor6.svg";

import Instagram from "@/public/icons/Instagram1.svg";
import Facebook from "@/public/icons/Facebook1.svg";
import Twitter from "@/public/icons/Twiter.svg";
import LinkedIn from "@/public/icons/Linkedin1.svg";

export default function JobDetailCard({ jobDetail }: { jobDetail: JobDetail }) {
  return (
    <div className="max-w-7xl mx-auto p-6 rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{jobDetail.title}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Who Are We Looking For
            </h2>
            <ul className="space-y-2">
              {jobDetail.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-white mt-2 mr-2" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              What Will You Be Doing?
            </h2>
            <ul className="space-y-2">
              {jobDetail.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#f9f9f9] max-w-[423px] h-[752px] px-6 py-12 rounded-lg">
            <h3 className="font-bold text-dark-brown tracking-[-2%] text-[28px] mb-1">
              Job Summary
            </h3>
            <div className="space-y-[32px]">
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector1}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Location</p>
                  <p>{jobDetail.location}</p>
                </div>
              </div>
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Job Type</p>
                  <p>{jobDetail.jobType}</p>
                </div>
              </div>
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector6}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Date Posted</p>
                  <p>{jobDetail.datePosted}</p>
                </div>
              </div>
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector5}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Experience</p>
                  <p>{jobDetail.experience}</p>
                </div>
              </div>
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector4}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Working Hours</p>
                  <p>{jobDetail.workingHours}</p>
                </div>
              </div>
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector3}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Working Days</p>
                  <p>Weekly: {jobDetail.workingDays.weekly}</p>
                  <p>Weekend: {jobDetail.workingDays.weekend}</p>
                </div>
              </div>
              <div className="h-[46px] flex items-center gap-[12px]">
                <Image
                  src={Vector2}
                  alt={jobDetail.location}
                  className="w-[31.3px] h-[40px]"
                />
                <div className="h5 text-[16px] text-[#A89887] tracking-[-2%]">
                  <p className="">Vacancy</p>
                  <p>No of Vacancy: {jobDetail.vacancy}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <p className="mb-3">Share this:</p>

            <div className="w-[257px] h-[54px] flex items-center gap-[12px]">
              <Image src={Instagram} alt="Instagram" />
              <Image src={Facebook} alt="Facebook" />
              <Image src={Twitter} alt="Twitter" />
              <Image src={LinkedIn} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Salary</h2>
          <p>Salary: {jobDetail.salary.range}</p>
          <p>Salary Review: {jobDetail.salary.review}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Benefits You&apos;ll Get</h2>
          <ul className="space-y-2">
            {jobDetail.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">How To Apply</h2>
          <ul className="space-y-2">
            {jobDetail.applicationProcess.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="h-2 w-2 rounded-full bg-blue-500 mt-2 mr-2" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
