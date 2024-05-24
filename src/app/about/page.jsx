import Subscribe from "@/components/sections/Subscribe";
import About from "@/components/sections/aboutPage/About";
import Choose from "@/components/sections/aboutPage/Choose";
import Hero from "@/components/sections/aboutPage/Hero";
import Offer from "@/components/sections/aboutPage/Offer";
import Team from "@/components/sections/aboutPage/Team";

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Choose />
      <Team />
      <Offer />
      <Subscribe />
    </main>
  );
}
