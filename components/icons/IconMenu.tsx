import React, { SVGProps } from 'react'

export const IconMenu = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="38"
        d="M88 152h336M88 256h336M88 360h336"
        className='dark:text-[#7ADB78]'
      />
    </svg>
  );
}
