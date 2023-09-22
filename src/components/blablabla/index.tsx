import { Montserrat, Raleway } from "next/font/google";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { token } from "./token";
import $ from "jquery";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ["latin"] });

export default function PopupPolitica() {
  const [aparecerPopup, setAparecerPopup] = useState(true);

  async function getTermos() {
    const url =
      "https://api.github.com/repos/journey-etecct/flyvoo-app/contents/TERMOS.md";
    const resposta = await fetch(url, {
      headers: { Authorization: "token " + token },
    });
    const termosEncriptado = (await resposta.json())["content"];
    const termos = atob(termosEncriptado);
    $("#termos").html("<p>eita</p>");
  }

  useEffect(() => {
    getTermos();
  });

  return (
    <>
      <Popup />
      {aparecerPopup ? <Politica /> : <></>}
    </>
  );

  function Politica() {
    return (
      <motion.div className={styles.fundo}>
        <motion.div className={styles.dialogo}>
          <div className={styles.termosScroll}>
            <h2>Politica de Privacidade</h2>
            <p id="politica">Carregando...</p>
            <h2>Termos de Uso</h2>
            <p id="termos">Carregando...</p>
          </div>
          <p
            onClick={() => {
              setAparecerPopup(false);
            }}
            className={styles.concordo}
            style={raleway.style}
          >
            Concordo
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function Popup() {
    return (
      <motion.div
        className={styles.popup}
        id="popup"
        /* initial={{ right: "-500px" }} */
        animate={{ right: "20px" }}
        transition={{ ease: [0, 0.71, 0.2, 1.01], delay: 1, duration: 0.8 }}
      >
        <span className={`${styles.title} ${montserrat.className}`}>
          Sua Privacidade
        </span>
        <span className={`${styles.content} ${montserrat.className}`}>
          Ao se cadastrar, você concorda com nossos
          <br />
          Termos de Uso e Política de Privacidade
        </span>
        <div className={`${styles.botoes} ${montserrat.className}`}>
          <div
            className={styles.botaoAceitar}
            onClick={() => setAparecerPopup(true)}
          >
            Aceito
          </div>
          <div className={styles.botaoLer}>Ler Termos</div>
        </div>
      </motion.div>
    );
  }
}
