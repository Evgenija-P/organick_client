"use client";

import Wrapper from "@/components/Wrapper";
import SummaryInfo from "./SummaryInfo";
import CartList from "./CartList";
import { useState } from "react";
import CartForm from "./CartForm";
import OrderShort from "./OrderShort";
import CartFinish from "./CartFinish";

const Cart = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <section className="w-full pb-[110px] min-h-[700px]">
      <Wrapper
        styles={`${
          currentStep !== 3
            ? "grid grid-cols-cart gap-x-20 justify-between"
            : "w-full mx-auto relative"
        } `}
      >
        {currentStep === 1 ? (
          <>
            <CartList />
            <SummaryInfo func={() => setCurrentStep(2)} />
          </>
        ) : currentStep === 2 ? (
          <>
            <CartForm />
            <OrderShort func={() => setCurrentStep(3)} />
          </>
        ) : (
          <CartFinish />
        )}
      </Wrapper>
    </section>
  );
};

export default Cart;
