import Subscribe from "@/components/sections/Subscribe";
import Products from "@/components/sections/shopPage/Products";

import hero_8 from "@/images/hero_8.png";
import hero_3 from "@/images/hero_3.png";
import hero_6 from "@/images/hero_6.png";
import hero_7 from "@/images/hero_7.png";
import HeroOtherPage from "@/components/sections/HeroOtherPages";

const ITEMS = [
  { id: "1", url: hero_6, style: "absolute bottom-[50px] left-[700px]", alt: "" },
  { id: "2", url: hero_8, style: "absolute top-[5px] left-[520px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute top-[-25px] left-[52%] rotate-[89deg]", alt: "" },
  { id: "4", url: hero_7, style: "absolute bottom-10 right-[35%]", alt: "" },
];

export default function ShopPage() {
  return (
    <main className="w-full">
      <HeroOtherPage items={ITEMS} title={"Shop"} className={"shop"} />
      <Products />
      <Subscribe />
    </main>
  );
}
