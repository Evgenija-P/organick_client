import Image from "next/image";

const CartProductItem = ({ item }) => {
  const { title, img, current_price } = item;

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
      <div className="flex gap-x-2 items-center mx-auto">
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <p className="pr-1">total {"\u20B4"}</p>
      <button>del</button>
    </li>
  );
};

export default CartProductItem;
