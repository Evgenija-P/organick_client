import Subtitle from "../Subtitle";
import Title from "../Title";
import Wrapper from "../Wrapper";

const Testimonial = () => {
  return (
    <section className="w-full min-h-[1067px] pt-[176px] pb-[200px] relative">
      <Wrapper styles={""}>
        <div className="w-fit flex flex-col mb-10 mx-auto">
          <Title style={"mb-2 text-center"}>Testimonial</Title>
          <Subtitle>What Our Customer Saying?</Subtitle>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonial;
