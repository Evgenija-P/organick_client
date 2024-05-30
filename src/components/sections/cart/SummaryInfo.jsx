import { observer } from "mobx-react-lite";
import Button from "@/components/UI/Buttons";
import { useStore } from "@/store/StoreProvider";
import { useEffect, useState } from "react";

const SummaryInfo = observer(({ func, section }) => {
  const { cartStore } = useStore();

  useEffect(() => {
    const total = (cartStore.totalPrice * 0.07).toFixed(2);
    const delivery = parseFloat(total);
    cartStore.setDeliveryCost(delivery);
  }, [cartStore.totalPrice, cartStore]);

  const [isEmpty, setIsEmpty] = useState(cartStore.errors.length);

  useEffect(() => setIsEmpty(cartStore.errors.length), [cartStore.errors.length]);

  const confirmOrder = () => {
    cartStore.validateOrderInfo();

    if (cartStore.errors.length >= 1) {
      return;
    }

    cartStore.submitOrder();
    func();
    cartStore.resetErrors();
  };

  return (
    <ul className="w-full flex flex-col">
      {section !== "ordershort" ? (
        <li className="h-[90px] py-4 px-2 flex items-center text-green text-lg font-bold border-b-[4px] border-green mb-8">
          Підсумок
        </li>
      ) : (
        <li className="h-[90px] py-4 px-2 flex items-center justify-between text-green text-lg font-bold border-b-[4px] border-green mb-8">
          <p>Продукт</p>
          <p>Сума</p>
        </li>
      )}

      <li className="w-full flex items-center justify-between mb-8">
        <p>Сума замовлення</p>
        <p>
          {cartStore.totalPrice}
          {" \u20B4"}
        </p>
      </li>
      <li className="w-full flex items-center justify-between mb-12">
        <p>Вартість доставки</p>
        <p>
          {cartStore.deliveryCost.toFixed(2)}
          {" \u20B4"}
        </p>
      </li>
      <li className="w-full flex items-center justify-between mb-16">
        <p>Загальна вартість</p>
        <p>
          {cartStore.totalCost.toFixed(2)}
          {" \u20B4"}
        </p>
      </li>
      {section !== "ordershort" ? (
        <Button
          clickFn={func}
          style={"main"}
          btnClass={"w-full disabled:opacity-25 disabled:hover:shadow-none"}
          disabled={cartStore.items.length === 0}
        >
          Продовжити оформлення
        </Button>
      ) : (
        <>
          <Button clickFn={() => confirmOrder()} style={"main"} btnClass={"w-full"}>
            Підтвердити замовлення
          </Button>
          {isEmpty >= 1 && (
            <p className="text-lg text-center font-medium text-orange italic mt-5">
              Всі поля, позначені зірочкою, мають бути заповнені!
            </p>
          )}
        </>
      )}
    </ul>
  );
});

export default SummaryInfo;
