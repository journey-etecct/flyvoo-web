import Image from "next/image";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { Georama } from "next/font/google";
import { motion } from "framer-motion";
import { reverse } from "@/components/navbar";

export const georama = Georama({ subsets: ["latin"] });

export default function Inicio() {
  return (
    <motion.div
      className="animacao"
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
    >
      <div className={styles.flyBox}>
        <div className={styles.flyItens}>
          <h1 className={styles.txt} style={georama.style}>
            Sua jornada começa <br />
            aqui!
          </h1>
          <p className={styles.flyDesc}>
            Encontre sua vocação e comece sua jornada no mercado de trabalho
          </p>
          <Link className={styles.flyStart} to="/entrar">
            Comece Agora
          </Link>
        </div>
        <Image
          className={styles.flyImg}
          src="/img/inicio.png"
          width={800}
          height={550}
          alt="Duas pessoas analisando um gráfico"
        />
      </div>
    </motion.div>
  );
}
