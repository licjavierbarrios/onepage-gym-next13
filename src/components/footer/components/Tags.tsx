import { cn } from "@/libs/utils";

type Props = {
  title: string;
  active?: boolean;
};
const Tags = ({ title, active }: Props) => {
  return <span className={cn("py-1 px-2 rounded bg-gray-light", active && "bg-primary text-white")}>{title}</span>;
};

export default Tags;
