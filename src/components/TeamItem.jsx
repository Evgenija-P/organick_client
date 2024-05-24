import { Fb, Insta, TikTok } from "@/icons/iconComponent";
import { yellowtail } from "@/app/fonts";
import Image from "next/image";

const ICONS = {
  fb: Fb,
  insta: Insta,
  tiktok: TikTok,
};

const TeamItem = ({ item }) => {
  const { name, position, img, socLinks } = item;

  return (
    <article className="w-[449px] h-[615px] flex flex-col rounded-[30px] bg-lite_pink hover:bg-white overflow-hidden hover:drop-shadow-team">
      <Image src={img} width={449} height={486} />
      <div className="w-full h-[130px] py-[35px] px-7 flex items-center justify-between">
        <div>
          <p className="text-[25px] font-medium">{name}</p>
          <p className={`${yellowtail.className} text-green text-[22px]`}>{position}</p>
        </div>
        <div className="flex gap-x-4 items-center">
          {Object.keys(socLinks).map(key => {
            const IconComponent = ICONS[key];
            return (
              <a
                href={socLinks[key]}
                key={key}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-lite_green hover:bg-main soc-link"
                target="_blank"
              >
                {IconComponent && <IconComponent />}
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default TeamItem;
