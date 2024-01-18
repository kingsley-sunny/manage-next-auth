import React, { DetailedHTMLProps, ReactNode } from "react";
import { cn } from "../../libs/utils";

export const Button = ({
  children,
  ...props
}: DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children?: ReactNode;
}) => {
  return (
    <button className={cn("py-4", props.className)} {...props}>
      {children}
    </button>
  );
};
