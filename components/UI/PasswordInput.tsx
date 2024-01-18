import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { cn } from "../../libs/utils";
import EyeCloseIcon from "../Icons/EyeCloseIcon";
import EyeOpenIcon from "../Icons/EyeOpenIcon";

export const PasswordInput = ({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
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
      <div className='relative'>
        <input
          {...props}
          type={isPasswordShown ? "text" : "password"}
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

        <button
          onClick={e => setIsPasswordShown(!isPasswordShown)}
          className='absolute text-gray-500 right-4 top-1/2 -translate-y-1/2'
          type='button'
        >
          {isPasswordShown ? <EyeOpenIcon /> : <EyeCloseIcon />}
        </button>
      </div>

      {/* The error message */}
      {errors[field.name]?.message ? (
        <p className='mt-1 absolute text-sm text-red-600'>
          {errors[field.name]?.message as string}
        </p>
      ) : null}
    </>
  );
};
