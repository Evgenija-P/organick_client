import Subtitle from "../Subtitle";
import Title from "../Title";
import Wrapper from "../Wrapper";
import Image from "next/image";
import Food from "@/icons/food.svg";
import Quality from "@/icons/quality.svg";
import LinkButton from "../UI/LinkButton";

const About = () => {
  return (
    <section className="w-full min-h-[1067px] pt-[186px] pb-[200px] bg-lite_pink bg-about bg-no-repeat bg-left relative">
      <Wrapper styles={"flex justify-around"}>
        <div className="w-[702px] absolute top-[186px] right-[15%] flex flex-col">
          <Title style={"mb-2"}>About Us</Title>
          <Subtitle>We Believe in Working Accredited Farmers</Subtitle>
          <p className="mt-4 mb-[46px] text-lg">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley.
          </p>

          <ul className="flex flex-col gap-y-[30px] w-[562px]">
            <li className="flex gap-x-5">
              <div className="w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]">
                <Image src={Food} className="" alt="icon that depicts organic food" />
              </div>

              <ul className="flex flex-col gap-y-2 w-[440px]">
                <li className="text-main text-[25px] font-extrabold">Organic Foods Only</li>
                <li className="text-gray text-[18px]">
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </li>
              </ul>
            </li>
            <li className="flex gap-x-5">
              <div className="w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]">
                <Image src={Quality} className="" alt="icon depicting food delivery" />
              </div>
              <ul className="flex flex-col gap-y-2 w-[440px]">
                <li className="text-main text-[25px] font-extrabold">Quality Standards</li>
                <li className="text-gray text-[18px]">
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </li>
              </ul>
            </li>

            <LinkButton title="Read More" goTo="/about" style="main" />
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
