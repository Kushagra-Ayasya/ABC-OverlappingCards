"use client";
import { useState } from "react";

const cardData = [
  {
    step: "01",
    title: "Register & Enroll",
    description:
      "Sign up by filling out the registration form with your name, email, and basic details.",
    borderColor: "#E53935", // Red
  },
  {
    step: "02",
    title: "Start Learning",
    description:
      "Begin your learning journey with our curated content and resources.",
    borderColor: "#1E88E5", // Blue
  },
  {
    step: "03",
    title: "Take the Assessment",
    description: "Complete the assessment to test your knowledge and skills.",
    borderColor: "#43A047", // Green
  },
  {
    step: "04",
    title: "Earn Your Certificate",
    description:
      "Receive your certificate upon successful completion of the course.",
    borderColor: "#FB8C00", // Orange
  },
  
];

const OverlappingCards = () => {
  const [expandedCard, setExpandedCard] = useState(0); 

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative flex gap-[20px]">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-[40px] shadow-lg cursor-pointer transition-all duration-1000
              ${expandedCard === index ? "w-[400px]" : "w-[161px]"}
              h-[420px] flex flex-col justify-between p-[40px]
              ${index !== cardData.length - 1 ? "-mr-[55px]" : ""}
            `}
            style={{
              zIndex: (cardData.length - index) * 10,
              borderRight: `3px solid ${card.borderColor}`, 
            }}
            onClick={() => handleCardClick(index)}
          >
            <div className="flex h-full w-full relative">
              
              <div
                className={`flex flex-col justify-between h-full transition-all duration-500
                  ${expandedCard === index && index !== 0 ? "ml-[20px]" : ""}
                `}
              >
                
                <div className="text-[80px] font-light leading-[100%] tracking-normal text-[#f4e1e2] text-center capitalize">
                  {card.step}
                </div>
                
                <h2 className="text-[25px] font-bold leading-[32px] text-black font-[Anek Latin]"
                    style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {card.title}
                </h2>
              </div>

              {expandedCard === index && (
                <div className=" text-sm text-gray-600 self-end ">
                  {card.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverlappingCards;
