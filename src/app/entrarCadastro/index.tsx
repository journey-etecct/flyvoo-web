import Image from "next/image";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import localFont from "next/font/local";
import { poppins500 } from "@/components/navbar_home";
import { Poppins } from "next/font/google";
import { Checkbox, FormControlLabel } from "@mui/material";
import { georama } from "../inicio";
import { FaEye, FaEyeSlash } from "react-icons/fa6"
import { MouseEventHandler } from "react";
import { criarConta } from "@/services/cadastro/post";
import handleGoogleLogin from "@/services/oauth/google";
import handleMicrosoftLogin from '@/services/oauth/ms';

export const queensidesL = localFont({
  src: "../../../public/fonts/queensides_light.ttf",
  
});
export const poppins400 = Poppins({ subsets: ["latin"], weight: "400" });
export const poppins700 = Poppins({ subsets: ["latin"], weight: "700" });

export default function EntrarCadastro() {
  const navigate = useNavigate();
  /// [checado] pega o valor da checkbox
  const [checado, setChecado] = useState(false);
  /// Responsável pela troca dos icones
  const [showPassword, setShowPassword] = useState(false);

  const exibirSenha = () => {
    setShowPassword(!showPassword);
  };


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
            placeholder="Email"
          ></input>
          <div className={styles.containerSenha}>
            <input
              className={styles.Senha}
              style={poppins500.style}
              type={showPassword ? "text" : "password"}
              name="senha"
              id="Senha"
              placeholder="Senha"
            ></input>
              {showPassword ? (
                <FaEyeSlash
                  onClick={exibirSenha}
                  className={styles.hidePassword}
                />
              ) : (
                <FaEye
                  onClick={exibirSenha}
                  className={styles.showPassword}
                />
              )}
          </div>
          <a href={undefined} style={poppins500.style} onClick={(e) => {e.preventDefault(); navigate('/esqueceu'); }}>
            Esqueceu a senha?
          </a>
          <div className={styles.btn}>
            <button className={styles.Entrar} style={georama.style}>
              ENTRAR
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
            control={<Checkbox required />}
            label={
              <div style={poppins700.style}>
                Eu aceito os <a>Termos de Uso</a> e{" "}
                <a>Política de Privacidade</a>
              </div>
            }
          />
          <div className={styles.btn}>
            <button className={styles.Cadastrar} style={georama.style} onClick={criarConta as MouseEventHandler<HTMLButtonElement>}>
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
