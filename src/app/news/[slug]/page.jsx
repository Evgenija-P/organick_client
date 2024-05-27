import Wrapper from "@/components/Wrapper";
import NewsTitle from "@/components/sections/news/NewsTitle";
import Image from "next/image";

export default function Page({ item }) {
  return (
    <main className="w-full flex flex-col">
      <div className="w-full h-[750px] bg-slate-500 overflow-hidden">
        <Image src={""} className="w-full" />
      </div>
      <section className="w-full">
        <Wrapper styles={"relative pt-[297px]"}>
          <NewsTitle />
        </Wrapper>
      </section>
    </main>
  );
}
