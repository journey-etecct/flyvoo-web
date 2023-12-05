import { ReactElement } from "react";
import { Carreira, inteligenciasToString, iconeArea } from "@/services/database/carreiras";
import styles from "./index.module.css";

interface VerMaisCarreiraProps {
  carreira: Carreira;
  onClose: () => void;
}

export default function VerMaisCarreira({ carreira, onClose }: VerMaisCarreiraProps): ReactElement {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.header}>
            <h1 className={styles.title}>Informações da Carreira</h1>
            <button onClick={onClose} className={styles.closeButton}>
              Fechar
            </button>
          </div>
          <div className={styles.mainContent}>
          <div className={styles.icon}>{iconeArea(carreira.inteligencia)}</div>
                <h2>{carreira.carreira}</h2>
            <div className={styles.descriptionContainer}>
              <div className={styles.textContainer}>
                <p className={styles.desc}>Descrição: {carreira.desc}</p>
              </div>
            </div>
            <div className={styles.obsContainer}>
              <p className={styles.obsLabel}>Observações: {carreira.obs}</p>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3>Inteligência</h3>
            </div>
            <div className={styles.card}>
              <h3>Carga Horária</h3>
              <p>{carreira.cargaHoraria}</p>
            </div>
            <div className={styles.card}>
              <h3>Salário</h3>
              <p>{`Mín: ${carreira.salario.min} | Máx: ${carreira.salario.max}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
