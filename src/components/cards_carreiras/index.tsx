import styles from "./index.module.css";
import { Inter } from "next/font/google";
import { Area, InteligenciasLista } from "@/services/database/carreiras";
import { useEffect } from "react";

export const inter600 = Inter({ subsets: ["latin"], weight: "600" });

export function inteligenciasToString(
  inteligencias: InteligenciasLista
): string {
  var stringFinal: string = "";

  if (inteligencias.corporalCin != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.corporalCin;
    } else {
      stringFinal += Area.corporalCin;
    }
  }
  if (inteligencias.espacial != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.espacial;
    } else {
      stringFinal += Area.espacial;
    }
  }
  if (inteligencias.existencial != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.existencial;
    } else {
      stringFinal += Area.existencial;
    }
  }
  if (inteligencias.interpessoal != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.interpessoal;
    } else {
      stringFinal += Area.interpessoal;
    }
  }
  if (inteligencias.intrapessoal != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.intrapessoal;
    } else {
      stringFinal += Area.intrapessoal;
    }
  }
  if (inteligencias.linguistica != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.linguistica;
    } else {
      stringFinal += Area.linguistica;
    }
  }
  if (inteligencias.logicoMat != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.logicoMat;
    } else {
      stringFinal += Area.logicoMat;
    }
  }
  if (inteligencias.musical != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.musical;
    } else {
      stringFinal += Area.musical;
    }
  }
  if (inteligencias.naturalista != null) {
    if (stringFinal != "") {
      stringFinal += ", " + Area.naturalista;
    } else {
      stringFinal += Area.naturalista;
    }
  }

  return stringFinal;
}

export default function CardCarreiras({
  nome,
  inteligencias,
  desc,
  obs,
  salario,
  cargaHoraria,
}: {
  nome: string;
  inteligencias: InteligenciasLista;
  desc: string;
  obs: string;
  salario: {
    max: string;
    min: string;
  };
  cargaHoraria: string;
}) {
  function _pegarIconeCarreira(inteligencias: InteligenciasLista): void {
    let listaArray: { area: Area; porcentagem: number }[] = [];

    if (inteligencias.corporalCin != null) {
      listaArray.push({
        area: Area.corporalCin,
        porcentagem: inteligencias.corporalCin,
      });
    }
    if (inteligencias.espacial != null) {
      listaArray.push({
        area: Area.espacial,
        porcentagem: inteligencias.espacial,
      });
    }
    if (inteligencias.existencial != null) {
      listaArray.push({
        area: Area.existencial,
        porcentagem: inteligencias.existencial,
      });
    }
    if (inteligencias.interpessoal != null) {
      listaArray.push({
        area: Area.interpessoal,
        porcentagem: inteligencias.interpessoal,
      });
    }
    if (inteligencias.intrapessoal != null) {
      listaArray.push({
        area: Area.intrapessoal,
        porcentagem: inteligencias.intrapessoal,
      });
    }
    if (inteligencias.linguistica != null) {
      listaArray.push({
        area: Area.linguistica,
        porcentagem: inteligencias.linguistica,
      });
    }
    if (inteligencias.logicoMat != null) {
      listaArray.push({
        area: Area.logicoMat,
        porcentagem: inteligencias.logicoMat,
      });
    }
    if (inteligencias.musical != null) {
      listaArray.push({
        area: Area.musical,
        porcentagem: inteligencias.musical,
      });
    }
    if (inteligencias.naturalista != null) {
      listaArray.push({
        area: Area.naturalista,
        porcentagem: inteligencias.naturalista,
      });
    }

    listaArray.sort((a, b) => b.porcentagem - a.porcentagem);
    let maiorArea: Area = listaArray[0].area;
  }

  useEffect(() => {
    _pegarIconeCarreira(inteligencias);
  });

  return (
    <div className={styles.card}>
      <div className={styles.imagem}>
        {/* TODO: inteligencia maior _pegarIconeCarreira() */}
      </div>
      <div className={styles.info}>
        <h2>{nome}</h2>
        <p>Inteligência(s): {inteligenciasToString(inteligencias)}</p>
        <button
          className={styles.btnVerMais}
          onClick={() => {
            alert("carreira aparecer!!!");
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
