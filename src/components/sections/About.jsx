import Subtitle from "../Subtitle";
import Title from "../Title";
import { Wrapper } from "../Wrapper";

const About = () => {
  return (
    <section className="w-full min-h-[1067px] pt-[186px] pb-[200px] bg-lite_pink bg-about bg-no-repeat bg-left relative">
      <Wrapper styles={"flex justify-around"}>
        <div className="w-[702px] absolute top-[186px] right-[15%] flex flex-col">
          <Title style={"mb-2"}>About Us</Title>
          <Subtitle>We Believe in Working Accredited Farmers</Subtitle>
          <p className="mt-4 mb=[46px] text-lg">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
