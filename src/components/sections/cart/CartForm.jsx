"use client";

import { useForm, Controller } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store/StoreProvider";
import TextField from "../../UI/form/TextField";

const TEXT_FIELDS = [
  { id: "1", name: "first_name", label: "Ім'я", placeholder: "Your Name", type: "input" },
  { id: "2", name: "last_name", label: "Прізвище", placeholder: "Your Name", type: "input" },
  { id: "3", name: "country", label: "Країна", placeholder: "Your Name", type: "input" },
  { id: "4", name: "city", label: "Місто", placeholder: "Your Name", type: "input" },
  { id: "5", name: "street", label: "Адреса", placeholder: "Your Name", type: "input" },
  { id: "6", name: "apartment", label: "Квартира", placeholder: "Your Name", type: "input" },
  { id: "7", name: "state", label: "Область", placeholder: "Your Name", type: "input" },
  { id: "8", name: "zip", label: "Індекс", placeholder: "Your Name", type: "input" },
  { id: "9", name: "email", label: "Email", placeholder: "example@yourmail.com", type: "email" },
  {
    id: "10",
    name: "phone",
    label: "Телефон",
    placeholder: "your company name here",
    type: "input",
  },
  {
    id: "11",
    name: "message",
    label: "Ваше повідомлення",
    placeholder: "Введіть текст",
    style: "col-span-2",
    type: "textarea",
  },
];

const CartForm = observer(() => {
  const { cartStore } = useStore();

  const defaultValues = {};
  TEXT_FIELDS.forEach(({ name }) => {
    defaultValues[name] = cartStore.orderInfo[name] || "";
  });

  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const watchFields = watch((value, { name }) => {
    cartStore.setOrderInfo([name], value[name]);
  });

  const handleReset = name => {
    cartStore.resetOrderField(name);
    setValue(name, "");
  };

  return (
    <div className="flex flex-col">
      <h3 className="h-[90px] py-4 px-2 text-green text-lg font-bold border-b-[4px] border-green">
        Контактна інформація
      </h3>
      <form className="w-full grid grid-cols-2 gap-x-[20px] gap-y-[20px] mx-auto mt-5">
        {TEXT_FIELDS.map(({ id, name, placeholder, type, style, label }) => (
          <div key={id+25} className={`field-wrapper ${style || ""}`}>
            <Controller
              control={control}
              name={name}
              defaultValue={defaultValues[name]}
              rules={{ required: `${label} is required` }}
              render={({ field }) => (
                <TextField
                  {...field}
                  control={control}
                  placeholder={placeholder}
                  label={label}
                  type={type}
                  onReset={() => handleReset(name)}
                  page="cart"
                />
              )}
            />
            {errors[name] && <p className="error-message">{errors[name].message}</p>}
          </div>
        ))}
      </form>
    </div>
  );
});

export default CartForm;

