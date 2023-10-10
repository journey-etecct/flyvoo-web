import styles from "@/app/home/index.module.css";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft, FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { nextCard, prevCard } from "./carousel";

export default function CardsInteresse() {
    return (
        <div className={styles.cardContainer}>
      <button className={styles.Left} onClick={prevCard}><FaAngleLeft style={{ fill: '#000000' }} className={styles.Icons}/></button>
    <div className={styles.cards}>
      <div className={styles.card1}>
        <Image className={styles.img} width={90} height={90} src={"/img/espacial.svg"} alt="Espacial"/>
        <p className={styles.tituloCard}>Espacial</p>
        <p><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', marginInline: 5, width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/></p>
        <button className={styles.btnCard}>Ver mais</button>
      </div>
      <div className={styles.card2}>
        <Image className={styles.img} width={90} height={90} src={"/img/logico.svg"} alt="Lógico matemática"/>
        <p className={styles.tituloCard}>Matemática</p>
        <p><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', marginInline: 5, width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/></p>
        <button className={styles.btnCard}>Ver mais</button>
      </div>
      <div className={styles.card3}>
        <Image className={styles.img} width={90} height={90} src={"/img/naturalista.svg"} alt="Naturalismo"/>
        <p className={styles.tituloCard}>Naturalista</p>
        <p><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', marginInline: 5, width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/></p>
        <button className={styles.btnCard}>Ver mais</button>
      </div>
    </div>
      <button className={styles.Right} onClick={nextCard}><FaAngleRight style={{ fill: '#000000' }} className={styles.Icons}/></button>
    </div>
    );
}



export function CardsDescubra() {
    return (
        <div className={styles.cardContainer}>
        <button className={styles.Left}><FaAngleLeft style={{ fill: '#000000' }} className={styles.Icons}/></button>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <Image className={styles.img} width={90} height={90} src={"/img/fisica.svg"} alt="esporte"/>
          <p className={styles.tituloCard}>Atividade e Esporte</p>
          <p><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', marginInline: 5, width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/></p>
          <button className={styles.btnCard}>Ver mais</button>
        </div>
        <div className={styles.card2}>
          <Image className={styles.img} width={90} height={90} src={"/img/marketing-icon.svg"} alt="Marketing"/>
          <p className={styles.tituloCard}>Marketing</p>
          <p><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', marginInline: 5, width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/></p>
          <button className={styles.btnCard}>Ver mais</button>
        </div>
        <div className={styles.card3}>
          <Image className={styles.img} width={90} height={90} src={"/img/espanhol.svg"} alt="Google"/>
          <p className={styles.tituloCard}>Espanhol</p>
          <p><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', marginInline: 5, width: 25, height: 25 }}/><FaRegStar style={{ fill: 'yellow', width: 25, height: 25 }}/></p>
          <button className={styles.btnCard}>Ver mais</button>
        </div>
      </div>
        <button className={styles.Right}><FaAngleRight style={{ fill: '#000000' }} className={styles.Icons}/></button>
      </div>
    );
}

