import Image from "next/image";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Location from "@/icons/Location.svg";

const LocationsList = () => {
  return (
    <div className="w-full h-[758px] bg-contactLocation py-[122px] pr-[102px] mt-[98px] rounded-[30px]">
      <div className="w-[514px] h-[514px] bg-white rounded-[30px] flex flex-col py-[46px] px-[53px] ml-auto">
        <Title>Location</Title>
        <Subtitle>Our farms</Subtitle>
        <p className="mt-2.5">
          Established fact that a reader will be distracted by the readable content of a page when
          looking a layout. The point of using.
        </p>
        <ul className="w-[312px] flex flex-col gap-y-8 mt-[19px]">
          <li className="flex gap-x-2">
            <Image src={Location} width={50} height={50} alt="" />
            <div>
              <p className="text-lg text-grey font-medium">New York, USA: </p>
              <p className="text-lg text-grey">299 Park Avenue New York, New York 10171</p>
            </div>
          </li>
          <li className="flex gap-x-2">
            <Image src={Location} width={50} height={50} alt="" />
            <div>
              <p className="text-lg text-grey font-medium">London, UK: </p>
              <p className="text-lg text-grey">30 Stamford Street, London SE1 9LQ</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationsList;
