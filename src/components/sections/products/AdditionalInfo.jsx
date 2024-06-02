"use client";

import { useState } from "react";

const activeButton = "bg-main text-white";
const notActiveButton = "bg-[#EFF6F1] text-main";

const AdditionalInfo = ({ full, additional }) => {
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <div className="w-full mx-auto mt-[100px]">
      <div className="w-full flex items-center justify-center gap-x-10">
        <button
          onClick={() => setCurrentSection(1)}
          className={`w-fit px-[57px] py-[23px] rounded-2xl font-bold ${
            currentSection === 1 ? activeButton : notActiveButton
          }`}
        >
          Опис продукту
        </button>
        <button
          onClick={() => setCurrentSection(2)}
          className={`w-fit px-[57px] py-[23px] rounded-2xl font-bold ${
            currentSection === 2 ? activeButton : notActiveButton
          }`}
        >
          Додаткова інформація
        </button>
      </div>
      {currentSection === 1 ? (
        <p className="w-[80%] text-center text-lg text-grey my-[80px] mx-auto">{full}</p>
      ) : (
        <p className="w-[80%] text-center text-lg text-grey my-[80px] mx-auto">{additional}</p>
      )}
    </div>
  );
};

export default AdditionalInfo;
