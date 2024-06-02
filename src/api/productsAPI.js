import productsStore from "@/store/productsStore";
import { baseURL } from "./configurations";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseURL}/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getProductBySlug = async slug => {
  const res = await fetch(`${baseURL}/product/${slug}`, {
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
