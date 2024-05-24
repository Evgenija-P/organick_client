import HeroParallax from "../../HeroParallax";
import Wrapper from "../../Wrapper";

import hero_8 from "@/images/hero_8.png";
import hero_3 from "@/images/hero_3.png";
import hero_6 from "@/images/hero_6.png";
import hero_7 from "@/images/hero_7.png";

const ITEMS = [
  { id: "4", url: hero_7, style: "absolute bottom-10 left-[40%]", alt: "" },
  { id: "1", url: hero_6, style: "absolute top-[10px] left-[700px]", alt: "" },
  { id: "2", url: hero_8, style: "absolute top-[-45px] right-[520px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute bottom-[65px] right-[27%] rotate-[1deg]", alt: "" },
];

const HeroDetails = ({ name }) => {
  return (
    <section className="w-full h-[450px] shop-details relative overflow-hidden">
      <HeroParallax items={ITEMS} />
      <Wrapper styles={"h-full"}>
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-7xl font-black">About the {name}</h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroDetails;
