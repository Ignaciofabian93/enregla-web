import React, { SVGProps } from 'react'

export const IconMenu = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 512 512"
          {...props}
        >
          <path
            fill={props.fill}
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="38"
            d="M88 152h336M88 256h336M88 360h336"
          />
        </svg>
      );
}
