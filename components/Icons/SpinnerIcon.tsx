import { cn } from "../../base/libs/utils";
import { IIconProps } from "../../base/types/IProps";

const SpinnerIcon = ({ className }: IIconProps) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='15'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 .5V5H7V.5h1zM5.146 5.854l-3-3 .708-.708 3 3-.708.708zm4-.708l3-3 .708.708-3 3-.708-.708zm.855 1.849L14.5 7l-.002 1-4.5-.006.002-1zm-9.501 0H5v1H.5v-1zm5.354 2.859l-3 3-.708-.708 3-3 .708.708zm6.292 3l-3-3 .708-.708 3 3-.708.708zM8 10v4.5H7V10h1z'
        fill='currentColor'
      ></path>
    </svg>
  );
};

export default SpinnerIcon;
