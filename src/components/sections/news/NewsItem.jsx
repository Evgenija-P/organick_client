import { formatDate } from "@/utils/dateFormatting";
import Image from "next/image";
import LinkButton from "../../UI/LinkButton";
import authorImage from "@/images/news/author.png";

const NewsItem = ({ item }) => {
  const { author, title, img, date, slug } = item;
  const { day, month } = formatDate(date);

  return (
    <article className="w-[677px] h-[592px] rounded-[30px] relative">
      <div className="w-[82px] h-[82px] bg-white rounded-full flex flex-col items-center justify-center absolute top-11 left-8">
        <p className="text-[25px] font-extrabold leading-none">{day}</p>
        <p className="text-xl font-extrabold leading-none">{month}</p>
      </div>
      <Image
        src={img}
        className="w-[677px] h-[524px] rounded-[30px] object-cover"
        width={667}
        height={524}
        alt="icon that depicts organic food"
      />

      <div className="w-[612px] h-[330px] py-12 px-[57px] flex flex-col rounded-[30px] bg-white mx-auto drop-shadow-news absolute bottom-0 left-1/2 -translate-x-1/2">
        <p className="text-lg mb-4 flex gap-x-2">
          <Image src={authorImage} width={22} height={20} /> {author}
        </p>
        <p className="text-[25px] font-extrabold">{title}</p>
        <LinkButton
          title="Читати далі"
          goTo={`/news/${slug}`}
          style="yellow"
          className="w-fit px-12 mt-auto"
        />
      </div>
    </article>
  );
};

export default NewsItem;
