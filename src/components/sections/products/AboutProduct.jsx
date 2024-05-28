import Stars from "@/components/UI/Stars";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Quantity from "./Quantity";
import AdditionalInfo from "./AdditionalInfo";
import SimilarProducts from "./SimilarProducts";

const AboutProduct = ({ item }) => {
  const { title, stars, old_price, current_price, id, img, category } = item;
  return (
    <section className="w-full h-fit pt-[133px] mb-[90px]">
      <Wrapper>
        <article className="w-full flex flex-col">
          <div className="w-full flex gap-x-[88px] items-center">
            <Image src={img} width={591} height={563} />
            <div className="w-[658px] h-fit flex flex-col">
              <h2 className="text-[40px] font-semibold">{title}</h2>
              <Stars active={stars} />
              <div className="flex gap-x-2 items-center">
                <p className="text-[15px] text-lite_grey font-semibold line-through">
                  ${old_price}
                </p>
                <p className="text-lg text-main font-bold">${current_price}</p>
              </div>
              <p className="text-lg text-grey mt-[27px] mb-[35px]">
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
                the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley.
              </p>
              <Quantity id={id} />
            </div>
          </div>
          <AdditionalInfo about={1} details={1} />
        </article>
        <SimilarProducts category={category} id={id} />
      </Wrapper>
    </section>
  );
};

export default AboutProduct;
