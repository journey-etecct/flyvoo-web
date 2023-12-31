import { useState } from "react";
import styles from "@/app/home/index.module.css";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft, FaRegStar } from "react-icons/fa6";

export const CardsInteresse = () => {
  const [startIdx, setStartIdx] = useState(0);
  const numVisibleCards = 3;

  const cardsData = [
    { id: 1, imgSrc: "/img/espacial.svg", type: "espacial", title: "Espacial", stars: 3 },
    { id: 2, imgSrc: "/img/logico.svg", type: "logico-matematica", title: "Matemática", stars: 3 },
    { id: 3, imgSrc: "/img/naturalista.svg", type: "naturalista", title: "Naturalista", stars: 3 },
    { id: 4, imgSrc: "/img/linguistica.svg", type: "linguistica", title: "Linguística", stars: 3 },
    { id: 5, imgSrc: "/img/existencial.svg", type: "existencial", title: "Existencial", stars: 3 },
    { id: 6, imgSrc: "/img/interpessoal.svg", type: "interpessoal", title: "Interpessoal", stars: 3 },
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
