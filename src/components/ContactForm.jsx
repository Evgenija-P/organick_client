"use client";

import { useForm } from "react-hook-form";
import TextField from "./UI/form/TextField";
import Button from "./UI/Buttons";

const TEXT_FIELDS = [
  {
    id: "1",
    name: "name",
    label: "Full Name",
    defaultValue: "",
    placeholder: "Your Name",
    type: "input",
  },
  {
    id: "2",
    name: "email",
    label: "Your Email",
    defaultValue: "",
    placeholder: "example@yourmail.com",
    type: "email",
  },
  {
    id: "3",
    name: "company",
    label: "Company",
    defaultValue: "",
    placeholder: "your company name here",
    type: "input",
  },
  {
    id: "4",
    name: "subject",
    label: "Subject",
    defaultValue: "",
    placeholder: "how can we help",
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
    console.log(data);
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
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
