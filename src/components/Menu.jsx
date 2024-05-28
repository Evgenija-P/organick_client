"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const MENU_ITEMS = [
  // { id: "1", name: "Home", link: "/", aria: "link to Home page" },
  { id: "2", name: "Про нас", link: "/about", aria: "link to about page" },
  { id: "3", name: "Магазин", link: "/products", aria: "link to shop page" },
  { id: "4", name: "Команда", link: "/team", aria: "link to team page" },
  { id: "5", name: "Новини", link: "/news", aria: "link to news page" },
  { id: "6", name: "Послуги", link: "/services", aria: "link to services page", icon: "" },
  { id: "7", name: "Контакти", link: "/contacts", aria: "link to contacts page" },
];

const Menu = ({ styles, section }) => {
  const pathname = usePathname();

  return (
    <nav className={`w-[564px] flex justify-between text-xl ${styles || ""}`}>
      {MENU_ITEMS.map(el => (
        <Link
          href={el.link}
          key={el.id + el.name}
          className={`${
            pathname === el.link && section === "header" && "text-green"
          } hover:text-green hover:underline hover:underline-offset-1`}
        >
          {el.name}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
