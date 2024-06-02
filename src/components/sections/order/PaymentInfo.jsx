const PaymentInfo = ({ info }) => {
  return (
    <ul className="w-full flex flex-col">
      <li className="h-[90px] py-4 px-2 flex items-center text-green text-lg font-bold border-b-[4px] border-green mb-8">
        Підсумок
      </li>

      <li className="w-full flex items-center justify-between mb-8">
        <p>Сума замовлення</p>
        <p>
          {info.summa}
          {" \u20B4"}
        </p>
      </li>
      <li className="w-full flex items-center justify-between mb-12">
        <p>Вартість доставки</p>
        <p>
          {info.delivery_cost}
          {" \u20B4"}
        </p>
      </li>
      <li className="w-full flex items-center justify-between mb-16">
        <p>Загальна вартість</p>
        <p>
          {info.total_cost}
          {" \u20B4"}
        </p>
      </li>
    </ul>
  );
};

export default PaymentInfo;
