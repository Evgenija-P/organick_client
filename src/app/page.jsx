import About from "@/components/sections/About";
import Banners from "@/components/sections/Banners";
import Friendly from "@/components/sections/Friendly";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import Offer from "@/components/sections/Offer";
import OurProducts from "@/components/sections/OurProducts";
import Subscribe from "@/components/sections/Subscribe";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  console.clear();
  return (
    <main className="w-full">
      <Hero />
      <Banners />
      <About />
      <OurProducts />
      <Testimonial />
      <Offer />
      <Friendly />
      <News />
      <Subscribe />
    </main>
  );
}
