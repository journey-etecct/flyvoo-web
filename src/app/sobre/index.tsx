import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.css";
import localFont from "next/font/local";
import { georama } from "../inicio";

const sometype = localFont({
  src: "../../../public/fonts/sometype.ttf",
});
const nunito = localFont({
  src: "../../../public/fonts/nunito.ttf",
});

export default function Sobre() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      className={styles.container}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
    >
      <div className={styles.flyItens}>
        <h1 className={styles.txt} style={georama.style}>
          Sobre o Flyvoo
        </h1>
        <p className={styles.flyDesc} style={nunito.style}>
          O Flyvoo foi feito para te auxiliar e te direcionar para o mercado de
          trabalho, da forma mais inclusiva e benéfica possivel, com o objetivo
          de melhorar ou inserir você na sua área de preferência profissional da
          melhor forma.
        </p>
        <p className={styles.credit} style={sometype.style}>
          © 2023 Journey
          <br />
          Todos os direitos reservados
        </p>
      </div>
      <div className={styles.flyImg}>
        <Image
          src="/img/amico.svg"
          priority
          width={669.4}
          height={598}
          alt="Diversas pessoas trabalhando em diferentes locais de uma sala, todas usando notebook"
        />
      </div>
    </motion.div>
  );
}
