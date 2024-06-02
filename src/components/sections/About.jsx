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
          <Title style={"mb-2"}>Про нас</Title>
          <Subtitle>Ми працюємо тільки з перевіреними фермерами</Subtitle>
          <p className="mt-4 mb-[46px] text-lg">
            Для нас дуже важливо дотримуватись всіх стандартів та вимог. То ж ми співпрацюємо тільки
            з тими фермами та садівниками, які перевірили самі. Якість продукції наших партнерів
            завжди під контролем!
          </p>

          <ul className="flex flex-col gap-y-[30px] w-[562px]">
            <li className="flex gap-x-5">
              <div className="w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]">
                <Image src={Food} className="" alt="icon that depicts organic food" />
              </div>

              <ul className="flex flex-col gap-y-2 w-[440px]">
                <li className="text-main text-[25px] font-extrabold">Тільки органічна продукція</li>
                <li className="text-gray text-[18px]">
                  Продукція, яка вирощена без хімікатів та ГМО.
                </li>
              </ul>
            </li>
            <li className="flex gap-x-5">
              <div className="w-[101px] h-[101px] flex items-center justify-center bg-white rounded-[20px]">
                <Image src={Quality} className="" alt="icon depicting food delivery" />
              </div>
              <ul className="flex flex-col gap-y-2 w-[440px]">
                <li className="text-main text-[25px] font-extrabold">Стандарти якості</li>
                <li className="text-gray text-[18px]">
                  Щорічне підтвердження кваліфікації наших партнерів.
                </li>
              </ul>
            </li>

            <LinkButton title="Дізнатися більше" goTo="/about" style="main" />
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
