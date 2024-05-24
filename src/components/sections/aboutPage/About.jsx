import Title from "@/components/Title";
import Wrapper from "../../Wrapper";
import Subtitle from "@/components/Subtitle";
import Tractor from "@/icons/Tractor.svg";
import Factory from "@/icons/factory.svg";
import Image from "next/image";
import LinkButton from "@/components/UI/LinkButton";

const About = () => {
  return (
    <section className="w-full h-[1000px] about-hero_section pt-[163px] relative overflow-hidden">
      <Wrapper styles={"h-full flex"}>
        <div className="w-[675px] ml-auto">
          <Title>About Us</Title>
          <Subtitle>
            We do Creative <br /> Things for Success
          </Subtitle>

          <p className="text-grey text-lg mb-4 mt-5">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley.
          </p>

          <p className="text-grey text-lg mb-12">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley.
          </p>

          <div className="w-full flex items-center justify-between mb-[58px]">
            <div className="w-[43%] flex gap-x-1">
              <Image src={Tractor} className="" alt="icon that depicts tractor" />
              <p className="text-[25px] font-medium leading-none">Modern Agriculture Equipment</p>
            </div>
            <div className="w-[43%] flex gap-x-1">
              <Image src={Factory} className="" alt="icon that depicts factory" />
              <p className="text-[25px] font-medium leading-none"> No growth hormones are used</p>
            </div>
          </div>

          <LinkButton title="Explore More" goTo="" style="main" />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
