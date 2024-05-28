"use client";

import { useForm, Controller } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useStore } from "../components/StoreProvider";
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
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  // Watch all fields and update store on change
  const watchFields = watch((value, { name }) => {
    cartStore.setOrderInfo({ [name]: value[name] });
  });

  const handleSubmit = () => {
    // Очищаємо дані у сторі при відправці замовлення
    cartStore.clearOrderInfo();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid grid-cols-2 gap-x-[20px] gap-y-[20px] mx-auto mt-10"
    >
      {TEXT_FIELDS.map(({ id, name, placeholder, type, style, label }) => (
        <div key={id} className={`field-wrapper ${style || ""}`}>
          <Controller
            control={control}
            name={name}
            defaultValue={defaultValues[name]}
            rules={{ required: `${label} is required` }}
            render={({ field }) => (
              <TextField
                {...field}
                placeholder={placeholder}
                label={label}
                type={type}
                page="cart"
              />
            )}
          />
          {errors[name] && <p className="error-message">{errors[name].message}</p>}
        </div>
      ))}
    </form>
  );
});

export default CartForm;

// "use client";

// import { useForm } from "react-hook-form";
// import TextField from "../../UI/form/TextField";
// import Button from "../../UI/Buttons";

// const TEXT_FIELDS = [
//   {
//     id: "1",
//     name: "first_name",
//     label: "Ім'я",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "2",
//     name: "last_name",
//     label: "Прізвище",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "3",
//     name: "country",
//     label: "Країна",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "4",
//     name: "city",
//     label: "Місто",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "5",
//     name: "street",
//     label: "Адреса",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "6",
//     name: "apartment",
//     label: "Квартира",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "7",
//     name: "state",
//     label: "Область",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "8",
//     name: "zip",
//     label: "Індекс",
//     defaultValue: "",
//     placeholder: "Your Name",
//     type: "input",
//   },
//   {
//     id: "9",
//     name: "email",
//     label: "Email",
//     defaultValue: "",
//     placeholder: "example@yourmail.com",
//     type: "email",
//   },
//   {
//     id: "10",
//     name: "phone",
//     label: "Телефон",
//     defaultValue: "",
//     placeholder: "your company name here",
//     type: "input",
//   },
//   {
//     id: "11",
//     name: "message",
//     label: "Ваше повідомлення",
//     defaultValue: "",
//     placeholder: "Введіть текст",
//     style: "col-span-2",
//     type: "textarea",
//   },
// ];

// const CartForm = () => {
//   const defaultValues = {
//     first_name: "",
//     last_name: "",
//     country: "",
//     city: "",
//     street: "",
//     apartment: "",
//     state: "",
//     zip: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const { control, handleSubmit, reset, resetField } = useForm({
//     mode: "onChange",
//     defaultValues: defaultValues,
//   });

//   const onSubmit = data => {
//     console.log(data);
//     reset();
//   };

//   const handleReset = fieldName => {
//     resetField(fieldName);
//   };
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full grid grid-cols-2 gap-x-[20px] gap-y-[20px] mx-auto mt-10"
//     >
//       {TEXT_FIELDS.map(({ id, name, defaultValue, placeholder, type, style, label }) => (
//         <TextField
//           control={control}
//           name={name}
//           key={id}
//           defaultValue={defaultValue}
//           placeholder={placeholder}
//           label={label}
//           onReset={() => handleReset(name)}
//           type={type}
//           style={style}
//           page="cart"
//         />
//       ))}
//     </form>
//   );
// };

// export default CartForm;
