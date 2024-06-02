import { baseURL } from "@/api/configurations";
import Wrapper from "@/components/Wrapper";
import Subscribe from "@/components/sections/Subscribe";
import NewsPost from "@/components/sections/news/NewsPost";
import NewsTitle from "@/components/sections/news/NewsTitle";
import Image from "next/image";

export const getNewsBySlug = async slug => {
  const res = await fetch(`${baseURL}/news/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Page({ params }) {
  const currentNews = await getNewsBySlug(params.slug);
  const {
    author,
    date,
    title,
    img,
    short_text,
    first_subtitle,
    first_text,
    second_subtitle,
    second_text,
    quote,
    slug,
  } = currentNews;

  const newsTitle = { author, date, title, img, short_text };
  const newsPost = {
    first_subtitle,
    first_text,
    second_subtitle,
    second_text,
    quote,
  };

  return (
    <main className="w-full flex flex-col">
      <div className="w-full h-[750px] bg-slate-500 overflow-hidden">
        <Image src={img} className="w-full" width={1200} height={900} />
      </div>
      <section className="w-full">
        <Wrapper styles={"relative pt-[297px] pb-[80px]"}>
          <NewsTitle info={newsTitle} />
          <NewsPost info={newsPost} />
        </Wrapper>
      </section>
      <Subscribe />
    </main>
  );
}
