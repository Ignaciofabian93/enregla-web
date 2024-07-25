"use client"
import React from "react";
import { IoMenu } from "react-icons/io5";
import {motion} from "framer-motion"

type ButtonProps = {
  onClick: () => void
}

export const MenuButon:React.FC<ButtonProps> = ({onClick}) => {
  return (
    <motion.div>
      <button className="cursor:pointer" onClick={onClick}>
        <IoMenu className="text-3xl lg:hidden md:block dark:text-purple-500  hover:text-green-400 transition-all" />
      </button>
    </motion.div>
  );
};
