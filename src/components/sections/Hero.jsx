import HeroParallax from "../HeroParallax";
import Title from "../Title";
import Wrapper from "../Wrapper";
import hero_1 from "@/images/hero_1.png";
import hero_2 from "@/images/hero_2.png";
import hero_3 from "@/images/hero_3.png";
import hero_4 from "@/images/hero_4.png";
import hero_5 from "@/images/hero_5.png";

const ITEMS = [
  { id: "1", url: hero_1, style: "absolute bottom-[-45px] left-[-25px]", alt: "" },
  { id: "2", url: hero_2, style: "absolute top-[-15px] left-[-15px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute top-[30px] left-[50%]", alt: "" },
  { id: "4", url: hero_4, style: "absolute top-[-50px] right-[-85px]", alt: "" },
  { id: "5", url: hero_5, style: "absolute bottom-[-60px] right-[-15px]", alt: "" },
];

const Hero = () => {
  return (
    <section className="w-full h-[900px] hero relative overflow-hidden">
      <HeroParallax items={ITEMS} />
      <Wrapper styles={"h-full"}>
        <div className="w-[530px] h-fit mt-[245px]">
          <Title style={"mb-2"}>100% Натуральні продукти</Title>

          <h1 className="text-7xl font-black">Найкращий вибір для Вашого здоров'я</h1>
          <button></button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
