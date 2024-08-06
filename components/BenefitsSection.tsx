"use client";
import { motion } from "framer-motion";
import styles, { layout } from "@/lib/style";
import { benefits } from "@/lib/Benefits";
import { MovingBorderDemo } from "./buttons/ButtonMoving";
import { BenefitsCard } from "./Benefits/Card";



export const BenefitsSection = () => {
  return (
    <motion.div
      id="beneficios"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className=" flex-grow xl:flex px-4 xl:px-32 py-16 xl:py-6  scroll-m-12"
    >
      <div className="xl:w-1/2">
        <div
          className={` flex flex-col justify-center xl:p-20 p-12 rounded-[60px] xl:rounded-[100px]  bg-[#E6FFDA] dark:bg-[#001E2B]`}
        >
          <h2 className="font-normal text-[38px] xl:text-6xl xl:max-w-[700px]  dark:text-white text-black-100 xl:leading-[76.8px] leading-[50px] w-full mb-4">
            {" "}
            <span className="font-semibold text-[#25D366]">Beneficios</span> de grabar tu patente
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-5 mb-8 dark:text-white-200`}>
            Esta medida no solo cumple con la Ley 21.601, sino que también introduce cambios significativos en la forma
            en que identificamos nuestros vehículos.
          </p>
          {/* <Button styles="mt-10" /> */}
          <MovingBorderDemo title="Contáctanos"></MovingBorderDemo>
        </div>
      </div>

      <div className={`${layout.sectionImg} flex flex-col items-start`}>
        {benefits.map((benefit, index) => (
          <BenefitsCard key={benefit.id} {...benefit} index={index} />
        ))}
      </div>
    </motion.div>
  );
};
