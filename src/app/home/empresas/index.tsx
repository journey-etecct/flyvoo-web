import { reverse } from "@/components/navbar_home";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import { nunito900 } from "../cursos";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import {
  Carreira,
  iniciar,
  listaDeCarreiras,
} from "@/services/database/carreiras";
import CardCarreiras from "@/components/cards_carreiras";

let iniciado: boolean = false;

export default function Empresas() {
  const [lista, setLista] = useState<Carreira[]>([]);

  useEffect(() => {
    if (!iniciado) {
      iniciar(setLista);
      iniciado = true;
    } else {
      setLista(listaDeCarreiras);
    }
  }, []);

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
        Carreiras
      </h1>
      <div className={styles.lista}>
        {lista.map((elemento) =>
          elemento != lista[lista.length - 1] ? (
            <div key={elemento.carreira} style={{ display: "block" }}>
              <CardCarreiras
                cargaHoraria={elemento.cargaHoraria}
                desc={elemento.desc}
                inteligencias={elemento.inteligencia}
                nome={elemento.carreira}
                obs={elemento.obs}
                salario={elemento.salario}
              />
              <Divider
                className={styles.divider}
                sx={{ margin: "0 15em" }}
                variant="middle"
              />
            </div>
          ) : (
            <CardCarreiras
              key={elemento.carreira}
              cargaHoraria={elemento.cargaHoraria}
              desc={elemento.desc}
              inteligencias={elemento.inteligencia}
              nome={elemento.carreira}
              obs={elemento.obs}
              salario={elemento.salario}
            />
          )
        )}
      </div>
    </motion.div>
  );
}
