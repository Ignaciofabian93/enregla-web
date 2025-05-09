"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import autos from "@/public/assets/img/autos.png";
import clsx from "clsx";
import { TitleResponsability } from "../ui/titles/TitleResponsability";

export const Responsability = () => {
  return (
    <motion.div
      id="Responsability"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="flex-grow xl:flex px-8 xl:px-32 xl:mb-32 justify-center items-center xl:pt-32 pt-10 pb-10 lg:mb-32"
    >
      <div className="flex flex-col gap-4 items-center">
        <TitleResponsability title="de las automotoras" text="Responsabilidad" />

        <div className="flex flex-col items-center justify-center gap-2">
          <p className="xl:text-center text-[20px] font-semibold dark:text-white text-black">
            ¿De cuánto es la multa por no hacer el grabado de patente en el plazo establecido?
          </p>

          <p
            className={clsx(
              // default styles
              "font-normal",
              "text-[18px]",
              "leading-[30.8px]",
              "text-black-100",
              "text-justify",
              "w-full",
              "xl:text-center",

              // xl
              "xl:max-w-[900px]",

              // lg
              "lg:text-center",
              "lg:max-w-[900px]",

              // dark mode
              "dark:text-white-200"
            )}
          >
            En caso de que Carabineros o fiscalizadores del Ministerio de Transportes te descubran
            conduciendo sin el grabado de patente después del plazo antes mencionado, se considerará
            como una falta grave a la Ley de Tránsito. Esto implica una multa de entre 1 a 1,5 UTM,
            es decir, entre $65.901 y $98.851 al valor de la UTM de agosto de 2024.
          </p>
          <Image
            className="w-[1000px] h-auto pt-10"
            width={500}
            height={500}
            alt="autos"
            priority={true}
            src={autos}
          />
        </div>
      </div>
    </motion.div>
  );
};
