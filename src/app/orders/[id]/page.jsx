import { getOrderById } from "@/api/ordersAPI";
import FinallyInfo from "@/components/sections/order/FinallyInfo";

export default async function OrderPage({ params }) {
  const order = await getOrderById(params.id);

  return (
    <main className="w-full">
      <FinallyInfo order={order}/>
    </main>
  );
}
