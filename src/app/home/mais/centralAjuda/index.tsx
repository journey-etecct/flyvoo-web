import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { poppins700 } from "@/app/inicio/entrarCadastro";
import DATA from "./data";
import { Divider, IconButton } from "@mui/material";
import { useState } from "react";

export default function CentralAjuda() {
  const [aberto, setAberto] = useState<null | number>(null);

  const listaPerguntas: JSX.Element[] = DATA.map((p) => {
    return (
      <>
        <div key={p.pergunta} className={styles.pergunta}>
          <p className={styles.tituloPerg}>
            {DATA.indexOf(p) + 1}. {p.pergunta}
          </p>
          <IconButton
            aria-label="expandir"
            onClick={() => {
              if (aberto == DATA.indexOf(p)) {
                setAberto(null);
              } else {
                setAberto(DATA.indexOf(p));
              }
            }}
          >
            <motion.span
              initial={false}
              animate={{
                rotate: aberto == DATA.indexOf(p) ? 180 : 0,
              }}
              className="material-symbols-rounded"
            >
              expand_more
            </motion.span>
          </IconButton>
        </div>
        <motion.div
          className={styles.resposta}
          initial={false}
          animate={{
            height: aberto == DATA.indexOf(p) ? "auto" : 0,
          }}
        >
          <p className={styles.respostaTexto}>{p.resposta}</p>
        </motion.div>
        {p != DATA[DATA.length - 1] && <Divider className={styles.divider} />}
      </>
    );
  });

  return (
    <motion.div
      style={{
        position: "absolute",
        padding: "2rem",
        width: "72.5%",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      <h1 className={styles.titulo} style={poppins700.style}>
        Central de Ajuda
      </h1>
      <h2>Perguntas Frequentes</h2>
      <div className={styles.scroll}>{listaPerguntas}</div>
    </motion.div>
  );
}
