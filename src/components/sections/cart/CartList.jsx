import { observer } from "mobx-react-lite";

import CartProductItem from "./CartProductItem";
import { useStore } from "@/store/StoreProvider";

const CartList = observer(() => {
  const { cartStore } = useStore();
  const products = cartStore.items;

  return (
    <ul className="w-full flex flex-col">
      {products.length === 0 && (
        <h3 className="w-full text-[50px] text-center mt-10">Тут поки немає продуктів</h3>
      )}
      {products.length !== 0 && (
        <>
          <li className="w-full h-[90px] py-4 px-2 grid grid-cols-cartItem items-center justify-between border-b-[4px] border-green">
            <p className="text-green text-lg font-bold">Продукт</p>
            <p className="text-green text-lg font-bold">Ціна</p>
            <p className="text-green text-lg font-bold">Кількість</p>
            <p className="text-green text-lg font-bold">Сума</p>
          </li>
          {products.map(el => (
            <CartProductItem key={el._id} item={el} />
          ))}
        </>
      )}
    </ul>
  );
});

export default CartList;
