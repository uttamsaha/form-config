"use client";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
};

export default function InputField({
  name,
  type,
  required = false,
  placeholder,
}: TInputProps) {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div>
            <input
              {...field}
              type={type}
              required={required}
              placeholder={placeholder}
              className={`${error ? "border-red-500" : ""}`}
            />
            {error && <p className="text-red-500">{error.message}</p>}
          </div>
        )}
      />
    </div>
  );
}
