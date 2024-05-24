import Image from "next/image";
import Link from "next/link";
import logo from "@/images/Logo.png";

const Logo = ({ styles }) => {
  return (
    <Link className={` w-fit flex gap-x-2 items-center ${styles || ""}`} href="/">
      <Image src={logo} alt="Logo" width={36} height={54} />
      <h2 className="font-bold text-[38px]">Organic</h2>
    </Link>
  );
};

export default Logo;
