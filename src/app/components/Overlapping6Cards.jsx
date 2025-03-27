"use client";
import { useState, useEffect } from "react";

const cardData = [
      {
        step: "01",
        title: "Register & Enroll",
        description: "Sign up by filling out the registration form with your name, email, and basic details.",
        borderColor: "#70B865",
      },
      {
        step: "02",
        title: "Start Learning",
        description: "Go through the structured learning modules at your own pace.",
        borderColor: "#FAA61A",
      },
      {
        step: "03",
        title: "Take the Assessment",
        description: "Complete a final test or project to demonstrate your financial literacy knowledge.",
        borderColor: "#BDD753",
      },
      {
        step: "04",
        title: "Earn Your Certificate",
        description: "Upon successful completion, recieve a verified certificate that can be downloaded and shared.",
        borderColor: "#70B865",
      },
      {
        step: "05",
        title: "Take the Assessment",
        description: "Complete a final test or project to demonstrate your financial literacy knowledge.",
        borderColor: "#BDD753",
      },
      {
        step: "06",
        title: "Earn Your Certificate",
        description: "Upon successful completion, recieve a verified certificate that can be downloaded and shared.",
        borderColor: "#70B865",
      },
  
];

const OverlappingCards = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleCardClick = (index) => {
    if (!isMobile && expandedCard !== index) {
      setExpandedCard(index);
    }
  };

  return (
    <div className={`flex justify-center items-center ${isMobile ? 'h-auto' : 'min-h-screen'} bg-gray-100 p-4`}>
      {/* Desktop Layout - No Changes */}
      {!isMobile ? (
        <div className="relative flex gap-[20px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-[40px] shadow-lg cursor-pointer transition-all duration-1000
                ${expandedCard === index ? "w-[400px]" : "w-[120px]"}
                h-[450px] flex flex-col justify-between p-[40px]
                ${index !== cardData.length - 1 ? "-mr-[55px]" : ""}
              `}
              style={{
                zIndex: (cardData.length - index) * 10,
                borderRight: `4px solid ${card.borderColor}`,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="flex h-full w-full relative">
                <div
                  className={`flex flex-col justify-between h-full transition-all duration-1000
                    ${expandedCard === index ? "ml-[20px]" : ""}
                  `}
                >
                  <div className="text-[60px] font-light leading-[100%] tracking-normal text-[#f4e1e2] text-center capitalize">
                    {card.step}
                  </div>

                  <h2
                    className="text-[25px] font-medium leading-[32px] text-black font-[Anek Latin]"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {card.title}
                  </h2>
                </div>

                {expandedCard === index && (
                  <div className="text-sm text-gray-600 self-end">
                    {card.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Mobile Layout - Optimized for 6 cards
        <div className="flex flex-col items-center w-full max-w-[335px] gap-1">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-full bg-white rounded-[16px] px-4 py-3 border-b-[3px] shadow-sm"
              style={{
                borderBottom: `3px solid ${card.borderColor}`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-[24px] font-light text-[#f4e1e2] w-8">
                  {card.step}
                </div>
                <h2 className="text-[14px] font-medium text-black font-[Anek Latin]">
                  {card.title}
                </h2>
              </div>
              <p className="text-gray-600 text-[12px] leading-[16px] pl-11 mt-1">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OverlappingCards;