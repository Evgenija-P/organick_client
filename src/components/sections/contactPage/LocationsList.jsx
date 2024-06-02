import Image from "next/image";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Location from "@/icons/Location.svg";

const LocationsList = () => {
  return (
    <div className="w-full h-[758px] bg-contactLocation py-[122px] pr-[102px] mt-[98px] rounded-[30px]">
      <div className="w-[514px] h-[514px] bg-white rounded-[30px] flex flex-col py-[46px] px-[53px] ml-auto">
        <Title>Локації</Title>
        <Subtitle>Наші ферми</Subtitle>
        <p className="mt-2.5">
          Приїздіть до наших ферм та садів! Ми чекаємо Вас за наступними адресами:
        </p>
        <ul className="w-[312px] flex flex-col gap-y-8 mt-[19px]">
          <li className="flex gap-x-2">
            <Image
              src={Location}
              width={50}
              height={50}
              alt="символічне зображення посилання на локацію"
            />
            <div>
              <p className="text-lg text-grey font-medium">Україна: </p>
              <p className="text-lg text-grey">Адреса саду, де вирощують найсмачніші фрукти!</p>
            </div>
          </li>
          <li className="flex gap-x-2">
            <Image
              src={Location}
              width={50}
              height={50}
              alt="символічне зображення посилання на локацію"
            />
            <div>
              <p className="text-lg text-grey font-medium">Україна: </p>
              <p className="text-lg text-grey">
                Адреса фермерських господарств, де вирощують найсмачніші овочі!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationsList;
