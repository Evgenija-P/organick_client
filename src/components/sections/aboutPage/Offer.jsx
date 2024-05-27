import Image from "next/image";
import Title from "../../Title";
import Wrapper from "../../Wrapper";
import Subtitle from "../../Subtitle";
import Spicy from "@/images/about/spicy.png";
import Nuts from "@/images/about/nuts.png";
import Fruits from "@/images/about/fruits.png";
import Vegetable from "@/images/about/vegetable.png";

const ITEMS = [
  { title: "Spicy", img: Spicy },
  { title: "Nuts & Feesd", img: Nuts },
  { title: "Fruits", img: Fruits },
  { title: "Vegetable", img: Vegetable },
];

const Offer = () => {
  return (
    <section className="w-full py-[200px] bg-main relative">
      <Wrapper styles={""}>
        <div className="w-[852px] flex flex-col mb-11 mx-auto">
          <Title style={"mb-2 text-center"}>Offer</Title>
          <Subtitle className={"text-center text-white"}>What We Offer for You</Subtitle>
        </div>
        <ul className="flex gap-x-[21px] items-center">
          {ITEMS.map(el => (
            <li key={el.title} className="w-[335px] flex flex-col gap-y-6 rounded-[30px]">
              <Image
                src={el.img}
                className="bg-white rounded-[30px] object-fill h-[314px]"
                width={335}
                height={335}
                alt=""
              />
              <p className="text-[25px] text-white font-medium mx-auto">{el.title}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
};

export default Offer;
