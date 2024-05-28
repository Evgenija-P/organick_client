import Title from "../Title";
import Wrapper from "../Wrapper";
import Subtitle from "../Subtitle";
import LinkButton from "../UI/LinkButton";
import products from "@/data/products.json";
import ProductItem from "./products/ProductItem";

const Offer = () => {
  const limitedProducts = products.slice(0, 4);
  return (
    <section className="w-full min-h-[1050px] py-[200px] bg-main relative">
      <Wrapper styles={""}>
        <div className="flex items-end justify-between">
          <div className="w-fit">
            <Title style={"mb-2"}>Offer</Title>
            <Subtitle className={"text-white"}>We Offer Organic For You</Subtitle>
          </div>
          <LinkButton title="View All Product" goTo="/products" style="yellow" className="px-10" />
        </div>

        <div className="w-full mx-auto grid grid-cols-4 mt-[50px]">
          {limitedProducts.map(el => (
            <ProductItem key={el.id} item={el} page="offer" />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Offer;
