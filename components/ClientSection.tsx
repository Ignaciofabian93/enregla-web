"use client";
import React from "react";
import { motion } from "framer-motion";
import { Paragraph } from "./text/Paragraph";
import { ClientsImage } from "@/components/IconsImages/ClientsIcons";
import clsx from "clsx";

export const ClientSection = () => {
  return (
    <section className="pb-20 px-4">
      <div className={clsx("flex flex-col", "items-center", "gap-4 mt-10")}>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-gray-900 font-semibold text-[12px] dark:text-gray-400"
        >
          AYUDANDO A LA GENTE A PROGER SUS VEHICULOS
        </motion.p>
        <Paragraph text="Nuestra tecnología en grabado de patentes es la elección preferida de los principales concesionarios y distribuidores automotrices en Chile." />
      </div>
      <div className="flex flex-col items-center justify-center gap-16 pt-10">
        <ClientsImage />
        <motion.p className="text-3xl dark:text-gray-100 text-gray-900 font-bold text-center">
          "Auto en regla, auto seguro"
        </motion.p>
      </div>
    </section>
  );
};