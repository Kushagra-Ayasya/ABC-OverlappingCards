"use client"
import Image from "next/image";
import OverlappingCards from "./Overlapping6Cards";
import hat from "../assets/redHat.png";
import { useState, useEffect } from "react";

const StepsToWealth6 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="w-full flex justify-center bg-[#F5F5F5] py-[20px] md:py-[80px] px-[20px] md:px-[80px]">
      <div className={`w-full max-w-[1440px] flex flex-col md:flex-row items-start gap-0 md:gap-[40px] ${isMobile ? '' : 'min-h-[600px]'}`}>
        {/* Left Section - Title & Image */}
        <div className="w-full md:w-[45%] flex flex-col items-center md:items-start">
          <h2 className="font-anek-latin text-[32px] md:text-[54px] leading-tight tracking-[-0.03em] text-black text-center md:text-left mt-0 md:mt-16 capitalize pb-2">
            Steps To Unlock The{' '}
            <span className="block md:inline text-red-500">Roadmap To Wealth</span>
          </h2>

          {/* Only show the image on desktop */}
          <div className="hidden md:block mt-34">
            <Image 
              src={hat} 
              alt="Graduation Hat" 
              width={498} 
              height={206} 
              className="mix-blend-multiply"
              priority
            />
          </div>
        </div>

        {/* Right Section - Overlapping Cards */}
        <div className="w-full md:w-[55%] flex justify-center md:justify-end mt-0 md:-mt-4">
          <OverlappingCards />
        </div>
      </div>
    </section>
  );
};

export default StepsToWealth6;