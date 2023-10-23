// CardsDescubra.js
import { useState } from "react";
import styles from "@/app/home/index.module.css";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft, FaRegStar } from "react-icons/fa6";

export const CardsDescubra = () => {
  const [startIdx, setStartIdx] = useState(0);
  const numVisibleCards = 3;

  const cardsData = [
    { id: 1, imgSrc: "/img/fisica.svg", type: "corpo-cinestetica", title: "Corpo-cinestética", stars: 3 },
    { id: 2, imgSrc: "/img/marketing.svg", type: "interpessoal", title: "Marketing", stars: 3 },
    { id: 3, imgSrc: "/img/espanhol.svg", type: "linguistica", title: "Espanhol", stars: 3 },
    { id: 4, imgSrc: "/img/musica.svg", type: "musical", title: "Música", stars: 3 },
    { id: 5, imgSrc: "/img/quimica.svg", type: "logico-matematica", title: "Química", stars: 3 },
    { id: 6, imgSrc: "/img/testeEntrevista.svg", type: "intrapessoal", title: "Simular Entrevista", stars: 3 },
  ];

  const renderCard = (card: { id: any; imgSrc: any; type?: string; title: any; stars: any; }) => {
    return (
      <div key={card.id} className={styles.card}>
        <div className={styles.cardContent}>
          <Image
            className={styles.img}
            width={90}
            height={90}
            src={card.imgSrc}
            alt={card.title}
          />
          <p className={styles.tituloCard}>{card.title}</p>
          <p>
            {[...Array(card.stars)].map((_, i) => (
              <FaRegStar
                key={i}
                style={{ fill: "yellow", width: 25, height: 25 }}
              />
            ))}
          </p>
          <button className={styles.btnCard}>Iníciar</button>
        </div>
      </div>
    );
  };

  const nextCard = () => {
    setStartIdx((prevStartIdx) =>
      (prevStartIdx + 1) % (cardsData.length - numVisibleCards + 1)
    );
  };

  const prevCard = () => {
    setStartIdx((prevStartIdx) =>
      prevStartIdx === 0
        ? cardsData.length - numVisibleCards
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
          const cardIndex = (startIdx + index) % cardsData.length;
          return renderCard(cardsData[cardIndex]);
        })}
      </div>
      <button className={styles.Right} onClick={nextCard}>
        <FaAngleRight style={{ fill: "#000000" }} className={styles.Icons} />
      </button>
    </div>
  );
};
