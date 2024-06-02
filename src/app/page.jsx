import { baseURL } from "@/api/configurations";
import { getAllProducts } from "@/api/productsAPI";
import About from "@/components/sections/About";
import Banners from "@/components/sections/Banners";
import Friendly from "@/components/sections/Friendly";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import Offer from "@/components/sections/Offer";
import OurProducts from "@/components/sections/OurProducts";
import Subscribe from "@/components/sections/Subscribe";
import Testimonial from "@/components/sections/Testimonial";

export default async function Home() {
  const products = await getAllProducts();

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
      <Offer products={products} />
      <Friendly />
      <News page={"home"} />
      <Subscribe />
    </main>
  );
}
