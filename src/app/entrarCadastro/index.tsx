import { reverse } from "@/components/navbar";
import { motion } from "framer-motion";
import styles from "./entrarCadastro.module.css";

export default function EntrarCadastro() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
    >
      <div className={styles.form}>
        <div className={styles.formEntrar}>
          <h1>Entrar</h1>
          <input className={styles.Email} type="email" name="email" placeholder="Email"></input>
          <input className={styles.Senha} type="password" name="senha" placeholder="senha"></input>
        </div>
          <div className={styles.formCadastrar}>

        </div>
      </div>
    </motion.div>
  );
}
