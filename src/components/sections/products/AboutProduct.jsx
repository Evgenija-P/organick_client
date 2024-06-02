import Stars from "@/components/UI/Stars";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Quantity from "./Quantity";
import AdditionalInfo from "./AdditionalInfo";
import SimilarProducts from "./SimilarProducts";

const AboutProduct = ({ item }) => {
  const {
    title,
    stars,
    old_price,
    current_price,
    _id,
    img,
    category,
    short_text,
    full_text,
    additional_info,
  } = item;
  return (
    <section className="w-full h-fit pt-[133px] mb-[90px]">
      <Wrapper>
        <article className="w-full flex flex-col">
          <div className="w-full flex gap-x-[88px] items-center relative">
            <p className="w-fit h-8 px-3 py-2.5 flex items-center justify-center bg-main text-white text-[15px] font-semibold rounded-lg absolute top-[30px] left-[30px]">
              {category}
            </p>
            <Image src={img} width={591} height={563} />
            <div className="w-[658px] h-fit flex flex-col">
              <h2 className="text-[40px] font-semibold">{title}</h2>
              <Stars active={stars} />
              <div className="flex gap-x-2 items-center">
                <p className="text-[15px] text-lite_grey font-semibold line-through">
                  {" \u20B4"}
                  {old_price}
                </p>
                <p className="text-lg text-main font-bold">
                  {" \u20B4"}
                  {current_price}
                </p>
              </div>
              <p className="text-lg text-grey mt-[27px] mb-[35px]">{short_text}</p>
              <Quantity item={item} />
            </div>
          </div>
          <AdditionalInfo full={full_text} additional={additional_info} />
        </article>
        <SimilarProducts category={category} id={_id} />
      </Wrapper>
    </section>
  );
};

export default AboutProduct;
