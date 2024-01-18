import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { cn } from "../../libs/utils";
import EyeCloseIcon from "../Icons/EyeCloseIcon";
import EyeOpenIcon from "../Icons/EyeOpenIcon";

export const PasswordInput = ({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className='relative'>
      <input
        {...props}
        type={isPasswordShown ? "text" : "password"}
        className={cn("w-full px-4 py-2 border rounded-md text-gray-700", props.className)}
      />
      <button
        onClick={e => setIsPasswordShown(!isPasswordShown)}
        className='absolute text-gray-500 border right-4 top-1/2 -translate-y-1/2'
      >
        {isPasswordShown ? <EyeOpenIcon /> : <EyeCloseIcon />}
      </button>
    </div>
  );
};
