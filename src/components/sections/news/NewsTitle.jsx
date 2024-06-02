import authorImage from "@/images/news/author.png";
import Image from "next/image";

const NewsTitle = ({ info }) => {
  return (
    <div className="w-[1400px] h-[385px] py-[76px] px-[82px] rounded-[30px] bg-white drop-shadow-newsTitle absolute top-[-190px] left-1/2 -translate-x-1/2">
      <div className="flex gap-x-[30px]">
        <p className="w-fit">
          <span className="text-lg font-bold">Опубліковано:</span> {info.date}
        </p>
        <p className="text-lg mb-4 flex gap-x-2">
          <Image src={authorImage} width={22} height={20} /> Автор: {info.author}
        </p>
      </div>
      <h2 className="text-[50px] font-extrabold leading-none mb-10">{info.title}</h2>
      <p className="text-lg text-grey">{info.short_text}</p>
    </div>
  );
};

export default NewsTitle;
