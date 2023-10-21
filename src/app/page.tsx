"use client";
import "./globals.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./contato";
import Sobre from "./sobre";
import EntrarCadastro from "./entrarCadastro";
import esqueceuSenha from "./esqueceuSenha";
import vericacaoEmail from "./verificaçãoEmail";
import concluirCadastro from "./concluirCadastro";
import { AnimatePresence } from "framer-motion";
import Home from "./home";
import NavbarInicio from "@/components/navbar_inicio";
import NavbarHome from "@/components/navbar_home";
import { useCookies } from "next-client-cookies";
import PopupPolitica from "@/components/blablabla";

export default function Root() {
  const cookies = useCookies();
  var logado: boolean = cookies.get("logado") == "true";

  if (logado)
    return (
      <Router>
        {/* USUÁRIO LOGADO */}
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
            <Routes>
              <Route path="/" Component={Home} index></Route>
            </Routes>
          </div>
        </div>
      </Router>
    );
  else
    return (
      <Router>
        {/* USUÁRIO NÃO LOGADO */}
        <NavbarInicio />
        <div className="testa">
          <Routes>
            <Route path="/" Component={Inicio} index></Route>
            <Route path="/sobre" Component={Sobre}></Route>
            <Route path="/contato" Component={Contato}></Route>
            <Route path="/entrar" Component={EntrarCadastro}></Route>
            <Route path="/esqueceuSenha" Component={esqueceuSenha}></Route>
            <Route path="/verificaçãoEmail" Component={vericacaoEmail}></Route>
            <Route path="/concluirCadastro" Component={concluirCadastro}></Route>
          </Routes>
        </div>
        <PopupPolitica />
      </Router>
    );
}
