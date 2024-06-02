import { pacifico } from "@/app/fonts";

const Title = ({ children, style }) => {
  return <h2 className={`${pacifico.className} text-green text-4xl ${style}`}>{children}</h2>;
};

export default Title;
