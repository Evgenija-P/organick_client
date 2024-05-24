import HeroParallax from "../../HeroParallax";
import Wrapper from "../../Wrapper";
import hero_1 from "@/images/hero_1.png";
import hero_2 from "@/images/hero_8.png";
import hero_3 from "@/images/hero_3.png";
import hero_4 from "@/images/hero_6.png";
import hero_5 from "@/images/hero_7.png";

const ITEMS = [
  { id: "1", url: hero_1, style: "absolute bottom-[-145px] left-[330px]", alt: "" },
  { id: "2", url: hero_2, style: "absolute top-[5px] left-[680px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute top-[-25px] left-[57%] rotate-[85deg]", alt: "" },
  { id: "4", url: hero_4, style: "absolute bottom-[30px] right-[60%]", alt: "" },
  { id: "5", url: hero_5, style: "absolute bottom-10 right-[45%]", alt: "" },
];

const Hero = () => {
  return (
    <section className="w-full h-[450px] about relative overflow-hidden">
      <HeroParallax items={ITEMS} />
      <Wrapper styles={"h-full"}>
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-7xl font-black">About Us</h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
