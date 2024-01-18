import React, { DetailedHTMLProps, ReactNode } from "react";
import { cn } from "../../base/libs/utils";
import SpinnerIcon from "../Icons/SpinnerIcon";

export const Button = ({
  children,
  isLoading,
  ...props
}: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children?: ReactNode;
  isLoading?: boolean;
}) => {
  return (
    <button
      {...props}
      className={cn(
        "py-4 relative px-8 inline-flex justify-center items-center disabled:bg-gray-300 disabled:text-gray-500",
        props.className
      )}
    >
      {children}

      {isLoading ? <SpinnerIcon className='absolute animate-spin right-4' /> : null}
    </button>
  );
};
