import HeroOtherPage from "@/components/sections/HeroOtherPages";
import hero_17 from "@/images/hero_17.png";
import hero_12 from "@/images/hero_12.png";
import hero_18 from "@/images/hero_18.png";
import hero_16 from "@/images/hero_16.png";
import Subscribe from "@/components/sections/Subscribe";
import ContactList from "@/components/sections/contactPage/ContactList";

const ITEMS = [
  { id: "1", url: hero_17, style: "absolute bottom-[25%] left-[35%]", alt: "" },
  { id: "2", url: hero_12, style: "absolute top-[10%] left-[30%]", alt: "" },
  {
    id: "3",
    url: hero_18,
    style: "absolute top-[10%] right-[30%]",
    alt: "",
  },
  { id: "4", url: hero_16, style: "absolute bottom-[15%] right-[35%]", alt: "" },
];

export default function Page() {
  return (
    <main className="w-full">
      <HeroOtherPage title={"Contact Us"} items={ITEMS} className={"contacts"} />
      <ContactList />
      <Subscribe />
    </main>
  );
}
