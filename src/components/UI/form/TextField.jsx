import { Cross } from "@/icons/iconComponent";
import { useController } from "react-hook-form";
import { forwardRef } from "react";

const TextField = forwardRef(
  ({ control, name, defaultValue, placeholder, onReset, type, style, label, page }, ref) => {
    // Визначаємо правила, якщо тип не є textarea
    const rules = type !== "textarea" ? { required: "Це поле обов'язкове" } : {};

    const { field, fieldState } = useController({
      name,
      control,
      defaultValue,
      rules,
    });

    return (
      <div
        className={`${
          (type === "input" || type === "email") && page !== "cart" ? "w-[569px]" : "w-full"
        } ${style} flex flex-col gap-y-[26px] relative`}
      >
        <label className="text-lg font-semibold">
          {label} {type !== "textarea" && <span className="">*</span>}
        </label>
        {type === "input" ? (
          <input
            {...field}
            placeholder={placeholder}
            className={`${
              fieldState.error && "border-orange"
            } h-[80px] py-7 pl-6 border border-green rounded-2xl outline-none focus:border-main`}
            name={name}
            ref={ref}
          />
        ) : type === "email" ? (
          <input
            {...field}
            type="email"
            placeholder={placeholder}
            className={`${
              fieldState.error && "border-orange"
            } h-[80px] py-7 pl-6 border border-green rounded-2xl outline-none focus:border-main`}
            name={name}
            ref={ref}
          />
        ) : (
          <textarea
            {...field}
            placeholder={placeholder}
            className={`h-[92px] ${style} h-[247px] py-7 pl-6 border border-green rounded-2xl outline-none focus:border-main`}
            name={name}
            ref={ref}
            style={{
              resize: "none",
            }}
          />
        )}

        <button
          type="button"
          className="absolute top-[80px] right-3 form_button"
          onClick={() => onReset({ name })}
        >
          <Cross />
        </button>
        {fieldState.error && (
          <span className="absolute -bottom-6 left-0 text-14 text-orange italic">
            {fieldState.error.message}
          </span>
        )}
      </div>
    );
  }
);

export default TextField;
