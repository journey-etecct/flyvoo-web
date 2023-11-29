import { reverse } from "@/components/navbar_home";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { Nunito } from "next/font/google";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CardCursos from "@/components/cards_cursos";
import { Divider } from "@mui/material";
import { Curso, Faculdade, listaDeCursos } from "@/app/page";

const nunito900 = Nunito({ subsets: ["latin"], weight: "900" });

export default function Cursos({
  setPpCNome,
  setPpCFaculdades,
  setPopupCursos,
}: {
  setPpCNome: Dispatch<SetStateAction<string>>;
  setPpCFaculdades: Dispatch<SetStateAction<Faculdade[]>>;
  setPopupCursos: Dispatch<SetStateAction<boolean>>;
}) {
  const [lista, setLista] = useState<Curso[]>([]);

  useEffect(
    // pegar lista de cursos quando iniciar
    function () {
      setLista(listaDeCursos);
    },
    [setLista]
  );

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
        {lista.map((elemento) =>
          elemento != lista[lista.length - 1] ? (
            <div key={elemento.key} style={{ display: "block" }}>
              <CardCursos
                nome={elemento.key}
                faculdades={elemento["faculdade(s)"]}
                setPpCNome={setPpCNome}
                setPpCFaculdades={setPpCFaculdades}
                setPopupCursos={setPopupCursos}
              />
              <Divider
                className={styles.divider}
                sx={{ margin: "0 15em" }}
                variant="middle"
              />
            </div>
          ) : (
            <CardCursos
              faculdades={elemento["faculdade(s)"]}
              setPpCNome={setPpCNome}
              setPpCFaculdades={setPpCFaculdades}
              setPopupCursos={setPopupCursos}
              nome={elemento.key}
              key={elemento.key}
            />
          )
        )}
      </div>
    </motion.div>
  );
}
