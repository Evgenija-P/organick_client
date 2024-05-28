export function validateFields(orderInfo) {
  const requiredFields = [
    "first_name",
    "last_name",
    "country",
    "city",
    "street",
    "apartment",
    "state",
    "zip",
    "email",
    "phone",
  ];

  const emptyFields = requiredFields.filter(field => !orderInfo[field]);
  return emptyFields;
}
