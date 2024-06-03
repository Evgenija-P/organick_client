"use client";

import React, { useState, useEffect, useRef } from "react";
import Wrapper from "../../Wrapper";
import ProductItem from "../products/ProductItem";
import Button from "@/components/UI/Buttons";
import { Up } from "@/icons/iconComponent";

const Products = ({ products }) => {
  const [loadedProducts, setLoadedProducts] = useState(4);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [sortBy, setSortBy] = useState("назві");
  const [sortDirection, setSortDirection] = useState("зростання");
  const [currentCategories, setCurrentCategories] = useState("Всі категорії");
  const containerRef = useRef(null);

  const categories = ["Всі категорії"];
  products.forEach(el => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });

  const filterProductsByCategory = (products, category) => {
    let filteredProducts = products.filter(product => {
      if (category === "Всі категорії" || product.category === category) {
        return true;
      }
      return false;
    });

    if (sortBy === "назві") {
      filteredProducts.sort((a, b) => {
        if (sortDirection === "зростання") {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
    } else if (sortBy === "ціні") {
      filteredProducts.sort((a, b) => {
        if (sortDirection === "зростання") {
          return a.current_price - b.current_price;
        } else {
          return b.current_price - a.current_price;
        }
      });
    }

    return filteredProducts.slice(0, loadedProducts);
  };

  useEffect(() => {
    const filteredProducts = filterProductsByCategory(products, currentCategories);
    setVisibleProducts(filteredProducts);
  }, [loadedProducts, currentCategories, sortBy, sortDirection, products]);

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

  const handleSortBy = type => {
    if (type === sortBy) {
      // Если тип сортировки совпадает с текущим, меняем направление сортировки
      setSortDirection(prevDirection => (prevDirection === "зростання" ? "спадання" : "зростання"));
    } else {
      // Иначе, устанавливаем новый тип сортировки и направление "зростання"
      setSortBy(type);
      setSortDirection("зростання");
    }
  };

  return (
    <section className="w-full pt-[120px] pb-[200px] relative">
      <Wrapper styles={"flex flex-col gap-y-10"}>
        <div className="w-full grid grid-cols-6 mx-auto gap-x-5 justify-between">
          {categories.map(el => (
            <Button
              key={el}
              style={currentCategories === el ? "transparent" : "main"}
              clickFn={() => setCurrentCategories(el)}
            >
              {el}
            </Button>
          ))}
        </div>

        <div className="flex gap-x-2">
          <Button clickFn={() => handleSortBy("назві")} style="main" btnClass={"flex gap-x-2"}>
            Сортувати за назвою{" "}
            {sortBy === "назві" && sortDirection === "зростання" ? (
              <Up />
            ) : (
              <Up className={"rotate-180"} />
            )}
          </Button>
          <Button clickFn={() => handleSortBy("ціні")} style="main" btnClass={"flex gap-x-2"}>
            Сортувати за ціною{" "}
            {sortBy === "ціні" && sortDirection === "зростання" ? (
              <Up />
            ) : (
              <Up className={"rotate-180"} />
            )}
          </Button>
        </div>

        <div className="h-fit grid grid-cols-4 gap-y-5">
          {visibleProducts.map(el => (
            <ProductItem key={el._id} item={el} page="products" />
          ))}
        </div>
        <div ref={containerRef} />
      </Wrapper>
    </section>
  );
};

export default Products;
