import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Image from "next/image";
import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { poppins500 } from "@/components/navbar_home";

export const queensidesL = localFont({
  src: "../../../../../public/fonts/queensides_light.ttf",
});

export default function EsqueceuSenha() {
  const navigate = useNavigate();

  return (
    <motion.div 
    className={styles.container}
    initial={{ opacity: 0, left: reverse ? -50 : 50 }}
    animate={{ opacity: 1, left: 0 }}
    >
      <div className={styles.title}>
      <Image
        onClick={(e) => {
          e.preventDefault();
          navigate("/entrar");
        }}
        className={styles.img}
        width={40}
        height={40}
        src="/img/arrow-left.svg"
        alt="Voltar"
      />
      <h1 className={queensidesL.className} style={{fontWeight: 'normal', fontSize: 50}}>
        Recuperar minha conta
      </h1>
      </div>
      <div className={styles.form}>
      <p>Para continuar, insira seu email:<br/>
(ele será verificado)</p>
      <input
            className={styles.Email}
            style={poppins500.style}
            type="email"
            name="email"
            placeholder="Email"
          ></input>
      <button
        className={styles.enviarBtn}
        onClick={(e) => {
          e.preventDefault();
          {/* Função enviar email para redefinição */};
        }}
      >
        Enviar
      </button>
      </div>
    </motion.div>
  );
}