import { useEffect } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import CardsInteresse from "@/components/cards_home/index";
import { CardsDescubra } from "@/components/cards_home/index";
import { VscAccount } from "react-icons/vsc";


export default function Home() {
  useEffect(() => {
    document.title = "Início";
  });

  return (
    <div className={styles.container}>
      <div className={styles.tituloImg}><h1 className={styles.titulo}>Bem vindo (a)! Você tem 0 notificações</h1>
      <VscAccount className={styles.profileImg} />
      </div>
        <h2 className={styles.subtitulo}>Com base nos seus interesses:</h2>
    <CardsInteresse/>
      <h2 className={styles.subtitulo}>Descubra novos horizontes:</h2>
    <CardsDescubra/>
    </div>

  );
}
