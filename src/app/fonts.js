import { Roboto, Open_Sans, Pacifico } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({ weight: "400", subsets: ["cyrillic"] });

export { roboto, openSans, pacifico };
