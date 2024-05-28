import Stars from "@/components/UI/Stars";
import Image from "next/image";
import Link from "next/link";

const ProductItemsStyle = {
  products: "shadow-item hover:shadow-itemHover",
  offer: "hover:shadow-item",
};

const ProductItem = ({ item, page }) => {
  const { category, title, img, old_price, current_price, stars, slug } = item;
  const currentStyle = `${ProductItemsStyle[page]}`;

  return (
    <Link
      href={`/products/${slug}`}
      className={`w-[335px] h-[483px] flex flex-col rounded-[30px] bg-white overflow-hidden pb-[17px] relative border border-borderColor justify-end ${currentStyle}`}
    >
      <p className="w-fit h-8 px-3 py-2.5 flex items-center justify-center bg-main text-white text-[15px] font-semibold rounded-lg absolute top-[30px] left-[30px]">
        {category}
      </p>
      <Image
        src={img}
        className=""
        alt={`picture that shows the product ${title}`}
        width={315}
        height={300}
      />
      <ul className="w-full px-7 mx-auto">
        <li className="text-xl text-main font-semibold mb-3">{title}o</li>
        <li className="flex justify-between pt-2.5 border-t-[1px] border-borderColor">
          <div className="flex gap-x-2 items-center">
            <p className="text-[15px] text-lite_grey font-semibold line-through">${old_price}</p>
            <p className="text-lg text-main font-bold">${current_price}</p>
          </div>
          <Stars active={stars} />
        </li>
      </ul>
    </Link>
  );
};

export default ProductItem;
