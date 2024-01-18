import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { useController, useFormContext } from "react-hook-form";
import { cn } from "../../base/libs/utils";

export const Input = ({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({
    name: props.name as string,
    control,
    defaultValue: props.value,
  });

  return (
    <>
      <input
        {...props}
        className={cn(
          "w-full px-4 py-2 border rounded-md text-gray-700 outline-primary",
          props.className,
          errors[field.name]?.message && "border-red-600 outline-red-600"
        )}
        value={field.value ?? ""}
        ref={field.ref}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />

      {/* the error message */}
      {errors[field.name]?.message ? (
        <p className='mt-1 text-sm text-red-600'>{errors[field.name]?.message as string}</p>
      ) : null}
    </>
  );
};
