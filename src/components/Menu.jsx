import Link from "next/link";
import React from "react";

const MENU_ITEMS = [
  { id: "1", name: "Home", link: "/", aria: "link to Home page" },
  { id: "2", name: "About", link: "/about", aria: "link to about page" },
  { id: "3", name: "Shop", link: "/shop", aria: "link to shop page" },
  { id: "4", name: "Team", link: "/team", aria: "link to team page" },
  { id: "5", name: "News", link: "/news", aria: "link to news page" },
  { id: "6", name: "Contacts", link: "/contacts", aria: "link to contacts page" },
  { id: "7", name: "Other", link: "/other", aria: "link to other page", icon: "" },
];

const Menu = ({ styles }) => {
  return (
    <nav className={`w-[564px] flex justify-between text-xl ${styles || ""}`}>
      {MENU_ITEMS.map(el => (
        <Link href={el.link} key={el.id + el.name}>
          {el.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
