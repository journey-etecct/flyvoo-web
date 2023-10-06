import { motion } from "framer-motion";
import styles from "./index.module.css";
import { reverse } from "@/components/navbar_home";
import { Outlet } from "react-router-dom";

export default function Mais() {
  return (
    <motion.div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      <div className={styles.main}>
        <Outlet />
      </div>
      <div className={styles.sidenav}></div>
    </motion.div>
  );
}
