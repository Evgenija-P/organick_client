import Title from "../Title";
import Wrapper from "../Wrapper";
import Subtitle from "../Subtitle";
import LinkButton from "../UI/LinkButton";
import ProductItem from "./products/ProductItem";

const Offer = ({ products }) => {
  const randomProducts = [];
  const selectedIndices = new Set();

  while (randomProducts.length < 4) {
    const randomIndex = Math.floor(Math.random() * products.length);
    if (!selectedIndices.has(randomIndex)) {
      selectedIndices.add(randomIndex);
      randomProducts.push(products[randomIndex]);
    }
  }

  return (
    <section className="w-full min-h-[1050px] py-[200px] bg-main relative">
      <Wrapper styles={""}>
        <div className="flex items-end justify-between">
          <div className="w-fit">
            <Title style={"mb-2"}>Наші пропозиції</Title>
            <Subtitle className={"text-white"}>Що ми пропонуємо?</Subtitle>
          </div>
          <LinkButton title="Всі продукти" goTo="/products" style="yellow" className="px-10" />
        </div>

        <div className="w-full mx-auto grid grid-cols-4 mt-[50px]">
          {randomProducts.map(el => (
            <ProductItem key={el.id+100} item={el} page="offer" />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Offer;
