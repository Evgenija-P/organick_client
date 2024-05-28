"use client";

import React, { useState } from "react";

import Title from "../Title";
import Subtitle from "../Subtitle";
import Wrapper from "../Wrapper";
import products from "@/data/products.json";
import Button from "../UI/Buttons";
import ProductItem from "./products/ProductItem";

const OurProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(4);

  const showMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
  };

  return (
    <section className="w-full min-h-[1067px] pt-[176px] pb-[200px] relative">
      <Wrapper styles={""}>
        <div className="w-fit flex flex-col mb-10 mx-auto">
          <Title style={"mb-2 text-center"}>Categories</Title>
          <Subtitle>Our Products</Subtitle>
        </div>
        <div className="grid grid-cols-4 gap-y-5">
          {products.slice(0, visibleProducts).map(el => (
            <ProductItem key={el.id} item={el} page="products" />
          ))}
        </div>
        {visibleProducts < products.length && (
          <Button clickFn={showMoreProducts} style="main" btnClass="mx-auto mt-[122px]">
            See More
          </Button>
        )}
      </Wrapper>
    </section>
  );
};

export default OurProducts;
