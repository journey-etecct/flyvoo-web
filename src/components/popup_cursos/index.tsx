import { Faculdade } from "@/app/page";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function PopupCursos({
  nome,
  faculdades,
}: {
  nome: string;
  faculdades: Faculdade[];
}) {
  return (
    <motion.div
      id="ppCBG"
      className={styles.ppCBG}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div id="ppC" style={{ zIndex: 999 }}></div>
    </motion.div>
  );
}
