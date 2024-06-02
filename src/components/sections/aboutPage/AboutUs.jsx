import Title from "@/components/Title";
import Wrapper from "../../Wrapper";
import Subtitle from "@/components/Subtitle";
import Tractor from "@/icons/Tractor.svg";
import Factory from "@/icons/factory.svg";
import Image from "next/image";
import LinkButton from "@/components/UI/LinkButton";

const AboutUs = () => {
  return (
    <section className="w-full h-[1000px] about-hero_section pt-[163px] relative overflow-hidden">
      <Wrapper styles={"h-full flex"}>
        <div className="w-[675px] ml-auto">
          <Title>Про нас</Title>
          <Subtitle>
            Ми робимо творчі <br /> речі для успіху
          </Subtitle>

          <p className="text-grey text-lg mb-4 mt-5">
            Ми завжди шукаємо можливості для розвитку і розвинення нашої справи. Інколи перед нами
            постають не тільки технологічні, а й творчі питання, як то, наприклад, як краще
            сегментувати наші поля та сади, аби це було не тільки технічно, але й естетично.
          </p>

          <p className="text-grey text-lg mb-12">
            Шукаючи нові підходи для покращення та оптимізації виробництва ми часто винаходимо нові
            підходи, які ще ніким не застосовувались. То ж наша робота не тільки в використанні
            існуючих рішень, а й в реалізації нових ідей та креативності.
          </p>

          <div className="w-full flex items-center justify-between mb-[58px]">
            <div className="w-[43%] flex gap-x-1">
              <Image src={Tractor} className="" alt="icon that depicts tractor" />
              <p className="text-[25px] font-medium leading-none">
                Сучасне сільськогосподарське обладнання
              </p>
            </div>
            <div className="w-[43%] flex gap-x-1">
              <Image src={Factory} className="" alt="icon that depicts factory" />
              <p className="text-[25px] font-medium leading-none">
                Гормони росту не використовуються
              </p>
            </div>
          </div>

          <LinkButton title="Дізнатися більше" goTo="/services" style="main" />
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUs;
