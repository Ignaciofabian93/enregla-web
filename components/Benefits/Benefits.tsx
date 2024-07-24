import React, { FC } from "react";

type benefitsPorps = {
  paragraph: string;
  title: string;
};

export const Benefits: FC<benefitsPorps> = ({ paragraph, title }) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      <h3 className="text-[20px] dark:text-white text-gray-900 font-semibold">{title}</h3>
      <p className="text-[#837F96] text-[16px] text-justify ">{paragraph}</p>
    </div>
  );
};