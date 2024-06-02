"use client"; // це важливо для клієнтського компонента

import { createContext, useContext } from "react";
import productsStore from "./productsStore";

import cartStore from "./cartStore";

const StoreContext = createContext({
  productsStore,
  cartStore,
});

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ productsStore, cartStore }}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
