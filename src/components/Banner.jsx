import { pacifico } from "@/app/fonts";
import Image from "next/image";

const Banner = ({ item }) => {
  return (
    <div className="w-[640px] h-[367px] rounded-[30px] overflow-hidden relative">
      <Image
        src={item.url}
        className="object-cover object-top h-full"
        alt={`banner about our services ${item.title}`}
      />
      <div className="w-[263px] flex flex-col absolute top-[109px] left-[55px]">
        <span
          className={`text-4xl ${pacifico.className} mb-[5px] ${
            item.type === "white" ? "text-white" : "text-green"
          }`}
        >
          {item.title}
        </span>
        <span
          className={`text-[40px] leading-none font-black ${
            item.type === "white" ? "text-white" : "text-main"
          }`}
        >
          {item.subtitle}
        </span>
      </div>
    </div>
  );
};

export default Banner;
