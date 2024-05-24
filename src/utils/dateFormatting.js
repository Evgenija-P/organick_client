export const formatDate = dateString => {
  const [day, month, year] = dateString.split(".");
  const isoDateString = `${year}-${month}-${day}`;
  const date = new Date(isoDateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid Date");
  }

  // Отримати день та коротку назву місяця англійською
  const dayNumber = date.getDate();
  const monthName = date.toLocaleString("en-US", { month: "short" });

  return { day: dayNumber, month: monthName };
};
