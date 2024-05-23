import ProductItem from "../ProductItem";
// import Link from "next/link";
// import Image from "next/image";
import Title from "../Title";
import Subtitle from "../Subtitle";
// import Arrow from "@/icons/arrow.svg";
import Wrapper from "../Wrapper";
import products from "@/data/products.json";
import LinkButton from "../UI/LinkButton";

const OurProducts = () => {
  return (
    <section className="w-full min-h-[1067px] pt-[176px] pb-[200px] relative">
      <Wrapper styles={""}>
        <div className="w-fit flex flex-col mb-10 mx-auto">
          <Title style={"mb-2 text-center"}>Categories</Title>
          <Subtitle>Our Products</Subtitle>
        </div>
        <div className="grid grid-cols-4 gap-y-5">
          {products.map(el => (
            <ProductItem key={el.id} item={el} />
          ))}
        </div>
        {/* <Link
          className="w-[220px] h-[80px] px-3 py-7 mt-48 text-white text-xl font-bold bg-main rounded-2xl flex items-center justify-center mx-auto gap-x-2 hover:shadow-btnMain shop-link"
          href="/shop"
        >
          See More
          <Image src={Arrow} className="arrow-icon" alt="pointer icon, right arrow" />
        </Link> */}
        <LinkButton title="See More" goTo="/shop" className="mx-auto mt-[122px]" />
      </Wrapper>
    </section>
  );
};

export default OurProducts;
