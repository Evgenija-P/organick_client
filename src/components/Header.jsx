"use client";

import { observer } from "mobx-react-lite";
import Link from "next/link";
import Menu from "./Menu";
import Logo from "./UI/Logo";
import { Cart } from "@/icons/iconComponent";
import { useStore } from "@/store/StoreProvider";

export const Header = observer(() => {
  const { cartStore } = useStore();

  return (
    <header className="flex justify-between items-center font-bold w-[1480px] px-[40px] py-[50px] mx-auto">
      <Logo />
      <Menu section="header" />
      <div className="flex gap-x-8 items-center">
        <Link
          href="/cart"
          className="w-[159px] h-[66px] rounded-[33px] border border-[#E0E0E0] p-[5px] flex items-center gap-x-2 hover:bg-main hover:text-white"
        >
          <div className="w-[56px] h-[56px] rounded-full bg-main flex items-center justify-center cart-wrapper">
            <Cart />
          </div>
          Кошик {cartStore.totalQuantity}
        </Link>
      </div>
    </header>
  );
});
