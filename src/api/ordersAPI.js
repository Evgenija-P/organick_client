import { baseURL } from "./configurations";

export const createOrder = async orderData => {
  try {
    const response = await fetch(`${baseURL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    const data = await response.json();
  
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAllOrders = async () => {
  try {
    const response = await fetch(`${baseURL}/order`, {
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

export const getOrderById = async _id => {
  try {
    const response = await fetch(`${baseURL}/order/${_id}`, {
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
