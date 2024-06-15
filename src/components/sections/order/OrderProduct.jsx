import Image from "next/image";
import Link from "next/link";

const OrderProduct = ({ item }) => {
  const total = item.current_price * item.quantity;
  return (
    <li className="w-full h-[90px] py-4 px-2 grid grid-cols-cartItem items-center justify-between border-b border-green">
      <div>
        <Link href={`/products/${item.slug}`} className="flex items-center gap-x-5">
          <Image src={item.img} width={70} height={70} alt={item.title} />
          <p className="text-[25px] font-medium">{item.title}</p>
        </Link>
      </div>
      <p className="pr-1">
        {item.current_price}
        {" \u20B4"}
      </p>
      <p className="pr-1">{item.quantity}</p>
      <p className="pr-1">
        {total} {"\u20B4"}
      </p>
    </li>
  );
};

export default OrderProduct;
