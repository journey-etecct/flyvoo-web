import Image from "next/image";
import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import styles from "./index.module.css";
import localFont from "next/font/local";
import { poppins500 } from "@/components/navbar_home";
import { Poppins } from "next/font/google";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

export const queensidesL = localFont({
  src: "../../../public/fonts/queensides_light.ttf",
});
export const poppins400 = Poppins({ subsets: ["latin"], weight: "400" });
export const poppins700 = Poppins({ subsets: ["latin"], weight: "700" });

export default function EntrarCadastro() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
      style={{ position: "absolute" }}
    >
      <div className={styles.form}>
        <form className={styles.formEntrar}>
          <h1 className={queensidesL.className}>Entrar</h1>
          <input
            className={styles.Email}
            style={poppins500.style}
            type="email"
            name="email"
            placeholder="Email"
          ></input>
          <input
            className={styles.Senha}
            style={poppins500.style}
            type="password"
            name="senha"
            placeholder="Senha"
          ></input>
          <a href={undefined} style={poppins500.style}>
            Esqueceu a senha?
          </a>
          <div className={styles.btn}>
            <button className={styles.Entrar}>ENTRAR</button>
            <p className={styles.or}>OU</p>
            <a href={undefined}>
              <Image
                className={styles.img}
                width={60}
                height={60}
                src={"/img/ms.png"}
                alt="Microsoft"
              />
            </a>
            <a href={undefined}>
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

        <form className={styles.formCadastrar}>
          <h1 className={queensidesL.className}>Cadastro</h1>
          <p style={poppins400.style}>Primeiro, insira seu email:</p>
          <p style={poppins400.style}>(ele é único e precisará ser validado)</p>
          <input
            className={styles.Email}
            type="email"
            name="email"
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
            control={<Checkbox required />}
            label={
              <div style={poppins700.style}>
                Eu aceito os <a>Termos de Uso</a> e{" "}
                <a>Política de Privacidade</a>
              </div>
            }
          />
          <div className={styles.btn}>
            <button className={styles.Cadastrar}>PRÓXIMO</button>
            <p className={styles.or}>OU</p>
            <a href={undefined}>
              <Image
                className={styles.img}
                width={60}
                height={60}
                src={"/img/ms.png"}
                alt="Microsoft"
              />
            </a>
            <a href={undefined}>
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
