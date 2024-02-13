import { yellowtail } from "@/app/fonts";

const Title = ({ children, style }) => {
  return <h2 className={`${yellowtail.className} text-green text-4xl ${style}`}>{children}</h2>;
};

export default Title;
