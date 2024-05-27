import Wrapper from "@/components/Wrapper";
import { emailAddress, phoneNumber } from "@/utils/contacts";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Image from "next/image";
import LocationImage from "@/images/contact/fruits.png";
import Phone from "@/icons/tel.svg";
import Message from "@/icons/message.svg";
import SocIconList from "@/components/SocIconList";

const ContactList = () => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <section className="w-full h-fit py-[200px]">
      <Wrapper styles={"flex items-center justify-between"}>
        <div className="w-[623px] h-[640px] rounded-[30px] overflow-hidden">
          <Image src={LocationImage} width={623} height={640} alt="" />
        </div>
        <div className="w-[702px] h-fit">
          <h3 className="text-main text-[50px] font-extrabold leading-none">
            We'd love to talk about how we can work together.
          </h3>
          <p className="text-lg text-grey mt-2 mb-8">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley.
          </p>

          <ul className="w-[352px] flex flex-col gap-y-4 mb-8">
            <li className="w-full h-[113px] rounded-[16px] p-3 flex items-center gap-x-2 border border-[#EEEEEE] shadow-contactItem">
              <div className="w-[89px] h-[89px] bg-[#F4F4F4] rounded-[11px] flex items-center justify-center">
                <Image src={Message} width={48} height={49} alt="" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-lg font-bold">Message:</p>
                <a href={`mailto^${emailAddress}`} className="text-lg">
                  {emailAddress}
                </a>
              </div>
            </li>

            <li className="w-full h-[113px] rounded-[16px] p-3 flex items-center gap-x-2 border border-[#EEEEEE] shadow-contactItem">
              <div className="w-[89px] h-[89px] bg-[#F4F4F4] rounded-[11px] flex items-center justify-center">
                <Image src={Phone} width={48} height={49} alt="" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <p className="text-lg font-bold">Call:</p>
                <a href={`tel:${phoneNumber}`} className="text-lg">
                  {formattedPhoneNumber}
                </a>
              </div>
            </li>
          </ul>

          <SocIconList />
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactList;
