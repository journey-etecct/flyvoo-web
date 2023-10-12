"use client";
import "./globals.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./contato";
import Sobre from "./sobre";
import EntrarCadastro from "./entrarCadastro";
import Home from "./home";
import NavbarInicio from "@/components/navbar_inicio";
import NavbarHome from "@/components/navbar_home";
import { useCookies } from "next-client-cookies";
import PopupPolitica from "@/components/blablabla";
import Erro404 from "./404";
import Cursos from "./home/cursos";
import Empresas from "./home/empresas";
import Mais from "./home/mais";
import Conta from "./home/mais/conta";
import Senha from "./home/mais/senha";
import Privacidade from "./home/mais/privacidade";
import CentralAjuda from "./home/mais/centralAjuda";
import { useEffect } from "react";
import { mudarTema } from "@/services/tema";

export default function Root() {
  const cookies = useCookies();
  var logado: boolean = cookies.get("logado") == "true";

  useEffect(() => {
    const html = document.documentElement;
    html.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    mudarTema(cookies.get("dark") == "true");
  });

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
              <Route path="/cursos" Component={Cursos}></Route>
              <Route path="/carreiras" Component={Empresas}></Route>
              <Route path="/mais" Component={Mais}>
                <Route Component={Conta} index />
                <Route path="senha" Component={Senha} />
                <Route path="privacidade" Component={Privacidade} />
                <Route path="central" Component={CentralAjuda} />
              </Route>

              <Route path="*" Component={Erro404}></Route>
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

            <Route path="*" Component={Erro404} index></Route>
          </Routes>
        </div>
        <PopupPolitica />
      </Router>
    );
}
