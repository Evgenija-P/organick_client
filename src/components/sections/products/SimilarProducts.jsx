import { getAllProducts } from "@/api/productsAPI";
import ProductItem from "./ProductItem";

const SimilarProducts = async ({ category, _id }) => {
  try {
    const products = await getAllProducts();
    const filteredProducts = products.filter(
      product => product.category === category && product._id !== _id
    );

    const randomProducts = [];
    const selectedIndices = new Set();

    while (randomProducts.length < 4 && randomProducts.length < filteredProducts.length) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length);
      if (!selectedIndices.has(randomIndex)) {
        selectedIndices.add(randomIndex);
        randomProducts.push(filteredProducts[randomIndex]);
      }
    }

    return (
      <div className="grid grid-cols-4 gap-y-5">
        {randomProducts.map(el => (
          <ProductItem key={el._id} item={el} page="products" />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching similar products:", error);
    // Return an error message or handle the error appropriately
    return null;
  }
};

export default SimilarProducts;
