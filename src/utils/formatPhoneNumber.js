export const formatPhoneNumber = phoneNumber => {
  // Видалити всі символи, крім цифр і знака '+'
  const cleaned = phoneNumber.replace(/[^\d+]/g, "");

  // Використати регулярний вираз для додавання пробілів у потрібних місцях
  const formatted = cleaned.replace(/(\+\d{2})(\d{3})(\d{2})(\d{2})(\d{3})/, "$1 $2 $3 $4 $5");

  return formatted;
};
