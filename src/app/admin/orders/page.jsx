import { baseURL } from "@/api/configurations";
import { getOrderById } from "@/api/ordersAPI";
import Wrapper from "@/components/Wrapper";
import AdminOrderItem from "@/components/sections/order/AdminOrderItem";

export const getAllOrders = async slug => {
  const res = await fetch(`${baseURL}/order`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function OrdersPage() {
  const orders = await getAllOrders();

  // Створюємо масив з промісами для отримання інформації про кожне замовлення
  const orderPromises = orders.map(order => getOrderById(order._id));

  // Очікуємо виконання всіх промісів і отримуємо результати
  const orderDetails = await Promise.all(orderPromises);

  console.log(orderDetails);

  return (
    <main className="w-full pb-[100px]">
      <Wrapper styles={"flex flex-col gap-y-10"}>
        <div
          className={`w-full h-[63px] flex items-center justify-between gap-x-6 px-2 border-b-[4px] border-green`}
        >
          <p className="w-[103px]">Номер</p>
          <p className="w-[202px]">Прізвище </p>
          <p className="w-[105px]">Ім'я </p>
          <p className="w-[105px]">Країна</p>
          <p className="w-[85px]">Вартість </p>
          <p className="w-6" />
        </div>
        <div>
          {orderDetails.map(order => (
            <AdminOrderItem key={order._id} item={order} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
