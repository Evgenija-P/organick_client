import { Fb, Insta, Pinterest, TikTok } from "@/icons/iconComponent";

const ITEMS = [
  { name: "Facebook", link: "#", icon: <Fb /> },
  { name: "Instagram", link: "#", icon: <Insta /> },
  { name: "TikTok", link: "#", icon: <TikTok /> },
  { name: "Pinterest", link: "#", icon: <Pinterest /> },
];

const SocIconList = ({ page }) => {
  return (
    <div className={`flex gap-x-4 ${page !== "home" ? "w-full mr-auto" : "w-fit mx-auto"} `}>
      {ITEMS.map(el => (
        <a
          key={el.name}
          className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-lite_green hover:bg-main soc-link"
          href={el.link}
          target="_blank"
        >
          {el.icon}
        </a>
      ))}
    </div>
  );
};

export default SocIconList;
