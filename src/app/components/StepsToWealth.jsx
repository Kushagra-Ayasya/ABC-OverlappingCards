"use client";
import Image from "next/image";
import OverlappingCards from "./OverlappingCards";
import hat from "../assets/redHat.png";
import { useState, useEffect } from "react";

const StepsToWealth = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="w-full bg-[#F5F5F5] py-12 md:py-8">
      <div className={`w-full mx-auto flex flex-col ${isTablet ? 'items-center' : 'md:flex-row items-start'} gap-0 md:gap-10 px-4`}>
        
        <div className={`w-full ${isTablet ? 'max-w-[600px] flex flex-col items-center' : 'md:w-1/2 flex flex-col items-start'} gap-8 md:gap-12`}>
          <h2 className="text-[32px] md:text-5xl font-extralight leading-tight tracking-[-0.03em] text-black text-center w-full capitalize">
            Steps To Unlock The{' '}
            <span className="block text-red-500">Roadmap To Wealth</span>
          </h2>

          {!isMobile && (
            <div className="w-full flex justify-center">
              <Image
                src={hat}
                alt="Graduation Hat"
                width={498}
                height={250}
                className="mix-blend-darken object-cover w-full max-w-[498px]"
                priority
              />
            </div>
          )}
        </div>

        <div className={`w-full ${isTablet ? 'max-w-[600px] mt-8 flex justify-center' : 'md:w-1/2 md:mt-0 flex justify-center'}`}>
          <OverlappingCards />
        </div>
      </div>
    </section>
  );
};

export default StepsToWealth;
