import { emailAddress, phoneNumber } from "@/utils/contacts";
import Logo from "../UI/Logo";
import SocIconList from "../SocIconList";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import Menu from "../Menu";
import Wrapper from "../Wrapper";

const Footer = () => {
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <footer className="w-full min-h-[495px]">
      <Wrapper styles={" h-[335px] flex"}>
        <div className="w-[30%] mr-[50px] text-right">
          <h4 className="text-[30px] font-bold mb-8">Contact Us</h4>
          <ul>
            <li className="mb-2">
              <p className="text-lg font-bold">Email:</p>
              <a href={`mailto^${emailAddress}`} className="text-lg">
                {emailAddress}
              </a>
            </li>
            <li className="mb-2">
              <p className="text-lg font-bold">Phone:</p>
              <a href={`tel:${phoneNumber}`} className="text-lg">
                {formattedPhoneNumber}
              </a>
            </li>
            <li>
              <address className="not-italic">
                <p className="text-lg font-bold">Address</p>
                <a href="https://maps.app.goo.gl/1Lg4QtkJPxStSHMj8" className="text-lg">
                  Peremohy street, 20, Zabiria, Kiev region, 08145
                </a>
              </address>
            </li>
          </ul>
        </div>
        <div className="w-[30%] px-10 border-x border-lite_gray flex flex-col mx-auto">
          <Logo styles={"mx-auto mb-6"} />
          <h4 className="text-lg mb-12 text-center">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
            text of the printing
          </h4>
          <SocIconList />
        </div>
        <div className="w-[30%] ml-[50px]">
          <h4 className="text-[30px] font-bold mb-8">Pages</h4>
          <Menu styles={"flex-col gap-y-2 text-lg"} />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
