import Image from "next/image";
import { emailAddress, phoneNumber } from "@/utils/contacts";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Phone from "@/icons/tel.svg";
import Message from "@/icons/message.svg";

const Contacts = () => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <ul className="w-[352px] flex flex-col gap-y-4 mb-8">
      <li className="w-full h-[113px] rounded-[16px] p-3 flex items-center gap-x-2 border border-[#EEEEEE] shadow-contactItem">
        <div className="w-[89px] h-[89px] bg-[#F4F4F4] rounded-[11px] flex items-center justify-center">
          <Image src={Message} width={48} height={49} alt="символічне зображення поштового конверту" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg font-bold">Повідомлення:</p>
          <a href={`mailto^${emailAddress}`} className="text-lg">
            {emailAddress}
          </a>
        </div>
      </li>

      <li className="w-full h-[113px] rounded-[16px] p-3 flex items-center gap-x-2 border border-[#EEEEEE] shadow-contactItem">
        <div className="w-[89px] h-[89px] bg-[#F4F4F4] rounded-[11px] flex items-center justify-center">
          <Image src={Phone} width={48} height={49} alt="символічне зображення телефонної слуховки" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg font-bold">Дзвінки:</p>
          <a href={`tel:${phoneNumber}`} className="text-lg">
            {formattedPhoneNumber}
          </a>
        </div>
      </li>
    </ul>
  );
};

export default Contacts;
