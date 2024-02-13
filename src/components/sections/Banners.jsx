import { Wrapper } from "../Wrapper";
import banner_1 from "@/images/banner_1.png";
import banner_2 from "@/images/banner_2.png";
import Banner from "../Banner";

const ITEMS = [
  { id: "1", title: "Natural!!", subtitle: "Get Garden Fresh Fruits", type: "white", style: "", url: banner_1 },
  { id: "2", title: "Offer!!", subtitle: "Get 10% off on Vegetables", type: "black", style: "", url: banner_2 },
];

const Banners = () => {
  return (
    <section className="w-full h-full pt-[154px] pb-[190px]">
      <Wrapper styles={"flex justify-around"}>
        {ITEMS.map((el) => (
          <Banner key={el.id + el.title} item={el} />
        ))}
      </Wrapper>
    </section>
  );
};

export default Banners;
