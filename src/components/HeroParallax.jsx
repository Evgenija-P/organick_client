"use client";

import { MouseParallax } from "react-just-parallax";
import hero_1 from "@/images/home/hero_1.png";
import hero_2 from "@/images/home/hero_2.png";
import hero_3 from "@/images/home/hero_3.png";
import hero_4 from "@/images/home/hero_4.png";
import hero_5 from "@/images/home/hero_5.png";

import Image from "next/image";

const ITEMS = [
  { id: "1", url: hero_1, style: "absolute bottom-[-45px] left-[-25px]", alt: "" },
  { id: "2", url: hero_2, style: "absolute top-[-15px] left-[-15px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute top-[30px] left-[50%]", alt: "" },
  { id: "4", url: hero_4, style: "absolute top-[-50px] right-[-85px]", alt: "" },
  { id: "5", url: hero_5, style: "absolute bottom-[-60px] right-[-15px]", alt: "" },
];
const HeroParallax = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      {ITEMS.map((el) => (
        <MouseParallax
          enableOnTouchDevice
          isAbsolutelyPositioned
          key={el.id}
          strength={(Math.floor(Math.random() * (30 - 7 + 1)) + 3) / 200}
          lerpEase={(Math.floor(Math.random() * (40 - 3 + 2)) + 6) / 1000}
        >
          <Image src={el.url} className={el.style} alt={el.alt} />
        </MouseParallax>
      ))}
    </div>
  );
};

export default HeroParallax;
