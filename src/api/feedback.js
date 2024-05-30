import { baseURL } from "./configurations";

export const createFeedback = async feedbackData => {
  try {
    const response = await fetch(`${baseURL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    });
    const data = await response.json();
    console.log("createFeedback", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAllFeedbacks = async () => {
  try {
    const response = await fetch(`${baseURL}/feedback`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
