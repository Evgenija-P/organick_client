import { baseURL } from "./configurations";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseURL}/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
