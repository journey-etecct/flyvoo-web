import { reverse } from "@/components/navbar_home";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import CardCursos from "@/components/cards_cursos";

const nunito900 = Nunito({ subsets: ["latin"], weight: "900" });

export default function Cursos() {
  const [lista, setLista] = useState<number[]>([]);

  useEffect(() => {
    for (var i = 0; i == 50; i++) {
      setLista((oldLista) => [...oldLista, i]);
    }
  }, [setLista]);

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      <h1 style={nunito900.style} className={styles.titulo}>
        Cursos
      </h1>
      <div className={styles.lista}>
        {lista.map((index) => {
          return <CardCursos key={index} index={index} />;
        })}
      </div>
    </motion.div>
  );
}
