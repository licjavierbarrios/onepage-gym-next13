import MainMenu from "@/components/shared/MainMenu";
import { cn } from "@/libs/utils";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const MenuMobile = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 w-[80%] sm:w-[40%] h-full z-50 bg-black flex items-center justify-center transition-all duration-300 ease-in-out",
          !isOpen ? "-left-full" : "left-0"
        )}
      >
        <MainMenu />
      </div>
      <div
        onClick={onClose}
        className={cn(
          "fixed left-0 top-0 w-full h-full bg-black/30 z-40",
          !isOpen ? "hidden" : "block"
        )}
      ></div>
    </>
  );
};
export default MenuMobile;
