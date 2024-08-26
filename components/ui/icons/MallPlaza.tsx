
import React, { FC, SVGProps } from "react";

type SvgProps = SVGProps<SVGSVGElement>;

export const MallPlaza: FC<SvgProps> = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="201" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33.5 36.3008c-1.3.7-2.4.7-2.9.1-.1-.1-.1-.2-.1-.4v-.2c0-.3.1-.8.3-1.1 1.8-3.3 7.5-10 7.5-16 0-5.6-1.5-8.90002-2.8-11.10002-.3-.4-.6-1-.8-1.5-.1-.1-.1-.3-.1-.5 0-.7.6-1.3 1.3-1.3.1 0 .3 0 .4.1.7.2 1.4.7 2.2 1.2 3.5 2.6 7.9 8.50002 7.9 13.10002 0 7.9-9.2 15.9-12.9 17.6Zm-14.1 1.4c0 .2-.1.5-.3.6 0 0-.7.5-1.7.8-.9.3-2 .5-3.6.7-6.3.4-10.6-4.7-10.8-8.2v-.8c.2-1.2 1.2-2.2 2.5-2.3 1-.1 2 .5 2.5 1.3 0 .1 0 .2.1.2.1.2.2.5.4.7.3.7.7 1.4 1.1 2.1 2.2 3.4 5.2 4.2 7.8 4.3h1.3c.4 0 .7.3.7.6Zm8-15.2c-2.3 4.4-7 6.4-9.2 4.8-2.2-1.6-3.7-5.5-2.3-8.3 1.8-3.6 7-4.6 9.9-3.1 2.4 1 3.1 3.8 1.6 6.6Zm2.5-12.4c-5.9-2.80002-16.2-.90002-19.8 6.3-2.8 5.6.3 13.3 4.6 16.6 4.4 3.3 13.8-.7 18.4-9.5 2.9-5.7 1.6-11.1-3.2-13.4Z"
        className="dark:fill-white fill-black-100"
      />
      <path
        className="dark:fill-white fill-black-100"
        d="M176.999 30.3012h-14s-1.9.1-1-1.7l7.2-12.2h-3.5c-3.7 0-3.3-3.7-3.3-3.7h12.4c.4 0 1.7.2.8 1.8l-7.3 12.1h5.9c2.7 0 2.9 2.7 2.8 3.7Zm-95.7998-16.2c.9 1.1 1.4 2.8 1.4 5.2v9c0 1.3-1.1 2.4-2.4 2.4-.8 0-1.6-.1-2.4-.2v-10c0-1.2-.1-2.2-.5-2.8-.3-.7-.9-1-1.9-1-.4 0-.8 0-1.1.2-.3.2-.7.3-1 .6-.3.3-.6.7-.8 1.3-.2.6-.3 1.3-.3 2.2v7.3c0 1.3-1.1 2.4-2.4 2.4-.8 0-1.6-.1-2.4-.2v-9.9c0-1.2-.1-2.2-.5-2.8-.3-.7-.9-1-1.9-1-.4 0-.8 0-1.2.2-.4.1-.7.3-1 .7-.3.3-.6.8-.7 1.4-.2.6-.3 1.4-.3 2.3v7.9s0 .1-.1.1c-.4.7-1.2 1.2-2.1 1.2-.8 0-1.6-.1-2.4-.2v-17.5c.3-.1.6-.1 1-.2h2.1c.3 0 .6.1.9.2.1.1.1.3.2.5s.1.4.2.7c0 .2.1.5.1.7 0 .2.1.4.1.6.2-.3.4-.7.7-1 .3-.3.6-.6 1.1-.9.4-.3.9-.5 1.4-.7.5-.2 1.1-.3 1.7-.3 2.8 0 4.5 1 5.3 3.1.5-.8 1.1-1.6 1.9-2.2.8-.6 1.9-.9 3.2-.9 1.8 0 3.2.5 4.1 1.6Zm13.1 12.7c-.3 0-.5.1-.9.2-.3.1-.7.1-1 .1-.3 0-.7 0-1-.1-.4 0-.8-.1-1.1-.3-.4-.1-.7-.4-.9-.7-.3-.3-.4-.8-.4-1.4 0-.9.3-1.5 1-1.9.7-.4 1.5-.6 2.6-.6h.8c.3 0 .6.1.9.1v4.6Zm2.7-12.7c-1.3-1.1-3.2-1.7-5.5-1.7-.9 0-1.8.1-2.8.2-.4.1-.8.2-1.3.3-.1 0-.2 0-.3.1-.5.1-.9.3-1.4.4 0 .6.1 1.1.2 1.6 0 .1 0 .2.1.3 0 .1 0 .1.1.2.3.6.9 1.1 1.7 1.1h.3c.1 0 .2 0 .3-.1.8-.2 1.6-.3 2.3-.3.6 0 1.1 0 1.6.1s.9.2 1.2.4c.3.2.6.5.8.8.2.3.3.8.3 1.3v.4c-.8-.1-1.5-.1-2.2-.1-.9 0-1.8.1-2.7.3-.9.2-1.7.5-2.5.9-.7.4-1.3 1-1.8 1.8-.5.7-.7 1.7-.7 2.7 0 1.1.2 2 .6 2.8.4.8.9 1.4 1.6 1.8.7.5 1.5.8 2.5 1 1 .2 2 .3 3.2.3 1.4 0 3.6-.3 4.9-.6 1.2-.3 1.9-1.2 1.9-2.3v-8.4c-.4-2.4-1-4.2-2.4-5.3Zm89.9998 12.6c-.3 0-.5.1-.9.1-.3.1-.7.1-1 .1h-1c-.4 0-.8-.1-1.1-.3-.4-.1-.7-.4-.9-.7-.2-.3-.4-.8-.4-1.4 0-.9.3-1.5 1-1.9.7-.4 1.5-.6 2.6-.6h.9c.3 0 .6.1.9.1l-.1 4.6Zm2.7-12.7c-1.3-1.1-3.2-1.7-5.6-1.7-.9 0-1.8.1-2.8.2-.4.1-.9.1-1.3.3-.1 0-.2 0-.3.1-.5.1-.9.3-1.4.4 0 .6 0 1.1.2 1.6 0 .1 0 .2.1.3 0 .1 0 .1.1.2.3.6.9 1.1 1.7 1.1h.3c.1 0 .2 0 .3-.1.8-.2 1.6-.3 2.3-.3.6 0 1.1 0 1.6.1s.8.2 1.2.4c.3.2.6.5.8.8.2.3.3.8.3 1.3v.4c-.8-.1-1.5-.1-2.2-.1-.9 0-1.8.1-2.7.3-.9.2-1.7.5-2.5.9-.7.4-1.3 1-1.8 1.8-.5.7-.7 1.7-.7 2.7 0 1.1.2 2 .6 2.8.4.8.9 1.4 1.6 1.8.7.5 1.5.8 2.5 1 1 .2 2 .3 3.2.3 1.4 0 3.6-.3 4.9-.6 1.2-.3 1.9-1.2 1.9-2.3v-8.4c-.3-2.4-1-4.2-2.3-5.3Zm-33.8 12.7c-.3 0-.5.1-.9.1-.3.1-.7.1-1 .1h-1c-.4 0-.8-.1-1.1-.3-.4-.1-.7-.4-.9-.7-.3-.3-.4-.8-.4-1.4 0-.9.3-1.5 1-1.9.7-.4 1.5-.6 2.6-.6h.9c.3 0 .6.1.9.1l-.1 4.6Zm2.7-12.7c-1.3-1.1-3.2-1.7-5.5-1.7-.9 0-1.8.1-2.8.2-.4.1-.8.1-1.3.3-.1 0-.2 0-.3.1-.5.1-.9.3-1.4.4 0 .6.1 1.1.2 1.6 0 .1 0 .2.1.3 0 .1 0 .1.1.2.3.6.9 1.1 1.7 1.1h.3c.1 0 .2 0 .3-.1.8-.2 1.6-.3 2.3-.3.6 0 1.1 0 1.6.1s.8.2 1.2.4c.3.2.6.5.8.8.2.3.3.8.3 1.3v.4c-.8-.1-1.5-.1-2.2-.1-.9 0-1.8.1-2.7.3-.9.2-1.7.5-2.5.9-.7.4-1.3 1-1.8 1.8-.5.7-.7 1.7-.7 2.7 0 .6 0 1.1.1 1.5-.2 0-1.6.2-1.8.3h-.6c-.4 0-.8 0-1-.1-.3-.1-.5-.3-.7-.5-.2-.2-.3-.6-.4-1-.1-.4-.1-1-.1-1.7V7.50117c0-1.3-1.1-2.3-2.4-2.3-.8 0-1.6.1-2.4.2V24.4012c0 2.2.5 3.8 1.6 4.7 1.1 1 2.5 1.4 4.2 1.4.4 0 .9 0 1.4-.1.4 0 3.3-.6 4.6-.8.6.3 1.3.6 2.1.8 1 .2 2 .3 3.2.3 1.4 0 3.6-.3 4.9-.6 1.2-.3 1.9-1.2 1.9-2.3v-8.4c-.2-2.5-.9-4.3-2.3-5.4Zm-29.8 11.6c-.7.9-1.8 1.4-3.2 1.4-.8 0-1.5-.1-2.1-.3v-6c0-.6.1-1.1.2-1.6s.3-.9.5-1.3c.3-.4.6-.7 1-.9.4-.2.9-.3 1.5-.3s1.1.1 1.6.4c.4.3.8.6 1 1 .3.4.5.9.6 1.6.1.6.2 1.3.2 2-.2 1.7-.5 3.1-1.3 4Zm4.3-11c-.6-.7-1.4-1.3-2.2-1.7-.8-.4-1.8-.5-2.7-.5-.6 0-1.2.1-1.7.3-.5.2-1 .4-1.4.7-.4.3-.8.6-1.1.9-.3.3-.6.7-.8 1.1 0-.2 0-.4-.1-.6v-.2c-.7-2.1-4.4-1-4.4-1v12.9c-.3.1-1 .2-1.2.2h-.6c-.4 0-.8 0-1-.1-.3-.1-.5-.3-.7-.5-.2-.2-.3-.6-.4-1-.1-.4-.1-1-.1-1.7V7.60117c0-1.3-1.1-2.3-2.4-2.3-.8 0-1.6.1-2.4.2V24.5012c0 .7.1 1.4.2 2-.3.1-1 .2-1.2.2h-.6c-.4 0-.8 0-1-.1-.3-.1-.5-.3-.7-.5-.2-.2-.3-.6-.4-1-.1-.4-.1-1-.1-1.7V7.60117c0-1.3-1.1-2.3-2.4-2.3-.8 0-1.6.1-2.4.2V24.5012c0 2.2.5 3.8 1.6 4.7 1.1 1 2.5 1.4 4.2 1.4.4 0 .9 0 1.4-.1.5 0 3.3-.5 3.9-.7.9.5 2 .8 3.2.8.4 0 .9 0 1.4-.1.2 0 .9-.1 1.6-.2v8.2c.4.1.8.1 1.2.1h1.3c1.2 0 2.2-.9 2.4-2.1v-5.9c.2 0 .6.1.9.1h1.1c1.5 0 2.8-.2 4-.7 1.2-.4 2.2-1.1 3-1.9.8-.8 1.4-1.8 1.9-3 .4-1.2.7-2.5.7-4s-.2-2.8-.5-4c-.4-.8-.9-1.8-1.5-2.5Zm62.8 2.5c-.3 0-.6 0-.9-.1-.3-.1-.5-.2-.7-.4-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9 0-.3.1-.7.2-.9.1-.3.3-.5.5-.7.2-.2.4-.3.7-.4.3-.1.5-.1.8-.1.3 0 .6 0 .9.1.3.1.5.3.7.4.2.2.3.4.4.7.1.3.1.6.1.9 0 .3-.1.7-.2.9-.1.3-.3.5-.5.7-.2.2-.4.3-.7.4-.2 0-.5.1-.8.1Zm0-.5c.5 0 .9-.1 1.2-.4.3-.3.4-.7.4-1.3 0-.6-.1-1-.4-1.3-.3-.3-.7-.4-1.2-.4s-.8.1-1.1.4c-.3.3-.4.7-.4 1.3 0 .6.1 1 .4 1.3.2.3.6.4 1.1.4Zm-.8-2.8h.8c.2 0 .3 0 .5.1.1 0 .2.1.3.1.1.1.1.1.1.2v.2c0 .1 0 .3-.1.4 0 .1-.1.2-.3.2l.4.9h-.5l-.4-.8h-.4v.8h-.5l.1-2.1Zm.8.9c.2 0 .3 0 .3-.1v-.2c0-.1 0-.1-.1-.2 0 0-.2-.1-.4-.1h-.3v.5h.5v.1Z"
        
      />
    </svg>
  );
};
