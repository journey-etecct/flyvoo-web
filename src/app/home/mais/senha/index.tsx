import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { georama700, poppins700 } from "@/app/entrarCadastro";
import { poppins500 } from "@/components/navbar_home";

export default function Senha() {
  return (
    <motion.div
      style={{
        position: "absolute",
        padding: "2rem",
        width: "72.5%",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      <h1 className={styles.titulo} style={poppins700.style}>
        Senha
      </h1>
      <div className={styles.campo}>
        <label htmlFor="senhaAtual" style={poppins500.style}>
          Senha atual:
        </label>
        <input type="password" name="senhaAtual" id="senhaAtual" />
      </div>
      <div className={styles.campo}>
        <label htmlFor="novaSenha" style={poppins500.style}>
          Nova senha:
        </label>
        <input type="password" name="novaSenha" id="novaSenha" />
      </div>
      <div className={styles.campo}>
        <label htmlFor="confNovaSenha" style={poppins500.style}>
          Confirme a nova senha:
        </label>
        <input type="password" name="confNovaSenha" id="confNovaSenha" />
      </div>
      <div
        className={styles.atualizarBtn}
        style={georama700.style}
        onClick={() => {
          // faz coisas
        }}
      >
        Atualizar
      </div>
    </motion.div>
  );
}
