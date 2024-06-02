import Title from "@/components/Title";
import Wrapper from "../../Wrapper";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import ChooseImage from "@/images/about/choose.png";
import Return from "@/images/about/return.png";
import Fresh from "@/images/about/fresh.png";
import Support from "@/images/about/support.png";
import Payment from "@/images/about/payment.png";

const ITEMS = [
  {
    title: "Повернення",
    imgUrl: Return,
    text: "Не задовільнила якість? Просто поверніть товар!",
  },
  {
    title: "100% Свіжості",
    imgUrl: Fresh,
    text: "Гарантуємо, що наша продукція свіжозібрана.",
  },
  {
    title: "Підтримка 24/7",
    imgUrl: Support,
    text: "Проконсультуємо з будь-якого питання.",
  },
  {
    title: "Надійність оплати",
    imgUrl: Payment,
    text: "Всі оплати захищені банком.",
  },
];

const ChooseItem = ({ item }) => {
  return (
    <article className="w-[257px] h-[335px] pt-[56px] px-6 flex flex-col gap-y-4 items-center bg-white rounded-[30px]">
      <Image src={item.imgUrl} width={95} height={95} />
      <p className="text-[25px] font-extrabold text-center">{item.title}</p>
      <p className="text-lg text-grey text-center">{item.text}</p>
    </article>
  );
};

const Choose = () => {
  return (
    <section className="w-full h-[1430px] py-[190px] bg-lite_pink relative overflow-hidden">
      <Wrapper styles={"h-full"}>
        <div className="w-full flex gap-x-[50px] justify-between items-center mb-[90px]">
          <div className="w-[671px]">
            <Title style={"mb-2"}>Чому нас обирають?</Title>
            <Subtitle>Ми не купуємо продукцію, а вирощуємо.</Subtitle>
            <p className="mt-[25px] text-grey text-lg mb-9">
              То ж Ви можете бути цілком впевнені у якості та корисності наших продуктів. Ми завжди
              дбаємо про те, аби кожен продукт приносив максимум задоволення та користі, а при його
              вирощуванні було задіяно найкращу техніку та тільки органічну сировину.
            </p>
            <ul className="w-[650px] flex flex-col gap-y-3">
              <li className="w-[339px] h-[81px] bg-[#ECECEC] rounded-[49px] px-[27px] py-[29px] flex items-center">
                <div className="w-[19px] h-[19px] rounded-full border-4 border-green mr-2" />
                <p className="text-xl font-medium">100% Натуральні продукти</p>
              </li>
              <li className="pl-[60px] text-lg text-grey">
                Натуральна сировина, натуральні добрива, дотримання технологій вирощування, поливу
                та зберігання.
              </li>
              <li className="w-[339px] h-[81px] bg-[#ECECEC] rounded-[49px] px-[27px] py-[29px] flex items-center">
                <div className="w-[19px] h-[19px] rounded-full border-4 border-green mr-2" />
                <p className="text-xl font-medium">Укріплення імунної системи</p>
              </li>

              <li className="pl-[60px] text-lg text-grey">
                Наші продукти містять вітаміни, мінерали та антиоксиданти, що сприяє зміцненню
                імунної системи.
              </li>
            </ul>
          </div>
          <div className="w-fit mt-[22px] rounded-[30px] overflow-hidden">
            <Image
              src={ChooseImage}
              className=""
              alt="icon that depicts organic food"
              width={678}
              height={579}
            />
          </div>
        </div>

        <div className="w-full flex gap-x-[30px] justify-center">
          {ITEMS.map(el => (
            <ChooseItem item={el} key={el.title} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Choose;
