import products from "@/data/products.json";
import CartProductItem from "./CartProductItem";

const CartList = () => {
  return (
    <ul className="w-full flex flex-col">
      <li className="w-full h-[90px] py-4 px-2 grid grid-cols-cartItem items-center justify-between border-b-[4px] border-green">
        <p className="text-green text-lg font-bold">Продукт</p>
        <p className="text-green text-lg font-bold">Ціна</p>
        <p className="text-green text-lg font-bold">Кількість</p>
        <p className="text-green text-lg font-bold">Сума</p>
      </li>
      {products.map(el => (
        <CartProductItem key={el.id} item={el} />
      ))}
    </ul>
  );
};

export default CartList;
