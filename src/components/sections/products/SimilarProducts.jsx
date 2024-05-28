import products from "@/data/products.json";
import ProductItem from "./ProductItem";

const SimilarProducts = ({ category, id }) => {
  const filteredProducts = products.filter(
    product => product.category === category && product.id !== id
  );

  const randomProducts = [];
  while (randomProducts.length < 4) {
    const randomIndex = Math.floor(Math.random() * filteredProducts.length);
    randomProducts.push(filteredProducts[randomIndex]);
  }

  return (
    <div className="grid grid-cols-4 gap-y-5">
      {randomProducts &&
        randomProducts.map(el => <ProductItem key={el.id} item={el} page="products" />)}
    </div>
  );
};

export default SimilarProducts;
