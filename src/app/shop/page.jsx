import Subscribe from "@/components/sections/Subscribe";
import Hero from "@/components/sections/shopPage/Hero";
import Products from "@/components/sections/shopPage/Products";

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <Products />
      <Subscribe />
    </main>
  );
}
