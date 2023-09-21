import { Montserrat } from "next/font/google";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export const montserrat = Montserrat({ subsets: ["latin"] });

export default function PopupPolitica() {
  return (
    <motion.div
      className={styles.popup}
      id="popup"
      /* initial={{ right: "-500px" }} */
      animate={{ right: "20px" }}
      transition={{ ease: [0, 0.71, 0.2, 1.01], delay: 1, duration: 0.8 }}
    >
      <span className={`${styles.title} ${montserrat.className}`}>
        Sua Privacidade
      </span>
      <span className={`${styles.content} ${montserrat.className}`}>
        Ao se cadastrar, você concorda com nossos
        <br />
        Termos de Uso e Política de Privacidade
      </span>
      <div className={`${styles.botoes} ${montserrat.className}`}>
        <div className={styles.botaoAceitar}>Aceito</div>
        <div className={styles.botaoLer}>Ler Termos</div>
      </div>
    </motion.div>
  );
}
