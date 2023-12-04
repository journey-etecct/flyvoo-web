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
import $ from "jquery";
import { useFloating } from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Georama } from "next/font/google";
import { georama700 } from "@/app/inicio/entrarCadastro";

type Telas = string[][];

export let reverse = false;
const telas: Telas = [
  ["", "Conta"],
  ["senha", "Senha"],
  ["privacidade", "Privacidade"],
  ["central", "Central de Ajuda"],
];
const caminhosTelas: string[] = [
  "/mais/",
  "/mais/senha",
  "/mais/privacidade",
  "/mais/central",
];

export function mudarReverse(novaPagina: string) {
  reverse =
    caminhosTelas.indexOf("/mais/" + novaPagina) <
    caminhosTelas.indexOf(location.pathname);
  console.log(reverse);
}

export const georama500 = Georama({ subsets: ["latin"], weight: "500" });

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

export default function NavBarMais({
  onModoMudado,
}: {
  onModoMudado: Function;
}) {
  const cookies = useCookies();
  const [modoEscuro, setModoEscuro] = useState(darkMode);
  const [popupSair, setPopupSair] = useState(false);

  const { refs, floatingStyles } = useFloating({
    open: popupSair,
    onOpenChange: setPopupSair,
    placement: "bottom-start",
  });

  useEffect(() => {
    setModoEscuro(cookies.get("dark") == "true");

    $("." + styles.sair).on("click", () => {
      console.log("saindo...");
    });
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

          <div
            className={styles.sair}
            style={poppins500.style}
            ref={refs.setReference}
            onClick={() => {
              setPopupSair(!popupSair);
            }}
          >
            Sair
          </div>
          <AnimatePresence mode="sync">
            {popupSair && (
              <motion.div
                ref={refs.setFloating}
                style={floatingStyles}
                className={styles.ppSair}
                initial={{ opacity: 0, top: -5 }}
                animate={{ opacity: 1, top: 10 }}
                exit={{ opacity: 0 }}
              >
                <div className={styles.ppSairSeta}></div>
                <div className={styles.ppSairCaixa}>
                  <span
                    className={"material-symbols-rounded " + styles.iconePpSair}
                    style={{ color: "#6C0101", fontSize: 40 }}
                  >
                    person_alert
                  </span>
                  <div>
                    <h3 style={georama700.style}>
                      Tem certeza que deseja sair?
                    </h3>
                    <div className={styles.botoes}>
                      <div
                        className={styles.Cancelar}
                        style={georama500.style}
                        onClick={() => {
                          setPopupSair(false);
                        }}
                      >
                        Cancelar
                      </div>
                      <div
                        className={styles.Sair}
                        style={georama700.style}
                        onClick={() => {
                          // TODO: sair da conta
                          cookies.remove("logado");
                          location.replace("/");
                        }}
                      >
                        Sair
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={styles.modoSwitch}>
          <ThemeProvider theme={temaBold}>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={modoEscuro}
                  onClick={() => {
                    cookies.set("dark", `${!darkMode}`); // bota nos cookies
                    setModoEscuro(!darkMode); // bota o efeito do switch apenas
                    mudarTema(!darkMode); // bota numa variavel global que não causa efeito visualmente
                    onModoMudado(); // bota efeito no fundo
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
      onClick={() => {
        mudarReverse(opcao[0]);
      }}
    >
      {opcao[1]}
    </NavLink>
  );
};
