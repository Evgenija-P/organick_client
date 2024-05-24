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
    title: "Return Policy",
    imgUrl: Return,
    text: "Simply dummy text of the printintypesetting industry.",
  },
  {
    title: "100% Fresh",
    imgUrl: Fresh,
    text: "Simply dummy text of the printintypesetting industry.",
  },
  {
    title: "Support 24/7",
    imgUrl: Support,
    text: "Simply dummy text of the printintypesetting industry.",
  },
  {
    title: "Secured Payment",
    imgUrl: Payment,
    text: "Simply dummy text of the printintypesetting industry.",
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
            <Title style={"mb-2"}>Why Choose us?</Title>
            <Subtitle>We do not buy from the open market & traders.</Subtitle>
            <p className="mt-[25px] text-grey text-lg mb-9">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry's standard the 1500s, when an unknown
            </p>
            <ul className="w-[486px] flex flex-col gap-y-3">
              <li className="w-[339px] h-[81px] bg-[#ECECEC] rounded-[49px] px-[27px] py-[29px] flex items-center">
                <div className="w-[19px] h-[19px] rounded-full border-4 border-green mr-2" />
                <p className="text-xl font-medium">100% Natural Product</p>
              </li>
              <li className="pl-[60px] text-lg text-grey">
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
              </li>
              <li className="w-[339px] h-[81px] bg-[#ECECEC] rounded-[49px] px-[27px] py-[29px] flex items-center">
                <div className="w-[19px] h-[19px] rounded-full border-4 border-green mr-2" />
                <p className="text-xl font-medium"> Increases resistance</p>
              </li>

              <li className="pl-[60px] text-lg text-grey">
                Simply dummy text of the printing and typesetting industry Lorem Ipsum
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
