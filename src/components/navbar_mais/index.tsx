import Image from "next/image";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { darkMode, mudarTema } from "@/services/tema";

export let reverse = true;
const telas: string[][] = [
  ["", "Conta"],
  ["senha", "Senha"],
  ["privacidade", "Privacidade"],
  ["central", "Central de Ajuda"],
];

export default function NavBarMais() {
  const cookies = useCookies();
  const [modoEscuro, setModoEscuro] = useState(darkMode);
  useEffect(() => {
    setModoEscuro(cookies.get("dark") == "true");
  }, [cookies]);

  return (
    <div className={styles.sidenav}>
      <div className={styles.card}>
        <div className={styles.info}>
          <div className={styles.img}>
            <Image
              src="/img/robsongostoso.png"
              fill
              alt=""
              priority
              quality={50}
            />
          </div>
          <div>
            <p className={styles.nome}>Mamila Castanha</p>
            <p className={styles.email}>jungkookcasabranca@gmail.com</p>
          </div>
        </div>
        <div className={styles.opcoes}>
          {telas.map((tela) => {
            return Opcao(tela);
          })}
        </div>
        <div className={styles.modoSwitch}>
          <FormControlLabel
            control={<Switch />}
            checked={modoEscuro}
            onClick={() => {
              cookies.set("dark", `${!darkMode}`);
              setModoEscuro(!darkMode);
              mudarTema(!darkMode);
            }}
            label="Modo escuro"
            labelPlacement="start"
          />
        </div>
      </div>
    </div>
  );
}

const Opcao = (opcao: string[]) => {
  return (
    <NavLink
      to={"/mais/" + opcao[0]}
      key={opcao[0]}
      className={({ isActive }) =>
        !location.pathname.endsWith("mais") || opcao[0] != ""
          ? isActive
            ? `${styles.opcao} ${styles.selecionado}`
            : `${styles.opcao}`
          : `${styles.opcao} ${styles.selecionado}`
      }
    >
      {opcao[1]}
    </NavLink>
  );
};
