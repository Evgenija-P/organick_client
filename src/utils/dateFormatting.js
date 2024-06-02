export const formatDate = dateString => {
  const [day, month, year] = dateString.split(".");
  const isoDateString = `${year}-${month}-${day}`;
  const date = new Date(isoDateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid Date");
  }

  // Отримати день та назву місяця українською
  const dayNumber = date.getDate();
  const monthNamesUkr = [
    "січ",
    "лют",
    "бер",
    "квіт",
    "трав",
    "чер",
    "лип",
    "сер",
    "вер",
    "жов",
    "лист",
    "груд",
  ];
  const monthName = monthNamesUkr[date.getMonth()];

  return { day: dayNumber, month: monthName };
};
