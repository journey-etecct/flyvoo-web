import Image from "next/image";
import { reverse } from "@/components/navbar_inicio";
import { motion } from "framer-motion";
import styles from "./entrarCadastro.module.css";
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../../public/fonts/queensides_light.ttf' });

export default function EntrarCadastro() {
  return (
    <motion.div className={styles.container}
      initial={{ opacity: 0, left: reverse ? -50 : 50 }}
      animate={{ opacity: 1, left: 0 }}
      exit={{ opacity: 0, left: reverse ? 50 : -50 }}
    >
      <div className={styles.form}>

        <form className={styles.formEntrar}>
          <h1 className={myFont.className}>Entrar</h1>
          <input className={styles.Email} type="email" name="email" placeholder="Email"></input>
          <input className={styles.Senha} type="password" name="senha" placeholder="Senha"></input>
          <a href="">Esqueceu a senha?</a>
          <div className={styles.btn}>
            <button className={styles.Entrar}>ENTRAR</button>
            <p className={styles.or}>OU</p>
            <a href=""><Image className={styles.img} width={60} height={60} src={"/img/ms.png"} alt="Microsoft" /></a>
            <a href=""><Image className={styles.img} width={60} height={60} src={"/img/google.png"} alt="Microsoft" /></a>
          </div>
        </form>

        <form className={styles.formCadastrar}>
          <h1 className={myFont.className}>Cadastro</h1>
          <p>Primeiro, insira seu email:</p>
          <p>(ele é único e precisará ser validado)</p>
          <input className={styles.Email} type="email" name="email" placeholder="Email"></input>
          <span><input className={styles.Check} type="checkbox" id="accept" name="accept" value="accept"></input> *Eu aceito os <a>Termos de Uso</a> e <a>Política de Privacidade</a>.</span>
          <div className={styles.btn}>
            <button className={styles.Cadastrar}>PRÓXIMO</button>
            <p className={styles.or}>OU</p>
            <a href=""><Image className={styles.img} width={60} height={60} src={"/img/ms.png"} alt="Microsoft" /></a>
            <a href=""><Image className={styles.img} width={60} height={60} src={"/img/google.png"} alt="Microsoft" /></a>
          </div>
        </form>

      </div>
    </motion.div>
  );
}
