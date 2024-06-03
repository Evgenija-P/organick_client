import { Fb, Insta, Pinterest, TikTok } from "@/icons/iconComponent";

const ITEMS = [
  { name: "Facebook", link: "https://www.facebook.com/", icon: <Fb /> },
  { name: "Instagram", link: "https://www.instagram.com/", icon: <Insta /> },
  { name: "TikTok", link: "https://www.tiktok.com/", icon: <TikTok /> },
  { name: "Pinterest", link: "https://ru.pinterest.com/", icon: <Pinterest /> },
];

const SocIconList = ({ page }) => {
  return (
    <div
      className={`flex gap-x-4 ${
        page === "contacts" ? "w-full mr-auto" : "w-full mx-auto justify-between"
      } `}
    >
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
