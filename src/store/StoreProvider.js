"use client"; // це важливо для клієнтського компонента

import { createContext, useContext } from "react";
import productsStore from "./productsStore";
import newsStore from "./newsStore";
import cartStore from "./cartStore";

const StoreContext = createContext({
  productsStore,
  newsStore,
  cartStore,
});

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ productsStore, newsStore, cartStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
