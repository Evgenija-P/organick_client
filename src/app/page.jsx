import { baseURL } from "@/api/configurations";
import About from "@/components/sections/About";
import Banners from "@/components/sections/Banners";
import Friendly from "@/components/sections/Friendly";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import Offer from "@/components/sections/Offer";
import OurProducts from "@/components/sections/OurProducts";
import Subscribe from "@/components/sections/Subscribe";
import Testimonial from "@/components/sections/Testimonial";
import productsStore from "@/store/productsStore";

async function getData() {
  const res = await fetch(`${baseURL}/product`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  productsStore.setProducts(res.data);
  return data;
}

export default async function Home() {
  const products = await getData();

  if (!Array.isArray(products)) {
    throw new Error("Expected products to be an array");
  }

  return (
    <main className="w-full">
      <Hero />
      <Banners />
      <About />
      <OurProducts products={products} />
      <Testimonial />
      <Offer />
      <Friendly />
      <News page={"home"} />
      <Subscribe />
    </main>
  );
}
