import { motion } from "framer-motion";
import styles from "./index.module.css";
import { reverse } from "@/components/navbar_home";
import { Route, Routes } from "react-router-dom";
import Senha from "./senha";
import Conta from "./conta";
import Privacidade from "./privacidade";
import CentralAjuda from "./centralAjuda";

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
        <Routes>
          <Route path="/" Component={Conta} />
          <Route path="senha" Component={Senha} />
          <Route path="privacidade" Component={Privacidade} />
          <Route path="central" Component={CentralAjuda} />
        </Routes>
      </div>
      <div className={styles.sidenav}></div>
    </motion.div>
  );
}
