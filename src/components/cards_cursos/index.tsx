import Image from "next/image";
import styles from "./index.module.css";
import { Inter } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { Faculdade, ListaFaculdades } from "@/app/page";

export const inter600 = Inter({ subsets: ["latin"], weight: "600" });

export function faculdadesToString(faculdades: ListaFaculdades): string {
  var stringFinal: string = "";
  if (faculdades.IFSP != undefined) {
    if (stringFinal == "") {
      stringFinal += "IFSP";
    } else {
      stringFinal += ", IFSP";
    }
  }
  if (faculdades.SPTech != undefined) {
    if (stringFinal == "") {
      stringFinal += "SPTech";
    } else {
      stringFinal += ", SPTech";
    }
  }
  if (faculdades.UNESP != undefined) {
    if (stringFinal == "") {
      stringFinal += "UNESP";
    } else {
      stringFinal += ", UNESP";
    }
  }
  if (faculdades.UNIFESP != undefined) {
    if (stringFinal == "") {
      stringFinal += "UNIFESP";
    } else {
      stringFinal += ", UNIFESP";
    }
  }
  if (faculdades.USP != undefined) {
    if (stringFinal == "") {
      stringFinal += "USP";
    } else {
      stringFinal += ", USP";
    }
  }
  if (faculdades["Universidade Cruzeiro do Sul"] != undefined) {
    if (stringFinal == "") {
      stringFinal += "Universidade Cruzeiro do Sul";
    } else {
      stringFinal += ", Universidade Cruzeiro do Sul";
    }
  }

  return stringFinal;
}

export default function CardCursos({
  nome,
  faculdades,
  setPpCNome,
  setPpCFaculdades,
  setPopupCursos,
}: {
  nome: string;
  faculdades: ListaFaculdades;
  setPpCNome: Dispatch<SetStateAction<string>>;
  setPpCFaculdades: Dispatch<SetStateAction<ListaFaculdades>>;
  setPopupCursos: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imagem}>
        <Image src={"/img/robsongostoso.png"} alt="" fill priority />
      </div>
      <div className={styles.info}>
        <h2>{nome}</h2>
        <p>Faculdade(s): {faculdadesToString(faculdades)}</p>
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
