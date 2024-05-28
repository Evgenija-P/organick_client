import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import Hero from "@/images/quality/hero.png";
import Photo_1 from "@/images/quality/photo_1.png";
import Photo_2 from "@/images/quality/photo_2.png";

const ITEMS = [
  {
    title: "Why Organic",
    img: Photo_1,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.",
  },
  {
    title: "Speciality Produce",
    img: Photo_2,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.",
  },
];

const QualityItem = () => {
  return (
    <section className={`w-full h-fit relative overflow-hidden`}>
      <Wrapper styles={"w-full h-fit pt-[162px] pb-[80px] flex flex-col gap-y-[70px]"}>
        <Image src={Hero} width={1400} height={742} alt="" className="mx-auto" />
        <div className="w-[936px] mx-auto flex flex-col">
          <h2 className="text-[50px] font-extrabold mb-8">Organic Store Services</h2>
          <p className="text-grey text-lg mb-[70px]">
            t is a long established fact that a reader will be distracted by the readable content of
            a page when looking a layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and auncover many web
            sites still in their infancy. Various versions have evolved over the years
          </p>
        </div>

        <ul className="w-[936px] mx-auto flex flex-col gap-y-7">
          {ITEMS.map((el, index) => (
            <li
              key={el.title}
              className={`w-full h-[252px] flex gap-x-5 items-center justify-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <Image
                src={el.img}
                width={379}
                height={252}
                alt={`Photo ${el.title}`}
                className="rounded-[20px] object-cover"
              />
              <div className="w-[573px] h-full rounded-[20px] bg-lite_pink py-[63px] px-[45px] flex flex-col ">
                <h4 className="text-[25px] font-medium">{el.title}</h4>
                <p className="text-lg text-grey">{el.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-[936px] mx-auto flex flex-col">
          <h2 className="text-[50px] font-extrabold mb-8">We farm your land</h2>
          <p className="text-grey text-lg mb-[60px]">
            t is a long established fact that a reader will be distracted by the readable content of
            a page when looking a layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and auncover many web
            sites still in their infancy. Various versions have evolved over the years
          </p>
          <ul className="flex items-center justify-between">
            <li className="w-[390px] h-[100px] rounded-[100px] py-[15px] px-[17px] flex gap-x-[25px] items-center bg-lite_pink">
              <p className="w-[69px] h-[69px] rounded-full flex items-center justify-center text-white text-[25px] font-bold bg-green">
                01
              </p>
              <p className="text-[25px] font-semibold">Best quality support</p>
            </li>
            <li className="w-[390px] h-[100px] rounded-[100px] py-[15px] px-[17px] flex gap-x-[25px] items-center bg-lite_pink">
              <p className="w-[69px] h-[69px] rounded-full flex items-center justify-center text-white text-[25px] font-bold bg-green">
                02
              </p>
              <p className="text-[25px] font-semibold">Money back guarantee</p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default QualityItem;
