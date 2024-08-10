import clsx from "clsx";
import React, { SVGProps } from "react";

type buttonPropps = {
  title: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton: React.FC<buttonPropps> = ({title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
    onClick={handleClick}
      className={clsx(
        "relative w-full",
        "inline-flex h-12",
        "overflow-hidden",
        "rounded-full p-[2px] focus:outline-none md:w-60 md:mt-10"
      )}
    >
      <span
        className={clsx(
          "absolute inset-[-1000%]",
          "animate-[spin_2s_linear_infinite]",
          "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        )}
      />
      <span
        className={`inline-flex h-full w-full
          cursor-pointer items-center
          justify-center rounded-full
          dark:bg-slate-950 px-7
          bg-slate-50 

          text-sm font-medium
          dark:text-white 
          text-slate-950 
          backdrop-blur-3xl gap-2
          ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;