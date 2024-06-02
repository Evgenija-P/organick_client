import Title from "@/components/Title";
import Wrapper from "../../Wrapper";
import Subtitle from "@/components/Subtitle";
import team from "@/data/team.json";
import TeamItem from "@/components/sections/team/TeamItem";

const Teams = ({ page }) => {
  const limited = page === "about" ? team.slice(0, 3) : team;

  return (
    <section className="w-full pt-[127px] pb-[150px] relative overflow-hidden">
      <Wrapper styles={"h-full"}>
        <div className="w-[852px] flex flex-col mb-11 mx-auto">
          <Title style={"mb-2 text-center"}>Команда</Title>
          <Subtitle className={"text-center"}>Наші експерти</Subtitle>
          <h3 className="w-full text-lg text-grey text-center mt-4">
            Ці люди – наша команда експертів – вирощують і продають органічні овочі, зелень, горіхи,
            фрукти, зерна. Їхні знання та досвід забезпечують найвищу якість нашого продуктів.
          </h3>
        </div>
        <div className="w-full grid grid-cols-3 gap-x-5 gap-y-10">
          {limited.map(el => (
            <TeamItem key={el.name} item={el} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Teams;
