"use client";
import { useState } from "react";
import OrderList from "./OrderList";
import PaymentInfo from "./PaymentInfo";
import RecipientInfo from "./RecipientInfo";

const AdminOrderItem = ({ item }) => {
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const toggleOrder = () => {
    setIsOpenOrder(prevState => !prevState);
  };

  const formatOrderNumber = number => number.toString().padStart(9, "0");
  const {
    first_name,
    last_name,
    country,
    city,
    street,
    apartment,
    state,
    zip,
    email,
    phone,
    message,
    summa,
    delivery_cost,
    total_cost,
    products,
    _id,
  } = item;

  const contactInfo = {
    first_name,
    last_name,
    country,
    city,
    street,
    apartment,
    state,
    zip,
    email,
    phone,
    message,
  };

  const paymentsInfo = {
    summa,
    delivery_cost,
    total_cost,
  };

  return (
    <article className={`w-full px-2 border-b border-green border-dashed text-sm`}>
      <div
        className={`w-full h-[63px] flex items-center justify-between gap-x-6 px-2 ${
          isOpenOrder ? "border-b border-green" : ""
        }`}
      >
        <p className="w-[103px]">#{formatOrderNumber(item.order_number)}</p>
        <p className="w-[202px]">{item.first_name}</p>
        <p className="w-[105px]">{item.last_name} </p>
        <p className="w-[105px]">{item.country} </p>
        <p className="w-[85px]">{item.total_cost || 0} </p>
        <button
          className="w-6 h-6 bg-dark-btn-bg cursor-pointer flex items-center justify-center"
          onClick={toggleOrder}
        >
          {isOpenOrder ? "-" : "+"}
        </button>
      </div>

      {isOpenOrder && (
        <div className="grid grid-cols-cart gap-x-20 gap-y-[100px] justify-between">
          <OrderList products={products} />
          <PaymentInfo info={paymentsInfo} />
          <RecipientInfo info={contactInfo} />
        </div>
      )}
    </article>
  );
};

export default AdminOrderItem;
