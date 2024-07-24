import React, { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { IconAuto } from "../icons/IconAuto";


type CardProps = {
  title: string;
  paragraph: string;
  color: string;
};

export const Card: FC<CardProps> = ({ title, paragraph, color }) => {
  return (
    <article className="flex flex-col p-10 m-4 rounded-[30px] dark:bg-[#16131A] bg-gray-50 justify-between h-[340px]">
      <div className="flex flex-col gap-4">
        <h2 className="text-[24px] text-gray-900 font-bold dark:text-gray-50">{title}</h2>
        <p className="text-[#A4A0B9] text-justify">{paragraph}</p>
      </div>

      <div className="flex items-center justify-between">
        
          <IconAuto color={color}/>
        
        <div className="flex items-center gap-3">
          <p className="dark:text-gray-50 text-gray-900 font-semibold">EXPLORA MAS</p>
          <GoChevronRight className="text-3xl dark:text-gray-50 text-gray-900 " />
        </div>
      </div>
    </article>
  );
};