"use client"
import Image from "next/image";
import Overlapping6Cards from "./Overlapping6Cards";
import hat from "../assets/redHat.png";
import { useState, useEffect } from "react";

const StepsToWealth6 = () => {
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
      <div className={`w-full mx-auto flex flex-col ${isTablet ? 'items-center' : 'md:flex-row items-start'} gap-0 md:gap-10 px-4 max-w-[1800px]`}>
        <div className={`w-full ${isTablet ? 'max-w-[600px]' : 'md:w-1/2'} flex flex-col gap-8 md:gap-12 items-center md:items-start`}>
          <h2 className="text-[32px] md:text-5xl font-extralight leading-tight tracking-[-0.03em] text-black text-center md:text-left w-full capitalize">
            Steps To Unlock The{' '}
            <span className="block text-red-500">Roadmap To Wealth</span>
          </h2>

          {!isMobile && (
            <div className="w-full">
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

        <div className={`w-full ${isTablet ? 'max-w-[700px] mt-8' : 'md:w-1/2 md:mt-0'} flex justify-center`}>
          <Overlapping6Cards />
        </div>
      </div>
    </section>
  );
};

export default StepsToWealth6;