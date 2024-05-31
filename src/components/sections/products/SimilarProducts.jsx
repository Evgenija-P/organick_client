"use client";

import { observer } from "mobx-react";
// import products from "@/data/products.json";
import ProductItem from "./ProductItem";
import productsStore from "@/store/productsStore";

const SimilarProducts = observer(({ category, _id }) => {
  const { products } = productsStore;
  const filteredProducts = products.filter(
    product => product.category === category && product._id !== _id
  );

  console.log("products", products);

  const randomProducts = [];
  while (randomProducts.length < 4) {
    const randomIndex = Math.floor(Math.random() * filteredProducts.length);
    randomProducts.push(filteredProducts[randomIndex]);
  }

  return (
    <div className="grid grid-cols-4 gap-y-5">
      {randomProducts &&
        randomProducts.map(el => <ProductItem key={el.title} item={el} page="products" />)}
    </div>
  );
});

export default SimilarProducts;
