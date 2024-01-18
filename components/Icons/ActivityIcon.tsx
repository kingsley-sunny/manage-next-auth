import { IIconProps } from "../../base/types/IProps";
import { cn } from "../../libs/utils";

const ActivityIcon = ({ className }: IIconProps) => {
  return (
    <svg
      className={cn("w-6 h-6", className)}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
    </svg>
  );
};

export default ActivityIcon;
