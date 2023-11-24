"use client";
import "./globals.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./inicio/contato";
import Sobre from "./inicio/sobre";
import EntrarCadastro from "./inicio/entrarCadastro";
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
import { useEffect, useState } from "react";
import { darkMode, mudarTema } from "@/services/tema";
import $ from "jquery";
import Background from "@/components/background";
import EsqueceuSenha from "./inicio/entrarCadastro/esqueceuSenha";
import VericacaoEmail from "./verificaçãoEmail";
import ConcluirCadastro from "./concluirCadastro";


export default function Root() {
  const cookies = useCookies();
  var logado: boolean = cookies.get("logado") == "true";
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    html.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    mudarTema(cookies.get("dark") == "true");

    $("#navbar")
      .on("mouseenter", () => {
        $("#conteudo").css("filter", "blur(2px)");
      })
      .on("mouseleave", () => {
        $("#conteudo").css("filter", "blur(0)");
      });
  });

  if (logado)
    return (
      <>
        <Background dark={dark} />
        <Router>
          {/* USUÁRIO LOGADO */}
          <div
            style={{
              marginLeft: "9em",
              position: "absolute",
              width: "calc(100vw - 9em)",
              height: "100vh",
            }}
            id="conteudo"
          >
            <Routes>
              <Route path="/" Component={Home} index></Route>
              <Route path="/cursos" Component={Cursos}></Route>
              <Route path="/carreiras" Component={Empresas}></Route>
              <Route
                path="/mais"
                element={
                  <Mais
                    onModoMudado={() => {
                      setDark(darkMode);
                    }}
                  />
                }
              >
                <Route Component={Conta} index />
                <Route path="senha" Component={Senha} />
                <Route path="privacidade" Component={Privacidade} />
                <Route path="central" Component={CentralAjuda} />
              </Route>

              <Route path="*" Component={Erro404}></Route>
            </Routes>
          </div>
          <NavbarHome />
        </Router>
      </>
    );
  else
    return (
      <>
        <Background dark={dark} />
        <Router>
          {/* USUÁRIO NÃO LOGADO */}
          <NavbarInicio />
          <div className="testa">
            <Routes>
              <Route path="/" Component={Inicio} index></Route>
              <Route path="/sobre" Component={Sobre}></Route>
              <Route path="/contato" Component={Contato}></Route>
              <Route path="/entrar" Component={EntrarCadastro}></Route>
              <Route path="/esqueceu" Component={EsqueceuSenha}></Route>
              <Route
                path="/verificaçãoEmail"
                Component={VericacaoEmail}
              ></Route>
              <Route
                path="/concluirCadastro"
                Component={ConcluirCadastro}
              ></Route>

              <Route path="*" Component={Erro404} index></Route>
            </Routes>
          </div>
          <PopupPolitica />
        </Router>
      </>
    );
}
