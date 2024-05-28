import HeroOtherPage from "@/components/sections/HeroOtherPages";
import Subscribe from "@/components/sections/Subscribe";

import hero_8 from "@/images/hero_8.png";
import hero_3 from "@/images/hero_3.png";
import hero_6 from "@/images/hero_6.png";
import hero_7 from "@/images/hero_7.png";

import products from "@/data/products";
import AboutProduct from "@/components/sections/products/AboutProduct";

const ITEMS = [
  { id: "4", url: hero_7, style: "absolute bottom-10 left-[40%]", alt: "" },
  { id: "1", url: hero_6, style: "absolute top-[10px] left-[700px]", alt: "" },
  { id: "2", url: hero_8, style: "absolute top-[-45px] right-[520px]", alt: "" },
  { id: "3", url: hero_3, style: "absolute bottom-[65px] right-[27%] rotate-[1deg]", alt: "" },
];

export default function ProductPage({ params }) {
  const currentProduct = products.find(product => product.slug === params.slug);
  console.log(currentProduct);

  return (
    <main className="w-full">
      <HeroOtherPage title={currentProduct.title} items={ITEMS} className={"shop-details"} />
      <AboutProduct item={currentProduct} />
      <Subscribe />
    </main>
  );
}
