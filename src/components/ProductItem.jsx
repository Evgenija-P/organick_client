import Image from "next/image";
import Stars from "./UI/Stars";

const ProductItem = ({ item }) => {
  const { section, title, img, old_price, current_price, stars } = item;
  return (
    <article className="w-[335px] h-[483px] flex flex-col rounded-[30px] bg-white overflow-hidden pb-[17px] relative border border-borderColor justify-end shadow-item hover:shadow-itemHover">
      <p className="w-fit h-8 px-3 py-2.5 flex items-center justify-center bg-main text-white text-[15px] font-semibold rounded-lg absolute top-[30px] left-[30px]">
        {section}
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
    </article>
  );
};

export default ProductItem;
// Vegetable;
// Millets;
// Fresh;
// Health;
// Nuts;

// Овощной;
// Просо;
// Свежий;
// Здоровье;
// Орехи;
