"use client";

import CountUp from "react-countup";

const CircleNumbers = ({ value, text, type }) => {
  return (
    <article className="w-[211px] h-[211px] rounded-full border-4 border-green flex items-center justify-center ">
      <div className="w-[189px] h-[189px] rounded-full bg-[#F1F1F1] flex flex-col items-center justify-center">
        <p className="text-[50px] font-extrabold text-main">
          <CountUp end={value} />
          {type === "percent" ? "%" : "+"}
        </p>
        <p className="text-lg text-main">{text}</p>
      </div>
    </article>
  );
};

export default CircleNumbers;
