import HeroOtherPage from "@/components/sections/HeroOtherPages";
import hero_15 from "@/images/hero_15.png";
import hero_12 from "@/images/hero_12.png";
import hero_13 from "@/images/hero_13.png";
import hero_14 from "@/images/hero_14.png";

import Subscribe from "@/components/sections/Subscribe";
import News from "@/components/sections/News";

const ITEMS = [
  { id: "1", url: hero_15, style: "absolute top-[5%] right-[25%]", alt: "" },
  { id: "2", url: hero_12, style: "absolute top-[6%] left-[22%]", alt: "" },
  {
    id: "3",
    url: hero_13,
    style: "absolute bottom-[35%] left-[30%]",
    alt: "",
  },
  { id: "4", url: hero_14, style: "absolute bottom-[25%] right-[30%]", alt: "" },
];

export default async function NewsPage() {
  return (
    <main className="w-full">
      <HeroOtherPage title={"Останні новини"} items={ITEMS} className={"news"} />
      <News page={"news"} />
      <Subscribe />
    </main>
  );
}
