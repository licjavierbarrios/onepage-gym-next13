import Link from "next/link";
import ButtonPrimary from "../ui/ButtonPrimary";

const MainMenu = () => {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-4 text-white">
      <li>
        <Link
          href="#home"
          className="py-2 px-4 border-b-2 border-primary transition-colors duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="#services"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="#plans"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Plans
        </Link>
      </li>
      <li>
        <Link
          href="#contact"
          className="py-2 px-4 border-b-2 border-transparent hover:border-primary transition-colors duration-300"
        >
          Contact
        </Link>
      </li>
      <li>
        <ButtonPrimary title="Join Us" type="button" />
      </li>
    </ul>
  );
};
export default MainMenu;
