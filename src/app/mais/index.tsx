import { AnimatePresence, motion } from "framer-motion";
import styles from "./index.module.css";

export default function Mais() {
  return (
    <motion.div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div className={styles.main}>
        <AnimatePresence></AnimatePresence>
      </div>
      <div className={styles.sidenav}></div>
    </motion.div>
  );
}
