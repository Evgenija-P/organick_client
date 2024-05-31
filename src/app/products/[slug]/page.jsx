import HeroOtherPage from "@/components/sections/HeroOtherPages";
import Subscribe from "@/components/sections/Subscribe";

import hero_8 from "@/images/hero_8.png";
import hero_3 from "@/images/hero_3.png";
import hero_6 from "@/images/hero_6.png";
import hero_7 from "@/images/hero_7.png";

import AboutProduct from "@/components/sections/products/AboutProduct";
import { baseURL } from "@/api/configurations";

const ITEMS = [
  { id: "4", url: hero_7, style: "absolute bottom-10 left-[40%]", alt: "" },
  { id: "1", url: hero_6, style: "absolute top-[10px] left-[700px]", alt: "" },
  { id: "2", url: hero_8, style: "absolute top-[-45px] right-[520px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute bottom-[65px] right-[27%] rotate-[1deg]", alt: "" },
];

async function getProductBySlug(slug) {
  console.log(slug);
  const res = await fetch(`${baseURL}/product/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug);

  return (
    <main className="w-full">
      <HeroOtherPage title={product.title} items={ITEMS} className={"shop-details"} />
      <AboutProduct item={product} />
      <Subscribe />
    </main>
  );
}
