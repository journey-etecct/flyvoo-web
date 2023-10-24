import styles from "./index.module.css";
import { georama800 } from "../inicio";

export default function ConcluirCadastro() {
  return (
    <div className={styles.container}>
      <h1 className={styles.txt} style={georama800.style}>
        Conclua seu Cadastro
      </h1>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="nome" className={styles.label}>
            *Nome:
          </label>
          <input type="text" id="nome" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="sobrenome" className={styles.label}>
            *Sobrenome:
          </label>
          <input type="text" id="sobrenome" className={styles.input} />
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="telefone" className={styles.label}>
            *Telefone:
          </label>
          <input type="tel" id="telefone" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="sexo" className={styles.label}>
            *Sexo:
          </label>
          <select id="sexo" className={styles.selectInput}>
            {/* Opções do select */}
          </select>
        </div>
      </div>

      <div className={styles.inputRow}>
        <div className={styles.inputContainer}>
          <label htmlFor="dataNascimento" className={styles.label}>
            *Data de Nascimento:
          </label>
          <input type="date" id="dataNascimento" className={styles.input} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="pronome" className={styles.label}>
            *Pronome (Opcional):
          </label>
          <select id="pronome" className={styles.selectInput}>
            {/* Opções do select */}
          </select>
        </div>
      </div>
      <div className={styles.checkoutContainer}>
        <input
          type="checkbox"
          id="aceitarNotificacoes"
          className={styles.checkbox}
        />
        <label htmlFor="aceitarNotificacoes">
          Eu aceito receber notificações e atualizações
        </label>
      </div>

      <p className={styles.smallText}>
        Ao clicar em Concluir, você concorda com nossos Termos de Uso.
      </p>

      <button className={styles.enviarButton}>Concluir Cadastro</button>
    </div>
  );
}
