import { reverse } from "@/components/navbar_home";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { Nunito } from "next/font/google";
import { useEffect, useState } from "react";
import CardCursos from "@/components/cards_cursos";

const nunito900 = Nunito({ subsets: ["latin"], weight: "900" });

export default function Cursos() {
  const [lista, setLista] = useState<number[]>([]);

  function _pegarListaCursos(): number[] {
    let listaTemp: number[] = [];
    for (let i = 0; i <= 20; i++) {
      listaTemp.push(i);
    }
    setLista(listaTemp);
    return lista;
  }

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
        <CardCursos index={2} />
        <CardCursos index={2} />
        <CardCursos index={2} />
        {_pegarListaCursos().toString()}
      </div>
    </motion.div>
  );
}
