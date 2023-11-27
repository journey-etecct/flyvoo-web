import Image from "next/image";
import styles from "./index.module.css";
import { Inter } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { Faculdade } from "@/app/page";

const inter600 = Inter({ subsets: ["latin"], weight: "600" });

export default function CardCursos({
  index,
  nome,
  faculdades,
  setPpCNome,
  setPpCFaculdades,
  setPopupCursos,
}: {
  index: number;
  nome: string;
  faculdades: [];
  setPpCNome: Dispatch<SetStateAction<string>>;
  setPpCFaculdades: Dispatch<SetStateAction<Faculdade[]>>;
  setPopupCursos: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imagem}>
        <Image src={"/img/robsongostoso.png"} alt="" fill priority />
      </div>
      <div className={styles.info}>
        <h2>Nome do curso</h2>
        <p>Faculdade(s):</p>
        <button
          className={styles.btnVerMais}
          onClick={() => {
            setPpCNome(nome);
            setPpCFaculdades(faculdades);
            setPopupCursos(true);
          }}
        >
          <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
            Ver mais
          </p>
        </button>
      </div>
    </div>
  );
}
