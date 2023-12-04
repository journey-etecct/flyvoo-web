import Image from "next/image";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import localFont from "next/font/local";
import { poppins500 } from "@/components/navbar_home";
import { Georama, Poppins } from "next/font/google";
import { Checkbox, FormControlLabel } from "@mui/material";
import { MouseEventHandler } from "react";
import { criarConta } from "@/services/cadastro/post";
import handleGoogleLogin from "@/services/oauth/google";
import handleMicrosoftLogin from "@/services/oauth/ms";
import { logar } from "@/services/login/get";
import { logarGoogle } from "@/services/oauth/get/google";
import { logarMicrosoft } from "@/services/oauth/get/ms";


export const queensidesL = localFont({
  src: "../../../../public/fonts/queensides_light.ttf",
});
export const poppins400 = Poppins({ subsets: ["latin"], weight: "400" });
export const poppins700 = Poppins({ subsets: ["latin"], weight: "700" });
export const georama700 = Georama({ subsets: ["latin"], weight: "700" });

export default function EntrarCadastro() {
  const navigate = useNavigate();
  /// [checado] pega o valor da checkbox
  const [checado, setChecado] = useState(false);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
      style={{ position: "absolute" }}
    >
      <div className={styles.form}>
        <form id="entrar" className={styles.formEntrar}>
          <h1 className={queensidesL.className}>Entrar</h1>
          <input
            className={styles.Email}
            style={poppins500.style}
            type="email"
            name="email"
            id="emailLogin"
            placeholder="Email"
          ></input>
            <input
              className={styles.Senha}
              style={poppins500.style}
              type="password"
              name="senha"
              id="senhaLogin"
              placeholder="Senha"
            ></input>
          <a
            className={styles.links}
            href={undefined}
            style={poppins500.style}
            onClick={(e) => {
              e.preventDefault();
              navigate("/esqueceu");
            }}
          >
            Esqueceu a senha?
          </a>
          <div className={styles.btn}>
            <button className={styles.Entrar} onClick={logar as MouseEventHandler<HTMLButtonElement>} style={georama700.style}>
              ENTRAR
            </button>
            <p className={styles.or}>OU</p>
            <a href={undefined} onClick={logarMicrosoft}>
              <Image
                className={styles.img}
                width={60}
                height={60}
                src={"/img/ms.png"}
                alt="Microsoft"
              />
            </a>
            <a href={undefined} onClick={logarGoogle}>
              <Image
                className={styles.img}
                width={60}
                height={60}
                src={"/img/google.png"}
                alt="Google"
              />
            </a>
          </div>
        </form>

        <form id="cadastro" className={styles.formCadastrar}>
          <h1 className={queensidesL.className}>Cadastro</h1>
          <p style={poppins400.style}>Primeiro, insira seu email:</p>
          <p style={poppins400.style}>(ele é único e precisará ser validado)</p>
          <input
            className={styles.Email}
            style={poppins500.style}
            type="email"
            id="emailCadastro"
            name="emailCadastro"
            placeholder="Email"
          ></input>
          {/* <input
              className={styles.Check}
              type="checkbox"
              id="accept"
              name="accept"
              value="accept"
            ></input>
            *Eu aceito os <a>Termos de Uso</a> e <a>Política de Privacidade</a>. */}
          <FormControlLabel
            checked={checado}
            onClick={() => setChecado(!checado)}
            control={<Checkbox />}
            label={
              <div style={poppins700.style}>
                Eu aceito os <a>Termos de Uso</a> e{" "}
                <a>Política de Privacidade</a>
              </div>
            }
          />
          <div className={styles.btn}>
            <button
              className={styles.Cadastrar}
              style={georama700.style}
              onClick={criarConta as MouseEventHandler<HTMLButtonElement>}
            >
              PRÓXIMO
            </button>
            <p className={styles.or}>OU</p>
            <a href={undefined} onClick={handleMicrosoftLogin}>
              <Image
                className={styles.img}
                width={60}
                height={60}
                src={"/img/ms.png"}
                alt="Microsoft"
              />
            </a>
            <a href={undefined} onClick={handleGoogleLogin}>
              <Image
                className={styles.img}
                width={60}
                height={60}
                src={"/img/google.png"}
                alt="Google"
              />
            </a>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
