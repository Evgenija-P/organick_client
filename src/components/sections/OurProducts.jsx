import ProductItem from "../ProductItem";
import Title from "../Title";
import Subtitle from "../Subtitle";
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
            <ProductItem key={el.id} item={el} page="products" />
          ))}
        </div>
        <LinkButton title="See More" goTo="/shop" style="main" className="mx-auto mt-[122px]" />
      </Wrapper>
    </section>
  );
};

export default OurProducts;
