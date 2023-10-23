import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./index.module.css";
import localFont from "next/font/local";
import { georama800 } from "../../inicio";
import CardSobre from "@/components/cards_sobre";

const sometype = localFont({ src: "../../../../public/fonts/sometype.ttf" });

const membrosDaEquipe = [
  {
    nome: "Camila Vitoria",
    descricao: "PESQUISA E DESIGN",
    foto: "/img/pessoas/camila.webp",
  },
  {
    nome: "Daniel Alves",
    descricao: "DESIGN E DESENVOLVIMENTO",
    foto: "/img/pessoas/daniel.webp",
  },
  {
    nome: "Danilo Lima",
    descricao: "CEO \u2022 DESIGN E DESENVOLVIMENTO",
    foto: "/img/pessoas/danilo.webp",
  },
  {
    nome: "Felipe Bozzo",
    descricao: "DESIGN E DESENVOLVIMENTO",
    foto: "/img/pessoas/felipe.webp",
  },
  {
    nome: "Guilherme Barbosa",
    descricao: "PESQUISA E DESIGN",
    foto: "/img/pessoas/guilherme.webp",
  },
  {
    nome: "Juliana Leal",
    descricao: "PESQUISA",
    foto: "/img/pessoas/juliana.webp",
  },
  {
    nome: "Paulo Henrique",
    descricao: "PESQUISA",
    foto: "/img/pessoas/paulo.webp",
  },
  {
    nome: "Rafael Lucilio",
    descricao: "PESQUISA E DESIGN",
    foto: "/img/pessoas/rafael.webp",
  },
  {
    nome: "Robson Dias",
    descricao: "DESIGN E DESENVOLVIMENTO",
    foto: "/img/pessoas/robson.webp",
  },
  {
    nome: "Ryan Felix",
    descricao: "DESIGN",
    foto: "/img/pessoas/ryan.webp",
  },
];

export default function Sobre() {
  return (
    <motion.div
      style={{ position: "absolute" }}
      className={styles.container}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
    >
      <div className={styles.flyItens}>
        <h1 className={styles.txt} style={georama800.style}>
          Sobre o Flyvoo
        </h1>
        <p className={styles.flyDesc}>
          O Flyvoo foi feito para te auxiliar e te direcionar para o mercado de
          trabalho, da forma mais inclusiva e benéfica possivel, com o objetivo
          de melhorar ou inserir você na sua área de preferência profissional da
          melhor forma.
        </p>
        <p className={styles.credit} style={sometype.style}>
          © 2023 Journey
          <br />
          Todos os direitos reservados
        </p>
      </div>
      <div className={styles.flyImg}>
        <Image
          src="/img/amico.svg"
          priority
          width={669.4}
          height={598}
          alt="Diversas pessoas trabalhando em diferentes locais de uma sala, todas usando notebook"
        />
      </div>
      <section className={styles.team}>
        <div className={styles.titleContent}>
          <h6 className={styles.title}>Equipe do Journey</h6>
        </div>
        <div className={styles.cardDeck}>
          {membrosDaEquipe.map((membro, index) => (
            <CardSobre key={index} {...membro} />
          ))}
        </div>
      </section>
    </motion.div>
  );
}
