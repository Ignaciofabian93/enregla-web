"use client";
import Link from "next/link";
import { navigationMenu } from "../constants/navigation";
import { MenuIcon } from "@/assets/icons/menu";
import Image from "next/image";
import { useState } from "react";

const enreglaLogo = require("@/assets/images/logo.png");
const enreglaName = require("@/assets/images/enregla.png");

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="relative w-[60px] h-screen">
      <nav className="w-[60px] h-screen flex flex-col items-center justify-between py-[16px] bg-[#43435C] absolute top-0 left-0 z-10">
        <div
          onClick={toggle}
          className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#575779] cursor-pointer"
        >
          <MenuIcon color="#fff" />
        </div>
        <ul className="w-full h-[calc(100%_-_280px)] flex flex-col items-center justify-evenly">
          {navigationMenu.map(({ name, path, icon }) => (
            <Link href={path} key={name}>
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#575779]">
                {icon}
              </div>
            </Link>
          ))}
        </ul>
        <div className="w-[80%] h-[50px] flex items-center justify-center">
          <Image src={enreglaLogo} alt="Enregla Logo" />
        </div>
      </nav>
      <aside
        className={`w-[120px] h-screen flex flex-col items-center justify-between py-[16px] bg-[#43435C]
          ${
            isOpen ? "translate-x-0" : "-translate-x-[180px]"
          } transition-transform duration-500 absolute top-0 left-[60px]
          `}
      >
        <div className="w-full h-[40px]" />
        <ul className="w-full h-[calc(100%_-_280px)] flex flex-col items-center justify-evenly">
          {navigationMenu.map(({ name, path }) => (
            <Link href={path} key={name}>
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <span className="text-[14px] mb-[8px]">{name}</span>
              </div>
            </Link>
          ))}
        </ul>
        <div className="w-[60%] h-[40px] flex items-center justify-center">
          <Image src={enreglaName} alt="Enregla Logo" />
        </div>
      </aside>
    </header>
  );
}
