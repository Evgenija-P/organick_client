import Title from "@/components/Title";
import Wrapper from "../../Wrapper";
import Subtitle from "@/components/Subtitle";
import team from "@/data/team.json";
import TeamItem from "@/components/TeamItem";

const Team = () => {
  const limited = team.slice(0, 3);

  return (
    <section className="w-full h-[1430px] pt-[127px] pb-[202px] relative overflow-hidden">
      <Wrapper styles={"h-full"}>
        <div className="w-[852px] flex flex-col mb-11 mx-auto">
          <Title style={"mb-2 text-center"}>Team</Title>
          <Subtitle className={"text-center"}>Our Organic Experts</Subtitle>
          <h3 className="w-full text-lg text-grey text-center mt-4">
            These people – our team of experts – grow and sell organic vegetables, greens, nuts,
            fruits, and grains. Their knowledge and experience ensure the highest quality of our
            products.
          </h3>
        </div>
        <div className="w-full flex items-center justify-center gap-x-5">
          {limited.map(el => (
            <TeamItem key={el.name} item={el} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Team;
