import Image from "next/image";
import styles from "./index.module.css";
import { Button } from "@mui/material-next";
import { Inter } from "next/font/google";

const inter600 = Inter({ subsets: ["latin"], weight: "600" });

export default function CardCursos({
  index,
  nome,
  faculdades,
}: {
  index: number;
  nome: string;
  faculdades: [];
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imagem}>
        <Image src={"/img/robsongostoso.png"} alt="" fill />
      </div>
      <div className={styles.info}>
        <h2>Nome do curso</h2>
        <p>Faculdade(s):</p>
        <Button variant="filled">
          <p style={{ ...inter600.style, margin: 0 }}>Ver mais</p>
        </Button>
      </div>
    </div>
  );
}
