"use client";
import "./globals.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./inicio/contato";
import Sobre from "./inicio/sobre";
import EntrarCadastro from "./entrarCadastro";
import Home from "./home";
import NavbarInicio from "@/components/navbar_inicio";
import NavbarHome from "@/components/navbar_home";
import NavbarQuestoes from "@/components/navbar_questoes"
import { useCookies } from "next-client-cookies";
import PopupPolitica from "@/components/blablabla";
import Erro404 from "./404";
import Cursos from "./home/cursos";
import Empresas from "./home/empresas";
import Mais from "./home/mais";
import Conta from "./home/mais/conta";
import Senha from "./home/mais/senha";
import Teste from "./home/teste/index";
import Privacidade from "./home/mais/privacidade";
import CentralAjuda from "./home/mais/centralAjuda";
import { useEffect, useState } from "react";
import { darkMode, mudarTema } from "@/services/tema";
import $ from "jquery";
import Background from "@/components/background";
import EsqueceuSenha from "./esqueceuSenha";
import VericacaoEmail from "./verificaçãoEmail";
import ConcluirCadastro from "./concluirCadastro";

export type ListaFaculdades = {
  UNESP?: Faculdade;
  UNIFESP?: Faculdade;
  USP?: Faculdade;
  "Universidade Cruzeiro do Sul"?: Faculdade;
  IFSP?: Faculdade;
  SPTech?: Faculdade;
};
export type Curso = {
  nome: string;
  "faculdade(s)": ListaFaculdades;
};
export type Faculdade = string;

export default function Root() {
  const cookies = useCookies();
  var logado: boolean = cookies.get("logado") === "true";
  const [dark, setDark] = useState(true);
  const [popupCursos, setPopupCursos] = useState(false);
  const [ppCNome, setPpCNome] = useState("");
  const [ppCFaculdades, setPpCFaculdades] = useState<ListaFaculdades>({});

  useEffect(() => {
    $(() => {
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
  });

  // Verifica se está na página de questões
  const isPaginaQuestoes = window.location.pathname === "/teste";

  if (logado)
    return (
      <>
        <Background dark={dark} />
        <Router>
          {/* USUÁRIO LOGADO */}
          {isPaginaQuestoes ? <NavbarQuestoes /> : <NavbarHome />}
          <div
            style={isPaginaQuestoes ? {} : {
              marginLeft: "9em",
              position: "absolute",
              width: "calc(100vw - 9em)",
              height: "100vh",
            }}
            id="conteudo"
          >
            <Routes>
              <Route path="/" Component={Home} index></Route>
              <Route
                path="/cursos"
                element={
                  <Cursos
                    setPpCNome={setPpCNome}
                    setPpCFaculdades={setPpCFaculdades}
                    setPopupCursos={setPopupCursos}
                  />
                }
              ></Route>
              <Route path="/carreiras" Component={Empresas}></Route>
              <Route path="/teste" Component={Teste}></Route>
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
        </Router>
      </>
    );
  else
    return (
      <>
        <Background dark={dark} />
        <Router>
          {/* USUÁRIO NÃO LOGADO */}
          {isPaginaQuestoes ? <NavbarQuestoes /> : <NavbarInicio />}
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