import CircleNumbers from "../CircleNumbers";
import Subtitle from "../Subtitle";
import TestimonialItem from "../TestimonialItem";
import Title from "../Title";
import Wrapper from "../Wrapper";

const ITEMS = [
  { text: "Organic", value: "100", type: "percent" },
  { text: "Active Product", value: "285", type: "plus" },
  { text: "Organic Orchards", value: "350", type: "plus" },
  { text: "Years of Farming", value: "25", type: "plus" },
];

const Testimonial = () => {
  return (
    <section className="w-full min-h-[1267px] pt-[176px] pb-[200px] bg-lite_pink bg-review bg-no-repeat relative">
      <Wrapper styles={""}>
        <div className="w-fit flex flex-col mb-10 mx-auto">
          <Title style={"mb-2 text-center"}>Testimonial</Title>
          <Subtitle>What Our Customer Saying?</Subtitle>
        </div>
        <div className="w-full mt-[60px] mx-auto">
          <TestimonialItem />
        </div>
        <div className="w-[80%] h-[1px] bg-[#E0E0E0] my-[102px] mx-auto" />
        <div className="w-full flex justify-around items-center mx-auto">
          {ITEMS.map(({ text, value, type }) => (
            <CircleNumbers text={text} value={value} key={value} type={type} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
