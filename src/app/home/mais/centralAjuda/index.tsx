import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { poppins700 } from "@/app/entrarCadastro";

export default function CentralAjuda() {
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
        Central de Ajuda
      </h1>
    </motion.div>
  );
}
