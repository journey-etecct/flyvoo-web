import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function PopupPolitica() {
  return (
    <motion.div
      className={styles.popup}
      id="popup"
      initial={{ right: "-100px" }}
      animate={{ right: "20px" }}
      transition={{ ease: "circIn", delay: 0.5 }}
    >
      <span>texto</span>
      <br />
      <span>texto</span>
      <div className={styles.botoes}>
        <div className={styles.botaoAceitar}>botao1</div>
        <div className={styles.botaoLer}>botao2</div>
      </div>
    </motion.div>
  );
}
