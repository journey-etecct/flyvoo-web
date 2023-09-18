"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./contato";
import Sobre from "./sobre";
import EntrarCadastro from "./entrarCadastro";
import { AnimatePresence } from "framer-motion";

var logado: boolean = true;

export default function Root() {
  if (logado)
    return (
      <Router>
        {/* USUÁRIO LOGADO */}
        <Navbar />
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
  else
    return (
      <Router>
        {/* USUÁRIO NÃO LOGADO */}
        <Navbar />
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
