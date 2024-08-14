"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Links } from "@/components/00_Nav/Links";
import { Social } from "@/components/ui/Social";
import { MenuButon } from "@/components/ui/buttons/MenuButon";
import { CloseButton } from "@/components/ui/buttons/CloseButton";
import { ThemeSwitch } from "@/components/ui/buttons/ThemeSwitch";
import { useHandleNav } from "@/hooks/useHandleNav";
import { LinksMenu } from "@/components/00_Nav/LinksMenu";
import { IoMdContact } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavSection = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBorder, setShowBorder] = useState(false);
  const { handleNav, menuOpen } = useHandleNav();
  // const path = usePathname();
  // const isMenuVisible = path !== "/contact";

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Desplazamiento hacia abajo
      setShowBorder(true);
    } else {
      // Desplazamiento hacia arriba o en la parte superior
      setShowBorder(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={clsx(
        "fixed w-full h-20 z-[99999] xl:px-16 px-4",
        // "shadow-md",
        "backdrop-blur-[1rem]",
        "text-gray-900 z-[20]",
        { "border-b-[1px] border-slate-200 dark:border-slate-900": showBorder }

        /*dark mode */
        // "dark:bg-[#43435C]",
        // "dark:border-gray-800",
        // "dark:bg-opacity-50",
      )}
    >
      <div className="flex justify-between items-center h-full w-full">
        <Logo />
        <Links />
        <div className="flex items-center justify-center gap-5">
          <MenuButon onClick={handleNav} />
          <div
            className={clsx("fixed z-[9999] top-0", "w-[100%] h-screen", "p-8 ease-in-out duration-500", {
              "left-0 bg-[#ecf0f3] dark:bg-black-100": menuOpen,
              "left-[-100%]": !menuOpen,
            })}
          >
            <div className="flex justify-between">
              <div className="flex items-center">
                <Logo />
              </div>
              <div className="flex gap-3">
                <ThemeSwitch />
                <CloseButton onclick={handleNav} />
              </div>
            </div>
            <LinksMenu onClick={handleNav} />
            <Social />
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-8 xl:gap-4">
            <Link href="#contact">
              <IoMdContact className="text-[24px] dark:text-green cursor-pointer hidden md:block xl:block" />
            </Link>
            {/* <ButtonContactNav/> */}
            <FaWhatsapp className="dark:text-green text-[24px] cursor-pointer hidden md:block xl:block" />
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};