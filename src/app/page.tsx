"use client";
import "./globals.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./contato";
import Sobre from "./sobre";
import EntrarCadastro from "./entrarCadastro";
import { AnimatePresence } from "framer-motion";
import Home from "./home";
import NavbarInicio from "@/components/navbar_inicio";
import NavbarHome from "@/components/navbar_home";
import { useCookies } from "next-client-cookies";
import PopupPolitica from "@/components/blablabla";
import Mais from "./mais";
import Erro404 from "./404";
import React, { useState } from "react";

export default function Root() {
  const cookies = useCookies();
  var logado: boolean = cookies.get("logado") == "true";
  const [reverso, setReverso] = useState(false);

  const handleSetReverso = (reverse: boolean) => {
    console.log(reverse);
    setReverso(reverse);
  };

  if (logado)
    return (
      /* USUÁRIO LOGADO */
      <Router>
        <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
          <NavbarHome />
          <div
            style={{
              marginLeft: "9em",
              position: "absolute",
              width: "calc(100% - 9em)",
              height: "100%",
              zIndex: "2",
            }}
            id="conteudo"
          >
            <AnimatePresence>
              <Routes>
                <Route path="/" Component={Home} index></Route>
                <Route path="/mais/" Component={Mais}></Route>

                <Route path="*" Component={Erro404} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </Router>
    );
  else
    return (
      /* USUÁRIO NÃO LOGADO */
      <Router>
        <NavbarInicio setReversoFuncao={handleSetReverso} />
        <div className="testa">
          <NaoLogado setReversoFuncao={setReverso} reverse={reverso} />
        </div>
        <PopupPolitica />
      </Router>
    );
}

function NaoLogado({
  setReversoFuncao,
  reverse,
}: {
  setReversoFuncao: Function;
  reverse: boolean;
}) {
  const router = useRoutes([
    {
      path: "/",
      element: <Inicio setReversoFuncao={setReversoFuncao} reverse={reverse} />,
    },
    {
      path: "/sobre",
      element: <Sobre setReversoFuncao={setReversoFuncao} reverse={reverse} />,
    },
    {
      path: "/contato",
      element: (
        <Contato setReversoFuncao={setReversoFuncao} reverse={reverse} />
      ),
    },
    {
      path: "/entrar",
      element: (
        <EntrarCadastro setReversoFuncao={setReversoFuncao} reverse={reverse} />
      ),
    },
    { path: "*", Component: Erro404 },
  ]);

  if (router == null) return;

  return (
    <AnimatePresence>
      {React.cloneElement(router, { key: location.pathname })}
    </AnimatePresence>
  );
}
