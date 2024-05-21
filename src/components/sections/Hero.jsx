import HeroParallax from "../HeroParallax";
import Title from "../Title";
import Wrapper from "../Wrapper";

const Hero = () => {
  return (
    <section className="w-full h-[900px] hero relative overflow-hidden">
      <HeroParallax />
      <Wrapper styles={"h-full"}>
        <div className="w-[530px] h-fit mt-[245px]">
          <Title style={"mb-2"}>100% Natural Food</Title>

          <h1 className="text-7xl font-black">Choose the best healthier way of life</h1>
          <button></button>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
