"use client";

import { observer } from "mobx-react-lite";
import LinkButton from "@/components/UI/LinkButton";
import { useStore } from "@/store/StoreProvider";

const Quantity = observer(({ item, page }) => {
  const { cartStore } = useStore();

  const { id } = item;

  const value = id => {
    if (cartStore.quantityProduct(id)) {
      return cartStore.quantityProduct(id);
    }
    return 0;
  };

  function increaseProduct() {
    if (cartStore.quantityProduct(id)) {
      cartStore.increaseQuantity(id);
    } else {
      cartStore.addToCart(item);
    }
  }

  return (
    <div className="w-full flex items-center gap-x-3 ">
      {page !== "cart" && <p>Quantity:</p>}
      <div
        className={`${
          page === "cart"
            ? "w-full h-full px-1"
            : "w-[160px] h-[80px] px-2 border border-main rounded-[16px]"
        } flex items-center justify-between `}
      >
        <button
          className={`${
            page === "cart" ? "text-[20px]" : "text-[30px]"
          } font-semibold text-green hover:text-main w-[28%] h-full`}
          onClick={() => cartStore.decreaseQuantity(id)}
          disabled={value(id) === 0}
        >
          -
        </button>
        <p
          className={`${
            page === "cart" ? "text-[30px]" : "text-[40px]"
          } w-[33%] text-center font-semibold`}
        >
          {value(id) || 0}
        </p>
        <button
          className={`${
            page === "cart" ? "text-[20px]" : "text-[30px]"
          } font-semibold text-green hover:text-main w-[28%] h-full`}
          onClick={increaseProduct}
        >
          +
        </button>
      </div>
      {page !== "cart" && <LinkButton goTo="/cart" title="Go to Cart" style="main" />}
    </div>
  );
});

export default Quantity;
