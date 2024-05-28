import Wrapper from "@/components/Wrapper";
import Subscribe from "@/components/sections/Subscribe";
import NewsPost from "@/components/sections/news/NewsPost";
import NewsTitle from "@/components/sections/news/NewsTitle";
import Image from "next/image";

export default function Page({ item }) {
  return (
    <main className="w-full flex flex-col">
      <div className="w-full h-[750px] bg-slate-500 overflow-hidden">
        <Image src={""} className="w-full" />
      </div>
      <section className="w-full">
        <Wrapper styles={"relative pt-[297px] pb-[80px]"}>
          <NewsTitle />
          <NewsPost />
        </Wrapper>
      </section>
      <Subscribe />
    </main>
  );
}
