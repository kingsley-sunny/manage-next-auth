import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { cn } from "../../libs/utils";

export const Input = ({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn("w-full px-4 py-2 border rounded-md text-gray-700", props.className)}
    />
  );
};
