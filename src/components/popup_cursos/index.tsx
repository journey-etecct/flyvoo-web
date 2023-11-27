import { Faculdade } from "@/app/page";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";

export default function PopupCursos({
  nome,
  faculdades,
  fechar,
}: {
  nome: string;
  faculdades: Faculdade[];
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
        initial={{ transform: "scale(1.1) translate(-45%, -45%)" }}
        animate={{ transform: "scale(1) translate(-50%, -50%)" }}
        exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.15 } }}
      >
        <h1 className={styles.titulo}>{nome}</h1>
        {/* TODO: lista de cursos */}
        <div className={styles.grade}>
          <div>
            <div className={styles.img}>
              <Image src={"/img/robsongostoso.png"} alt="" fill />
            </div>
          </div>
          <div>UCS</div>
          <div>UNIFESP</div>
          <div>SPTech</div>
          <div>UNESP</div>
          <div>IFSP</div>
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
