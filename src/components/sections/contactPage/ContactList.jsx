import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import LocationImage from "@/images/contact/fruits.png";
import SocIconList from "@/components/SocIconList";
import LocationsList from "@/components/sections/contactPage/LocationsList";

import ContactForm from "@/components/sections/contactPage/ContactForm";
import Contacts from "./Contacts";

const ContactList = () => {
  return (
    <section className="w-full h-fit pt-[200px]">
      <Wrapper styles={""}>
        <div className="flex items-center justify-between">
          <Image
            src={LocationImage}
            width={623}
            height={640}
            alt=""
            className="w-[623px] h-[640px] rounded-[30px] overflow-hidden"
          />

          <div className="w-[702px] h-fit">
            <h3 className="text-main text-[50px] font-extrabold leading-none">
              We'd love to talk about how we can work together.
            </h3>
            <p className="text-lg text-grey mt-2 mb-8">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley.
            </p>
            <Contacts />
            <SocIconList />
          </div>
        </div>
        <LocationsList />

        <ContactForm />
      </Wrapper>
    </section>
  );
};

export default ContactList;
