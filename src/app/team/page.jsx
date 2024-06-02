import HeroOtherPage from "@/components/sections/HeroOtherPages";
import hero_8 from "@/images/hero_8.png";
import hero_9 from "@/images/hero_9.png";
import hero_10 from "@/images/hero_10.png";
import hero_11 from "@/images/hero_11.png";
import Subscribe from "@/components/sections/Subscribe";
import Teams from "@/components/sections/team/Teams";

const ITEMS = [
  { id: "1", url: hero_8, style: "absolute top-[-10px] right-[150px]", alt: "" },
  { id: "2", url: hero_9, style: "absolute top-[-15px] left-[120px]", alt: "" },
  {
    id: "3",
    url: hero_10,
    style: "absolute top-[55px] left-[480px]",
    alt: "",
  },
  { id: "4", url: hero_11, style: "absolute top-[85px] right-[480px]", alt: "" },
];

export default function TeamPage() {
  return (
    <main className="w-full">
      <HeroOtherPage title={"Наша команда"} items={ITEMS} className={"team"} />
      <Teams />
      <Subscribe />
    </main>
  );
}
