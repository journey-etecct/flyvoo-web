import styles from "./index.module.css";
import Image from "next/image";
import { georama500 } from "@/components/navbar_mais";

export default function vericacaoEmail() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} style={georama500.style}>
        Email de verificação enviado
      </h1>
      <Image
        className={styles.img}
        width={100}
        height={100}
        src="/img/emailEnviado.svg"
        alt="Envelope de email com um sinal de checado"
      />
      <p className={styles.txt} style={georama500.style}>
        Um email com um link de redefinição de senha foi enviado. Cheque sua
        caixa de entrada e a caixa de spam para continuar seu cadastro.
      </p>
      <button className={styles.fecharButton}>Fechar</button>
    </div>
  );
}
