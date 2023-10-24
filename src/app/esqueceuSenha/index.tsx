import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { georama800 } from "../inicio";
import Image from "next/image";

export default function EsqueceuSenha() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.txt} style={georama800.style}>
        Email de verificação enviado para redefinição de senha
      </h1>
      <Image
        className={styles.img}
        width={100}
        height={100}
        src="/img/emailEnviado.svg"
        alt="Envelope de email com um sinal de checado"
      />
      <button
        className={styles.fecharButton}
        onClick={(e) => {
          e.preventDefault();
          navigate("/entrar");
        }}
      >
        Fechar
      </button>
    </div>
  );
}
