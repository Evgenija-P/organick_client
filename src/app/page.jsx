import About from "@/components/sections/About";
import Banners from "@/components/sections/Banners";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Banners />
      <About />
    </main>
  );
}
