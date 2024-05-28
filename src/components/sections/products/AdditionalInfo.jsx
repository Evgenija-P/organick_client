"use client";

import { useState } from "react";

const AdditionalInfo = ({ about, details }) => {
  const [currentSection, setCurrentSection] = useState(1);
  return (
    <div className="w-full mx-auto mt-[100px]">
      <div className="w-full flex items-center justify-center gap-x-10">
        <button onClick={() => setCurrentSection(1)}>about</button>
        <button onClick={() => setCurrentSection(2)}>details</button>
      </div>
      {currentSection === 1 ? (
        <p className="w-[80%] text-center text-lg text-grey my-[80px] mx-auto">
          ABOUT_______ Simply dummy text of the printing and typesetting industry. Lorem had ceased
          to been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley.
        </p>
      ) : (
        <p className="w-[80%] text-center text-lg text-grey my-[80px] mx-auto">
          DETAILS________ dummy text of the printing and typesetting industry. Lorem had ceased to
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley.
        </p>
      )}
    </div>
  );
};

export default AdditionalInfo;
