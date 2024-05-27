import authorImage from "@/images/news/author.png";
import Image from "next/image";

const NewsTitle = () => {
  return (
    <div className="w-[1400px] h-[385px] py-[76px] px-[82px] rounded-[30px] bg-white drop-shadow-newsTitle absolute top-[-190px] left-1/2 -translate-x-1/2">
      <div className="flex gap-x-[30px]">
        <p className="w-fit">
          <span className="text-lg font-bold">Posted On:</span> January 6, 2022
        </p>
        <p className="text-lg mb-4 flex gap-x-2">
          <Image src={authorImage} width={22} height={20} /> By Rachi Card
        </p>
      </div>
      <h2 className="text-[70px] font-extrabold">Research More Organic Food</h2>
      <p className="text-lg text-grey">
        Established fact that a reader will be distracted by the readable content of a page when
        looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed{" "}
      </p>
    </div>
  );
};

export default NewsTitle;
