import Image from "next/image";
import Stars from "./UI/Stars";

const TestimonialItem = () => {
  return (
    <article className="w-[780px] flex flex-col gap-y-5 mx-auto">
      <div className="w-[115px] h-[115px] rounded-full mx-auto overflow-hidden">
        <Image src="/images/home/Photo.png" alt="photo" width={125} height={156} />
      </div>
      <div className="flex flex-col gap-y-[25px] justify-between items-center mx-auto">
        <Stars active={5} />
        <p className="text-center">
          Професійні екологи, які знаються на своїй справі. Чудові аграрії. Пропонують дійсно свіжі
          та екологічно чисті продукти за помірною ціною. Швидка доставка. За необхідності нададуть
          консультацію по всім питанням.
        </p>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-[25px] text-main font-semibold text-center">Олеся Кузмицька</p>
        <p className="text-[15px] text-grey text-center">Покупець</p>
      </div>
    </article>
  );
};

export default TestimonialItem;
