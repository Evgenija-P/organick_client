import Wrapper from "@/components/Wrapper";
import OrderList from "./OrderList";
import PaymentInfo from "./PaymentInfo";
import RecipientInfo from "./RecipientInfo";

const FinallyInfo = ({ order }) => {
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
  } = order;

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
    <section>
      <Wrapper styles="grid grid-cols-cart gap-x-20 gap-y-[100px] justify-between">
        <OrderList products={products} />
        <PaymentInfo info={paymentsInfo} />
        <RecipientInfo info={contactInfo} />
      </Wrapper>
    </section>
  );
};

export default FinallyInfo;
