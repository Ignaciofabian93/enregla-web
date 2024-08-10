"use client";
import React from "react";
import styles from "@/lib/style";
import clsx from "clsx";
import { ButtonContact } from "./buttons/ContactButton";

const CTA = () => {
  return (
    <section
      id="contacto"
      className={clsx(
        "z-[20] relative mb-64 scroll-m-60",
        "xl:flex xl:items-center",
        "xl:justify-around",
        //dark mode
        "dark:bg-black-100"
      )}
    >
      <div
        className={clsx(
          "xl:flex shadow-card-white",
          "xl:flex-1 xl:justify-between",
          "xl:items-center gap-5",
          "xl:py-14 xl:px-20 py-8 px-10",
          "bg-white",
          "dark:bg-black-200"
        )}
      >
        <div className="flex flex-col  xl:px-10">
          <h2
            className={clsx(
              "font-normal",
              "text-[32px] md:text-[40px]",
              "xl:text-6xl xl:max-w-[700px]",
              "text-balck-200",
              "text-black-400",
              "dark:text-white",
              "xl:leading-[70px]",
              "leading-[35px]",
              "w-full mb-4"
            )}
          >
            ¿Interesado en <span className="text-green font-semibold">nuestros sevicios?</span>
          </h2>
          <p
            className={clsx(
              "font-normal",
              "dark:text-white-300",
              "text-[18px]",
              "leading-[30.8px]",
              "text-black-100",
              "max-w-[600px] text-black-200"
            )}
          >
            Estamos comprometidos con brindar soluciones de grabado de patentes de alta calidad a diversos sectores del
            mercado.
          </p>
        </div>
        <div>
          <ButtonContact />
        </div>
      </div>
    </section>
  );
};

export default CTA;