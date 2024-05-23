import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import Arrow from "@/icons/arrow.svg";

const LinkButton = ({ title, goTo, className }) => {
  return (
    <Link
      className={`w-[220px] h-[80px] px-3 py-7 text-white text-xl font-bold bg-main rounded-2xl flex items-center justify-center gap-x-2 hover:shadow-btnMain shop-link ${className}`}
      href={goTo}
    >
      {title}
      <Image src={Arrow} className="arrow-icon" alt="pointer icon, right arrow" />
    </Link>
  );
};

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  goTo: PropTypes.string.isRequired,
};

export default LinkButton;
