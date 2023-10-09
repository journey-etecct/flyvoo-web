import Image from "next/image";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import {
  Divider,
  FormControlLabel,
  Switch,
  SwitchProps,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import { darkMode, mudarTema } from "@/services/tema";
import { poppins500 } from "../navbar_home";

export let reverse = false;
const telas: string[][] = [
  ["", "Conta"],
  ["senha", "Senha"],
  ["privacidade", "Privacidade"],
  ["central", "Central de Ajuda"],
];

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  marginLeft: 10,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#003396",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.grey[500],
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const temaBold = createTheme({
  typography: {
    allVariants: {
      fontWeight: "bold",
    },
  },
});

export default function NavBarMais() {
  const cookies = useCookies();
  const [modoEscuro, setModoEscuro] = useState(darkMode);
  useEffect(() => {
    setModoEscuro(cookies.get("dark") == "true");
  }, [cookies]);

  return (
    <div className={styles.sidenav}>
      <div className={styles.card}>
        <div>
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
          <Divider style={{ backgroundColor: "#fff" }} />
          <div className={styles.sair} style={poppins500.style}>
            Sair
          </div>
        </div>

        <div className={styles.modoSwitch}>
          <ThemeProvider theme={temaBold}>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={modoEscuro}
                  onClick={() => {
                    cookies.set("dark", `${!darkMode}`);
                    setModoEscuro(!darkMode);
                    mudarTema(!darkMode);
                  }}
                  id="switch"
                />
              }
              checked={modoEscuro}
              label="Modo escuro"
              labelPlacement="start"
            />
          </ThemeProvider>
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
      style={poppins500.style}
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
