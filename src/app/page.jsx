import About from "@/components/sections/About";
import Banners from "@/components/sections/Banners";
import Hero from "@/components/sections/Hero";
import OurProducts from "@/components/sections/OurProducts";
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
    </main>
  );
}
