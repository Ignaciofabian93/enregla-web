"use client";
"react-dom";
import MainLayout from "@/components/layout";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitBtn } from "@/components/buttons/Submit-btn";
import { toast } from "react-toastify";

export default function contact() {
  return (
    <MainLayout>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        id="contact"
        className="w-full h-screen flex flex-col justify-center items-center mt-20"
      >
        <h1 className="text-black dark:text-white text-2xl  md:text-3xl lg:5xl xl:text-6xl text-center font-semibold">
          Contáctanos
        </h1>
        <p className="text-slate-700 dark:text-slate-400 text-center">
          Por favor contactanos directamente{" "}
          <a className="underline cursor-pointer" href="mailto:">
            contacto@enregla.net
          </a>{" "}
          o atravez de este formulario
        </p>

        <form
          className="mt-10 flex gap-2 flex-col xl:px-0 px-8 w-full xl:w-1/2 text-black"
          action={async (FormData) => {
            const { data, error } = await sendEmail(FormData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Correo enviado!");
          }}
        >
          <input
            className="h-14 rounded-lg bg-white w-full border border-black/10 p-4"
            name="senderName"
            placeholder="Nombre"
            required
            maxLength={30}
            type="text"
          />

          <input
            className="h-14 rounded-lg bg-white w-full border border-black/10 p-4"
            name="senderEmail"
            placeholder="Email"
            required
            maxLength={500}
            type="email"
          />
          <textarea
            className="h-52 w-full bg-white mb-4 p-4 rounded-lg"
            placeholder="Escribe tu mensaje"
            name="message"
            maxLength={5000}
            required
          ></textarea>
          <SubmitBtn />
        </form>
      </motion.section>
    </MainLayout>
  );
}
