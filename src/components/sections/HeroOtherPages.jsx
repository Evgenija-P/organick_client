import HeroParallax from "../HeroParallax";
import Wrapper from "../Wrapper";

const HeroOtherPage = ({ items, title, className }) => {
  return (
    <section className={`w-full h-[450px] relative overflow-hidden ${className}`}>
      <HeroParallax items={items} />
      <Wrapper styles={"h-full"}>
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-7xl font-black">{title}</h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroOtherPage;
