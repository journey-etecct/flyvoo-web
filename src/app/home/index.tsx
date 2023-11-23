// index.js
import { useEffect } from "react";
import styles from "./index.module.css";
import { CardsInteresse } from "@/components/cards_home/cardsInteresse";
import { CardsDescubra } from "@/components/cards_home/cardsDescubra";
import { carreiraData } from "@/components/cards_home/carreiraData";
import { motion } from "framer-motion";
import { reverse } from "@/components/navbar_home";

export default function Home() {
  useEffect(() => {
    document.title = "Início";
  });
  return (
    <motion.div
      style={{
        width: "90%",
        height: "100%",
        position: "absolute",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
      className={styles.container}
    >
      <div className={styles.tituloImg}>
        <h1 className={styles.titulo}>
          Bem vindo (a)! <br /> Você tem 0 notificações
        </h1>
      </div>
      <h2 className={styles.subtitulo}>Com base nos seus interesses:</h2>
      <CardsInteresse />
      <h2 className={styles.subtitulo}>Descubra novos horizontes:</h2>
      <CardsDescubra carreiraLista={carreiraData} />
    </motion.div>
  );
}
