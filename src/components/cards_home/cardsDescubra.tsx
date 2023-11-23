// CardsDescubra.js
import { useState } from "react";
import styles from "@/app/home/index.module.css";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft, FaRegStar } from "react-icons/fa6";
import { Carreira, carreiraData } from "./carreiraData";

interface Props {
  carreiraLista: Carreira[];
}


export const CardsDescubra = ({ carreiraLista }: Props) => {

 // const [selectedCareer, setSelectedCarreira] = useState<Carreira | null>(null);


  const [startIdx, setStartIdx] = useState(0);
  const numVisibleCards = 3;

  const nextCard = () => {
    setStartIdx((prevStartIdx) =>
      (prevStartIdx + 1) % (carreiraLista.length - numVisibleCards + 1)
    );
  };

  const prevCard = () => {
    setStartIdx((prevStartIdx) =>
      prevStartIdx === 0
        ? carreiraLista.length - numVisibleCards
        : prevStartIdx - 1
    );
  };

  return (
    <div className={styles.cardContainer}>
      <button className={styles.Left} onClick={prevCard}>
        <FaAngleLeft style={{ fill: "#000000" }} className={styles.Icons} />
      </button>
      <div className={styles.cards}>
        {[...Array(numVisibleCards)].map((_, index) => {
          const cardIndex = (startIdx + index) % carreiraLista.length;
          const carreira = carreiraLista[cardIndex];
          return (
            <div key={carreira.id} className={styles.card}>
              <Image className={styles.img} width={90} height={90} src={carreira.imgSrc} alt={carreira.titulo} />
              <p className={styles.tituloCard}>{carreira.titulo}</p>
              <p>
                {[...Array(carreira.estrelas)].map((_, i) => (
                  <FaRegStar key={i} style={{ fill: 'yellow', width: 25, height: 25 }} />
                ))}
              </p>
              <button className={styles.btnCard}>
                Ver mais
              </button>
            </div>
          );
        })}
      </div>
      <button className={styles.Right} onClick={nextCard}>
        <FaAngleRight style={{ fill: "#000000" }} className={styles.Icons} />
      </button>
    </div>
    );
  };


 