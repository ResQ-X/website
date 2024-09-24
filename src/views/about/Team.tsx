"use client";

import { ITeam } from "@/lib/models";
import { teamList } from "@/lib/values/team.values";
import React, { useState } from "react";

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState(teamList[0]);

  const handleMemberClick = (member: ITeam) => {
    setSelectedMember(member);
  };

  return (
    <div className="relative">
      <div className="mb-[80px] flex-col items-center justify-center md:mx-[40px]">
        <div className="flex flex-col font-['Raleway'] tracking-[-2%]">
          <p className="mb-10 text-center text-[50px] font-semibold leading-[75.14px] text-[#332414] md:text-[64px]">
            Meet The Team
          </p>
          <div className="mx-10 flex flex-col items-center justify-center gap-4 bg-[#faf8f5] lg:flex-row-reverse lg:gap-1">
            {/* Right side - Team members pictures in a circle */}
            <div className="flex items-center justify-center rounded-lg bg-[#faf8f5] lg:w-1/2">
              <div className="py-auto relative h-[400px] max-h-full w-[400px] ">
                {/* Circle container */}
                <div className="absolute flex h-full w-full items-center justify-center rounded-full">
                  {/* Center image */}
                  <div className="absolute z-10 rounded-[100px] bg-[#FF8500] p-2">
                    <img
                      src="/images/about/team_center_image.png"
                      alt="Center Image"
                      className="h-[90px] w-[90px] rounded-full border-[#FF8500] object-cover" // Adjust size as needed
                    />
                  </div>

                  {teamList.map((member, index) => {
                    const angle = (360 / teamList.length) * index; // Calculate the angle for each image
                    const radius = 180; // Adjust radius as needed for spacing
                    const imgSize = 100; // Adjust this to match the size of your images (h-16 w-16 = 64px)

                    return (
                      <div
                        key={member.id}
                        className="absolute"
                        style={{
                          transform: `rotate(${angle}deg) translate(${radius - imgSize / 2}px) rotate(-${angle}deg)`, // Rotate and position images
                        }}
                        onClick={() => handleMemberClick(member)}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className={`h-[100px] w-[100px] cursor-pointer rounded-full   ${
                            selectedMember.id === member.id
                              ? "border-4 border-orange-500 opacity-100"
                              : "opacity-70"
                          } `}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Left side - Display selected team member details */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-[#ff8500] px-10 py-[50px] text-white lg:w-1/2">
              <p className="mb-6 text-center text-[30px] font-bold leading-[46.96px]">
                {selectedMember.role}
              </p>
              <div className="mb-10 w-[300px] rounded-lg bg-white p-4">
                <p className="text-center text-[22px] font-semibold leading-[37.57px] text-[#736250]">
                  {selectedMember.name}
                </p>
              </div>
              <p className="mb-6 text-center text-[16px] font-bold leading-[37.57px]">
                {selectedMember.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* 
 <div className="flex flex-col items-center justify-center rounded-lg bg-[#ff8500] px-10 py-[50px] text-white lg:w-1/2">
              <p className="mb-6 text-center text-[40px] font-bold leading-[46.96px]">
                {selectedMember.role}
              </p>
              <div className="mb-10 w-[300px] rounded-lg bg-white p-4">
                <p className="text-center text-[32px] font-semibold leading-[37.57px] text-[#736250]">
                  {selectedMember.name}
                </p>
              </div>
              <p className="mb-6 text-center text-[32px] font-bold leading-[37.57px]">
                {selectedMember.bio}
              </p>
            </div> */
