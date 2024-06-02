import Title from "../Title";
import Subtitle from "../Subtitle";

const Friendly = () => {
  return (
    <section className="w-full h-[931px] py-[200px] bg-friendly bg-left bg-no-repeat relative">
      <div className="w-[789px] h-[723px] py-[78px] px-[89px] rounded-[30px] bg-white absolute top-[100px] left-[calc(50%-81px)]">
        <Title style={"mb-2"}>Екологічно чистий</Title>
        <Subtitle>
          Наш магазин пропонує <br /> тільки органічні продукти
        </Subtitle>
        <ul className="flex flex-col gap-y-[35px] mt-[35px]">
          <li className="w-full flex flex-col gap-y-1">
            <p className="text-[25px] font-medium">Зробіть перший крок із нашою компанією.</p>
            <p className="text-lg text-grey">
              Зробіть перші кроки до більш здорового та повноцінного життя з продуктами з наших
              ферм!
            </p>
          </li>
          <li className="w-full flex flex-col gap-y-1">
            <p className="text-[25px] font-medium">Дізнайтеся, як стати нашим партнером</p>
            <p className="text-lg text-grey">
              Станьте нашим партнером по вирощуванню чи продажу екологічно здорових продуктів!
            </p>
          </li>
          <li className="w-full flex flex-col gap-y-1">
            <p className="text-[25px] font-medium">Опануйте нове</p>
            <p className="text-lg text-grey">
              Дізнавайтеся про нові напрямки у вирощуванні екологічних продуктів, нові стандарти
              обробки землі та інше!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Friendly;
