"use client";

import React, { useState, useEffect, useRef } from "react";

import Wrapper from "../../Wrapper";
// import products from "@/data/products.json";
import ProductItem from "../products/ProductItem";
import { observable } from "mobx";
import productsStore from "@/store/productsStore";

const Products = observable(() => {
  const [loadedProducts, setLoadedProducts] = useState(4);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const products = productsStore.products;

  console.log("ProductsComponent", products);

  const containerRef = useRef(null);

  useEffect(() => {
    setVisibleProducts(products.slice(0, loadedProducts));
  }, [loadedProducts]);

  const handleScroll = () => {
    const container = containerRef.current;
    const bottom =
      Math.ceil(container?.clientHeight + container?.scrollTop) >= container?.scrollHeight;

    if (bottom) {
      setTimeout(() => {
        setLoadedProducts(prevLoadedProducts => prevLoadedProducts + 4);
      }, 2000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-[176px] pb-[200px] relative">
      <Wrapper styles={"h-fit grid grid-cols-4 gap-y-5"}>
        {visibleProducts.map(el => (
          <ProductItem key={el.id} item={el} page="products" />
        ))}
        <div ref={containerRef} />
      </Wrapper>
    </section>
  );
});

export default Products;
