"use client";
import "./globals.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./contato";
import Sobre from "./sobre";
import EntrarCadastro from "./entrarCadastro";
import { AnimatePresence } from "framer-motion";
import Home from "./home";
import NavbarInicio from "@/components/navbar_inicio";
import NavbarHome from "@/components/navbar_home";
import { useCookies } from "next-client-cookies";

export default function Root() {
  const cookies = useCookies();
  var logado: boolean = cookies.get("logado") == "true";

  if (logado)
    return (
      <Router>
        {/* USUÁRIO LOGADO */}
        <div style={{ display: "flex" }}>
          <NavbarHome />
          <AnimatePresence>
            <Routes>
              <Route path="/" Component={Home} index></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    );
  else
    return (
      <Router>
        {/* USUÁRIO NÃO LOGADO */}
        <NavbarInicio />
        <div className="testa">
          <AnimatePresence>
            <Routes>
              <Route path="/" Component={Inicio} index></Route>
              <Route path="/sobre" Component={Sobre}></Route>
              <Route path="/contato" Component={Contato}></Route>
              <Route path="/entrar" Component={EntrarCadastro}></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    );
}
