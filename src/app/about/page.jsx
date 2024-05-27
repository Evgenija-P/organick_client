import Subscribe from "@/components/sections/Subscribe";
import AboutUs from "@/components/sections/aboutPage/AboutUs";
import Choose from "@/components/sections/aboutPage/Choose";
import Offer from "@/components/sections/aboutPage/Offer";
import Teams from "@/components/Teams";

import hero_1 from "@/images/hero_1.png";
import hero_2 from "@/images/hero_8.png";
import hero_3 from "@/images/hero_3.png";
import hero_4 from "@/images/hero_6.png";
import hero_5 from "@/images/hero_7.png";
import HeroOtherPage from "@/components/sections/HeroOtherPages";

const ITEMS = [
  { id: "1", url: hero_1, style: "absolute bottom-[-145px] left-[330px]", alt: "" },
  { id: "2", url: hero_2, style: "absolute top-[5px] left-[680px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute top-[-25px] left-[57%] rotate-[85deg]", alt: "" },
  { id: "4", url: hero_4, style: "absolute bottom-[30px] right-[60%]", alt: "" },
  { id: "5", url: hero_5, style: "absolute bottom-10 right-[45%]", alt: "" },
];

export default function Page() {
  return (
    <main className="w-full">
      <HeroOtherPage items={ITEMS} title={"About Us"} className={"about"} />
      <AboutUs />
      <Choose />
      <Teams page={"about"} />
      <Offer />
      <Subscribe />
    </main>
  );
}
