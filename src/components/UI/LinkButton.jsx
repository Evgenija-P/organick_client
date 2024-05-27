"use client";

import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/icons/arrow.svg";
import { useRouter } from "next/navigation";

const linksStyle = {
  main: "w-[220px] bg-main text-white hover:shadow-btnMain",
  yellow: "bg-yellow text-main hover:shadow-btnYellow",
  transparent: "outline outline-main text-main hover:outline-none hover:text-white hover:bg-main",
};

const LinkButton = ({ title, goTo, className, style, page }) => {
  const currentStyle = `${linksStyle[style]} ${className}`;
  const router = useRouter();

  const handleClick = e => {
    if (page === "notfound") {
      e.preventDefault();
      router.replace("/", undefined, { shallow: true });
    } else {
    }
  };

  return (
    <Link
      className={`h-[80px] px-3 py-7 text-xl font-bold rounded-2xl flex items-center justify-center gap-x-2 shop-link ${currentStyle}`}
      href={goTo}
      onClick={handleClick}
    >
      {title}
      <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-[#335B6B]`}>
        <Image src={Arrow} className="arrow-icon" alt="pointer icon, right arrow" />
      </div>
    </Link>
  );
};

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  className: PropTypes.string,
  goTo: PropTypes.string.isRequired,
  page: PropTypes.string,
};

export default LinkButton;
