import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { poppins700 } from "@/app/entrarCadastro";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import utf8Decode from "@/services/utf8/decoder";
import { token } from "@/components/blablabla";

export default function Privacidade() {
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
      style={{
        position: "absolute",
        padding: "2rem",
        width: "72.5%",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
    >
      <h1 className={styles.titulo} style={poppins700.style}>
        Privacidade
      </h1>
      <div className={styles.termosScroll}>
        <h2>Politica de Privacidade</h2>
        <ReactMarkdown>{politica}</ReactMarkdown>
        <h2>Termos de Uso</h2>
        <ReactMarkdown>{termos}</ReactMarkdown>
      </div>
    </motion.div>
  );
}
