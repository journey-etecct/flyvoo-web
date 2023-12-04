import React from "react";
import styles from "@/app/inicio/sobre/index.module.css";
import Image from "next/image";

function CardSobre({
  nome,
  descricao,
  foto,
}: {
  nome: string;
  descricao: string;
  foto: string;
}) {
  return (
    <div className={styles.cardMembro}>
      <div
        className={styles.imgCircle}
        style={
          nome == "Danilo Lima"
            ? {
                background: "rgba(251, 86, 7, 0.4)",
              }
            : {}
        }
      >
        <Image
          src={foto}
          alt={`Foto do ${nome}`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.namePos}>
          <strong>{nome}</strong>
        </h3>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
}

export default CardSobre;
