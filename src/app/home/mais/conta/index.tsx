import { poppins700 } from "@/app/entrarCadastro";
import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";
import styles from "./index.module.css";

export default function Conta() {
  return (
    <motion.div
      style={{
        position: "absolute",
        padding: "2rem",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
      className={styles.container}
    >
      <h1 className={styles.titulo} style={poppins700.style}>
        Conta
      </h1>
      <p className={styles.label}>Foto de perfil:</p>
      <div className={styles.areaFoto}>
        {/* imagem */}
        <div className={styles.infoFoto}>
          <p>Nenhum arquivo selecionado</p>
          <p>Tamanho máximo: 1 MB</p>
          <div className={styles.selecionarFotoBotao}>
            SELECIONAR OUTRA FOTO{" "}
            <span className="material-symbols-rounded">photo_camera</span>
          </div>
        </div>
      </div>
      <table className={styles.gridCampos}>
        <tr>
          <td>nome</td>
          <td>sexo</td>
        </tr>
        <tr>
          <td>telefone</td>
          <td>pronomes</td>
        </tr>
      </table>
      <div className={styles.excluirBotao}>Excluir minha conta</div>
      <div className={styles.info}>
        As informações são salvas automaticamente{" "}
        <span className="material-symbols-rounded">check</span>
      </div>
    </motion.div>
  );
}
