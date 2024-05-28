import Button from "@/components/UI/Buttons";

const SummaryInfo = ({ func }) => {
  function generateRandomPercentage() {
    return Math.random() * 12 + 11;
  }

  // Приклад використання:
  const randomPercentage = generateRandomPercentage();
  console.log(`Випадковий відсоток: ${randomPercentage.toFixed(2)}%`);

  return (
    <ul className="w-full flex flex-col">
      <li className="h-[90px] py-4 px-2 flex items-center text-green text-lg font-bold border-b-[4px] border-green mb-8">
        Підсумок
      </li>

      <li className="w-full flex items-center justify-between mb-8">
        <p>Сума замовлення</p>
        <p>000000{" \u20B4"}</p>
      </li>
      <li className="w-full flex items-center justify-between mb-12">
        <p>Вартість доставки</p>
        <p>000000{" \u20B4"}</p>
      </li>
      <li className="w-full flex items-center justify-between mb-16">
        <p>Загальна вартість</p>
        <p>000000{" \u20B4"}</p>
      </li>

      <Button clickFn={func} style={"main"} btnClass={"w-full"}>
        Продовжити оформлення
      </Button>
    </ul>
  );
};

export default SummaryInfo;
