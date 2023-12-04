import { Faculdade, ListaFaculdades } from "@/app/page";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { inter600 } from "../cards_cursos";

export default function PopupCursos({
  nome,
  faculdades,
  fechar,
}: {
  nome: string;
  faculdades: ListaFaculdades;
  fechar: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <motion.div
        className={styles.ppCBG}
        transition={{ duration: 0.25, ease: "easeOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.2 } }}
        onClick={() => {
          fechar(false);
        }}
      />
      <motion.div
        className={styles.ppC}
        style={{ zIndex: 999, transform: "translate(-50%, -50%)" }}
        initial={{ transform: "scale(1.05) translate(-47.5%, -47.5%)" }}
        animate={{ transform: "scale(1) translate(-50%, -50%)" }}
        exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.15 } }}
      >
        <h1 className={styles.titulo}>{nome}</h1>
        {/* TODO: lista de cursos */}
        <div className={styles.grade}>
          <div
            className={faculdades.USP == null ? styles.disabled : ""}
            style={{ display: "flex", position: "relative" }}
          >
            <div className={styles.img}>
              <Image src={"/img/faculdades/usp.webp"} alt="" fill />
            </div>
            <h2>USP</h2>
            <a
              href={faculdades.USP}
              className={styles.btnVerMais}
              target="_blank"
            >
              <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
                Ver mais
              </p>
            </a>
          </div>
          <div
            className={
              faculdades["Universidade Cruzeiro do Sul"] == null
                ? styles.disabled
                : ""
            }
            style={{ display: "flex", position: "relative" }}
          >
            <div className={styles.img}>
              <Image src={"/img/faculdades/ucs.webp"} alt="" fill />
            </div>
            <h2>
              Cruzeiro
              <br /> do Sul
            </h2>
            <a
              href={faculdades["Universidade Cruzeiro do Sul"]}
              className={styles.btnVerMais}
              target="_blank"
            >
              <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
                Ver mais
              </p>
            </a>
          </div>
          <div
            className={faculdades.UNIFESP == null ? styles.disabled : ""}
            style={{ display: "flex", position: "relative" }}
          >
            <div className={styles.img}>
              <Image src={"/img/faculdades/unifesp.webp"} alt="" fill />
            </div>
            <h2>UNIFESP</h2>
            <a
              href={faculdades.UNIFESP}
              className={styles.btnVerMais}
              target="_blank"
            >
              <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
                Ver mais
              </p>
            </a>
          </div>
          <div
            className={faculdades.SPTech == null ? styles.disabled : ""}
            style={{ display: "flex", position: "relative" }}
          >
            <div className={styles.img}>
              <Image src={"/img/faculdades/sptech.webp"} alt="" fill />
            </div>
            <h2>SPTech</h2>
            <a
              href={faculdades.SPTech}
              className={styles.btnVerMais}
              target="_blank"
            >
              <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
                Ver mais
              </p>
            </a>
          </div>
          <div
            className={faculdades.UNESP == null ? styles.disabled : ""}
            style={{ display: "flex", position: "relative" }}
          >
            <div className={styles.img}>
              <Image src={"/img/faculdades/unesp.webp"} alt="" fill />
            </div>
            <h2>UNESP</h2>
            <a
              href={faculdades.UNESP}
              className={styles.btnVerMais}
              target="_blank"
            >
              <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
                Ver mais
              </p>
            </a>
          </div>
          <div
            className={faculdades.IFSP == null ? styles.disabled : ""}
            style={{ display: "flex", position: "relative" }}
          >
            <div className={styles.img}>
              <Image src={"/img/faculdades/ifsp.webp"} alt="" fill />
            </div>
            <h2>IFSP</h2>
            <a
              href={faculdades.IFSP}
              className={styles.btnVerMais}
              target="_blank"
            >
              <p style={{ ...inter600.style, margin: 0, fontSize: "16px" }}>
                Ver mais
              </p>
            </a>
          </div>
          {/* <div>UCS</div>
          <div>UNIFESP</div>
          <div>SPTech</div>
          <div>UNESP</div>
          <div>IFSP</div> */}
        </div>
        <IconButton
          aria-label="fechar"
          onClick={() => {
            fechar(false);
          }}
          style={{
            position: "absolute",
            right: "25px",
            top: "25px",
          }}
        >
          <span className="material-symbols-rounded">close</span>
        </IconButton>
      </motion.div>
    </>
  );
}
