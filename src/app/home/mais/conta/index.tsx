import { poppins700 } from "@/app/inicio/entrarCadastro";
import { reverse } from "@/components/navbar_mais";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import { poppins500 } from "@/components/navbar_home";
import Image from "next/image";
import { Poppins } from "next/font/google";

export const poppins800 = Poppins({ weight: "800", subsets: ["latin"] });

export default function Conta() {
  return (
    <motion.div
      style={{
        position: "absolute",
        padding: "2rem",
        width: "72.5%",
      }}
      initial={{ opacity: 0, top: reverse ? -50 : 50 }}
      animate={{ opacity: 1, top: 0 }}
      className={styles.container}
    >
      <h1 className={styles.titulo} style={poppins700.style}>
        Conta
      </h1>
      <p className={styles.label} style={poppins500.style}>
        Foto de perfil:
      </p>
      <div className={styles.areaFoto}>
        <div className={styles.imgUsuario}>
          <Image
            src="/img/robsongostoso.png" // TODO: foto do usuário
            fill
            alt=""
            priority
            sizes=""
          />
        </div>
        <div className={styles.infoFoto}>
          <p style={poppins500.style}>Nenhum arquivo selecionado</p>
          <p style={poppins800.style}>Tamanho máximo: 1 MB</p>
          <div
            style={poppins500.style}
            className={styles.selecionarFotoBotao}
            onClick={() => {
              // TODO: selecionar uma foto para o usuário
            }}
          >
            SELECIONAR OUTRA FOTO{" "}
            <span className="material-symbols-rounded">photo_camera</span>
          </div>
        </div>
      </div>
      <table className={styles.gridCampos}>
        <tbody>
          <tr>
            <td>
              <p className={styles.label} style={poppins500.style}>
                Nome:
              </p>
              <input
                type="text"
                maxLength={255}
                className={styles.inputTxt}
                defaultValue={"Robson Junior"}
                id="nome"
                style={poppins700.style}
              />
            </td>
            <td>
              <p className={styles.label} style={poppins500.style}>
                Sexo:
              </p>
              <select
                name="sexo"
                id="sexo"
                className={styles.inputSel}
                style={poppins500.style}
              >
                <option value="masc">MASCULINO</option>
                <option value="fem">FEMININO</option>
                <option value="naobin">NÃO-BINÁRIO</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <p className={styles.label} style={poppins500.style}>
                Telefone:
              </p>
              <input
                type="text"
                maxLength={255}
                className={styles.inputTxt}
                defaultValue={"+55 11 99999-9999"}
                id="telefone"
                style={poppins700.style}
              />
            </td>
            <td>
              <p className={styles.label} style={poppins500.style}>
                Pronomes:
              </p>
              <select
                name="pronomes"
                id="pronomes"
                className={styles.inputSel}
                style={poppins500.style}
              >
                <option value="nenhum">Nenhum</option>
                <option value="ele">ele/dele</option>
                <option value="ela">ela/dela</option>
                <option value="elu">elu/delu</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.excluirBotao} style={poppins500.style}>
        EXCLUIR MINHA CONTA
      </div>
      <div className={styles.info}>
        As informações são salvas automaticamente{" "}
        <span className="material-symbols-rounded">check</span>
      </div>
    </motion.div>
  );
}
