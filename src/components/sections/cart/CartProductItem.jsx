import { observer } from "mobx-react-lite";
import Image from "next/image";
import Quantity from "../products/Quantity";
import { useStore } from "@/store/StoreProvider";
import { Trash } from "@/icons/iconComponent";

const CartProductItem = observer(({ item }) => {
  const { cartStore } = useStore();

  const { title, img, current_price, _id } = item;
  const total = (cartStore.quantityProduct(_id) * current_price).toFixed(2);

  return (
    <li className="w-full h-[90px] py-4 px-2 grid grid-cols-cartItem items-center justify-between border-b border-green">
      <div className="flex items-center gap-x-5">
        <Image src={img} width={70} height={70} />
        <p className="text-[25px] font-medium">{title}</p>
      </div>
      <p className="pr-1">
        {current_price}
        {" \u20B4"}
      </p>
      <Quantity page={"cart"} item={item} />
      <p className="pr-1">
        {total} {"\u20B4"}
      </p>
      <button onClick={() => cartStore.removeFromCart(_id)}>
        <Trash />
      </button>
    </li>
  );
});

export default CartProductItem;
