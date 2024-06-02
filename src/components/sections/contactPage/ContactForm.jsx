"use client";

import { useForm } from "react-hook-form";
import TextField from "../../UI/form/TextField";
import Button from "../../UI/Buttons";
import { createFeedback } from "@/api/feedback";

const TEXT_FIELDS = [
  {
    id: "1",
    name: "name",
    label: "Ім'я та прізвище",
    defaultValue: "",
    placeholder: "Ваше ім'я",
    type: "input",
  },
  {
    id: "2",
    name: "email",
    label: "Ваша пошта",
    defaultValue: "",
    placeholder: "example@yourmail.com",
    type: "email",
  },
  {
    id: "3",
    name: "company",
    label: "Компанія",
    defaultValue: "",
    placeholder: "Назва Вашої компанії",
    type: "input",
  },
  {
    id: "4",
    name: "subject",
    label: "Напрямок",
    defaultValue: "",
    placeholder: "Напрямок співпраці",
    type: "input",
  },
  {
    id: "5",
    name: "message",
    label: "Ваше повідомлення",
    defaultValue: "",
    placeholder: "Введіть текст",
    style: "col-span-2",
    type: "textarea",
  },
];

const ContactForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    message: "",
    company: "",
    subject: "",
  };
  const { control, handleSubmit, reset, resetField } = useForm({
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const onSubmit = data => {
    createFeedback(data);
    reset();
  };

  const handleReset = fieldName => {
    resetField(fieldName);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[1184px] grid grid-cols-2 gap-x-[46px] gap-y-[50px] mx-auto mt-20"
    >
      {TEXT_FIELDS.map(({ id, name, defaultValue, placeholder, type, style, label }) => (
        <TextField
          control={control}
          name={name}
          key={id}
          defaultValue={defaultValue}
          placeholder={placeholder}
          label={label}
          onReset={() => handleReset(name)}
          type={type}
          style={style}
        />
      ))}

      <Button style={"main"} btnType={"submit"}>
        Відправити повідомлення
      </Button>
    </form>
  );
};

export default ContactForm;
