"use client";

import Wrapper from "@/components/Wrapper";
import SummaryInfo from "./SummaryInfo";
import CartList from "./CartList";
import { useState } from "react";
import CartForm from "./CartForm";
import OrderShort from "./OrderShort";

const Cart = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <section className="w-full">
      <Wrapper styles={"grid grid-cols-cart gap-x-20 justify-between"}>
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
          <>Step 3</>
        )}
      </Wrapper>
    </section>
  );
};

export default Cart;
