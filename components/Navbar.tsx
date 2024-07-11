import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import { IconMenu } from "./icons/IconMenu";
import Switcher from "./Switcher";
import clsx from "clsx";
import { NavContactButton } from "./buttons/NavContactButton";

export const Navbar = () => {
  return (
    <nav
      className={clsx(
        "flex",
        "w-full",
        "items-center",
        "justify-between",
        "px-[20px] py-[16px]",
        "lg:mx-auto lg:px-20",
        "bg-[#EDF1F3] dark:bg-black"
      )}
    >
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" width={150} height={19} />
      </div>
      <ul className="hidden lg:flex gap-5 ">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">App</a></li>
      </ul>

      <div className="flex items-center justify-center">
        <div className="sm:hidden">
          <NavContactButton />
        </div>

        <div className="text-[#9747FF] pr-4 border-r-1 border-gray-600 h-5 flex items-center">
          <IconMenu className="text-[#9747FF] lg:hidden" />
        </div>

        <div className="pl-4">
          <Switcher />
        </div>
      </div>
    </nav>
  );
};
