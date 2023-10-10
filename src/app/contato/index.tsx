import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import React from "react";
import { georama800 } from "../inicio";
import Image from "next/image";

let jaFoi: boolean = false;

export default function Contato() {
  return (
    <motion.div
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
      className="animacao"
      style={{ flexDirection: "column" }}
    >
      <h1 className={styles.titulo} style={georama800.style}>
        Contate-nos
      </h1>
      <div className={styles.pageContainer}>
        <div className={styles.contatoContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="nome" className={styles.label}>
                Nome
              </label>
              <input type="text" id="nome" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                autoComplete="email"
              />
            </div>
            <div
              className={styles.inputContainer}
              style={{ paddingBottom: "3px" }}
            >
              <label htmlFor="mensagem" className={styles.label}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                className={styles.textarea}
                rows={8}
              ></textarea>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.enviarButton}>Enviar</button>
            </div>
          </div>
          <div className={styles.mapaContainer}>
            <svg
              className={styles.spinner}
              width="65px"
              height="65px"
              viewBox="0 0 66 66"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className={styles.path}
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
              ></circle>
            </svg>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.3905266027887!2d-46.40897694582364!3d-23.59361175030477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6f7090183c91%3A0x7fafdf938dd0eb78!2sSchool%20Cidade%20Tiradentes%20State%20Technical!5e0!3m2!1sen!2sbr!4v1696536060320!5m2!1sen!2sbr"
              style={{ border: 0 }}
              loading="lazy"
              className={styles.mapa}
            ></iframe>
          </div>
        </div>
        <div className={styles.imagemContainer}>
          <Image
            src="/img/contato.svg"
            alt="Descrição da imagem"
            fill
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
