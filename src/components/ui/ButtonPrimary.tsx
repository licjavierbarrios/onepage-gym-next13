import { FC } from "react";
import { cn } from "@/libs/utils";

interface ButtonPrimaryProps {
  title: string;
  type: "button" | "submit";
  className?: string;
}
const ButtonPrimary: FC<ButtonPrimaryProps> = ({ title, type, className }) => {
  return (
    <button
      type={type}
      className={cn(
        "py-2 px-4 border-b-2 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary transition-colors duration-300",
        className
      )}
    >
      {title}
    </button>
  );
};
export default ButtonPrimary;
