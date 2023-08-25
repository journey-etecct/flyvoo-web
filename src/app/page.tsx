"use client";
import Navbar from "@/components/navbar";
import "./globals.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./inicio";
import Contato from "./contato";
import Sobre from "./sobre";
import EntrarCadastro from "./entrarCadastro";

export default function Root() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="testa">
        <Routes>
          <Route path="/" Component={Inicio} index></Route>
          <Route path="/sobre" Component={Sobre}></Route>
          <Route path="/contato" Component={Contato}></Route>
          <Route path="/entrar" Component={EntrarCadastro}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
