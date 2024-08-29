import React from "react";

export const TimeSvg = () => {
  return (
    <div className="dark:bg-black-200  bg-gray-200 py-5 px-5 rounded-[44px] border-2 z-10 dark:fill-green fill-slate-600">
      <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 24 24">
        <path
         
          className="dark:fill-green fill-slate-600"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
        />
        <rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1" className="dark:fill-green fill-slate-600">
          <animateTransform
            attributeName="transform"
            dur="9s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </rect>
        <rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1" className="dark:fill-green fill-slate-600">
          <animateTransform
            attributeName="transform"
            dur="0.75s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </rect>
      </svg>
    </div>
  );
};