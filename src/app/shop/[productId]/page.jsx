import Subscribe from "@/components/sections/Subscribe";
import HeroDetails from "@/components/sections/shopPage/HeroDetails";

export default function ProductId({ params }) {
  return (
    <main className="w-full">
      <HeroDetails name={params.productId} />
      <Subscribe />
    </main>
  );
}

/* <h1>Hello, {params.productId} Page!</h1>; */
