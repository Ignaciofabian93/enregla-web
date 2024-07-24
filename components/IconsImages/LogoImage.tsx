import React from "react";
import Image from "next/image";
import clsx from "clsx";
import logoDark from "@/public/assets/img/logo-negro.png";
import logoWhite from "@/public/assets/img/logo-blanco.png";
import { motion } from "framer-motion";

export const LogoImage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Image
          className={clsx(
            "left-4",
            "fixed top-6",
            "lg:block md:block",
            "dark:hidden"
          )}
          src={logoDark}
          alt="logoDark"
          quality="95"
          priority
          width={150}
          height={35}
          
          />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
        className="hidden dark:block"
      >
        <Image
          className={clsx(
            "left-4",
            "fixed top-6",
            "lg:block md:block sm:hidden"
          )}
          src={logoWhite}
          alt="logoWhite"
          quality="95"
          priority
          width={150}
          height={35}
          />
      </motion.div>
    </>
  );
};