import { Montserrat, Raleway } from "next/font/google";
import styles from "./index.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import utf8Decode from "@/services/utf8/decoder";
import { useCookies } from "next-client-cookies";

const token: string = process.env.TOKEN_TERMOS ?? "";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const raleway = Raleway({ subsets: ["latin"] });

export default function PopupPolitica() {
  const cookies = useCookies();
  const [aparecerPopup, setAparecerPopup] = useState(false);
  const [aparecerDialogo, setAparecerDialogo] = useState(false);

  useEffect(() => {
    if (cookies.get("termos") != "apareceu") {
      setAparecerPopup(true);
    }
  }, [cookies]);

  return (
    <>
      <AnimatePresence>{aparecerPopup && <Popup />}</AnimatePresence>
      <AnimatePresence>{aparecerDialogo && <Dialogo />}</AnimatePresence>
    </>
  );

  function Popup() {
    return (
      <motion.div
        className={styles.popup}
        id="popup"
        initial={{ right: "-500px" }}
        animate={{ right: "20px" }}
        transition={{ ease: [0, 0.71, 0.2, 1.01], delay: 1, duration: 0.8 }}
        exit={{ bottom: "-250px" }}
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
            onClick={() => {
              setAparecerPopup(false);
              cookies.set("termos", "apareceu", { expires: 365 });
            }}
          >
            Aceito
          </div>
          <div
            className={styles.botaoLer}
            onClick={() => {
              setAparecerPopup(false);
              cookies.set("termos", "apareceu", { expires: 365 });
              setAparecerDialogo(true);
            }}
          >
            Ler Termos
          </div>
        </div>
      </motion.div>
    );
  }

  function Dialogo() {
    const [termos, setTermos] = useState("Carregando...");
    const [politica, setPolitica] = useState("Carregando...");

    async function getTermos(): Promise<void> {
      const url =
        "https://api.github.com/repos/journey-etecct/flyvoo-app/contents/TERMOS.md";
      const resposta = await fetch(url, {
        headers: token != "" ? { Authorization: "token " + token } : undefined,
      });
      const termosEncriptado = (await resposta.json())["content"];
      const termosUtf = atob(termosEncriptado);
      return setTermos(utf8Decode(termosUtf));
    }

    async function getPolitica(): Promise<void> {
      const url =
        "https://api.github.com/repos/journey-etecct/flyvoo-app/contents/POLITICA.md";
      const resposta = await fetch(url, {
        headers: token != "" ? { Authorization: "token " + token } : undefined,
      });
      const politicaEncriptado = (await resposta.json())["content"];
      const politicaUtf = atob(politicaEncriptado);
      return setPolitica(utf8Decode(politicaUtf));
    }

    useEffect(() => {
      getTermos();
      getPolitica();
    });

    return (
      <motion.div
        className={styles.fundo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className={styles.dialogo}>
          <div className={styles.termosScroll}>
            <h2>Politica de Privacidade</h2>
            <ReactMarkdown>{politica}</ReactMarkdown>
            <h2>Termos de Uso</h2>
            <ReactMarkdown>{termos}</ReactMarkdown>
          </div>
          <p
            onClick={() => {
              setAparecerDialogo(false);
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
}
