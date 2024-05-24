import Image from "next/image";
import Title from "@/components/Title";
import Wrapper from "../../Wrapper";
import Subtitle from "@/components/Subtitle";

const About = () => {
  return (
    <section className="w-full h-[1000px] relative overflow-hidden">
      <Wrapper styles={"h-full flex"}>
        {/* <Image /> */}
        <div>
          <Title>About Us</Title>
          <Subtitle>
            We do Creative <br /> Things for Success
          </Subtitle>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
