import Wrapper from "@/components/Wrapper";
import Subscribe from "@/components/sections/Subscribe";
import QualityItem from "@/components/sections/standard/QualityItem";

export default function StandardPage() {
  return (
    <main className="w-full">
      <section className={`w-full h-[450px] relative overflow-hidden quality`}>
        <Wrapper styles={"h-full"}>
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-7xl font-black">Quality Standard</h1>
          </div>
        </Wrapper>
      </section>
      <QualityItem />
      <Subscribe />
    </main>
  );
}
