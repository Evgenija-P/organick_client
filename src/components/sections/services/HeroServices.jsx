import Wrapper from "@/components/Wrapper";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import data from "@/data/services.json";
import Image from "next/image";
import LinkButton from "@/components/UI/LinkButton";

const HeroServices = () => {
  const firstThree = data.slice(0, 3);
  const nextThree = data.slice(3, 6);

  return (
    <section className="w-full h-fit py-[200px]">
      <Wrapper styles={""}>
        <div className="w-[800px] mx-auto">
          <Title style={"text-center"}>Що ми пропонуємо </Title>
          <Subtitle className={"text-center"}>
            Краще сільське господарство для кращого майбутнього
          </Subtitle>
        </div>
        <div className="w-[1400px] h-[900px] flex items-center justify-between services-section">
          <ul className="w-[396px] flex flex-col gap-y-[39px]">
            {firstThree.map(el => (
              <li key={el.id} className="text-right flex flex-col items-end">
                <Image src={el.img} width={42} height={42} />
                <p className="text-[25px] font-medium"> {el.title}</p>
                <p className="leading-[1.6]">{el.text}</p>
              </li>
            ))}
          </ul>
          <ul className="w-[396px] flex flex-col gap-y-[39px]">
            {nextThree.map(el => (
              <li key={el.id} className="flex flex-col">
                <Image src={el.img} width={42} height={42} />
                <p className="text-[25px] font-medium"> {el.title}</p>
                <p className="leading-[1.6]">{el.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <LinkButton
          title="Дізнатися більше"
          goTo="/services/standard"
          style="transparent"
          className="w-[220px] mx-auto"
        />
      </Wrapper>
    </section>
  );
};

export default HeroServices;
