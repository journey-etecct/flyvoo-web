"use client";

import Image from "next/image";
import style from "./index.module.css";
import "@/app/globals.css";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [luzOpacidade, setLuzOpacidade] = useState(0);

  function hoverHome() {
    setLuzOpacidade(1);
    window.addEventListener("mousemove", funcaoEventoLogo, true);
  }

  function removerListener() {
    setLuzOpacidade(0);
    window.removeEventListener("mousemove", funcaoEventoLogo, true);
  }

  function funcaoEventoLogo(evento: MouseEvent) {
    setMousePos({ x: evento.clientX, y: evento.clientY });
  }

  return (
    <nav className={style.head}>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isActive ? `${style.logo} ${style.selecionado}` : style.logo
        }
        onMouseOver={hoverHome}
        onMouseOut={removerListener}
      >
        <span
          className={style.luz}
          style={{
            top: mousePos.y - 100,
            left: mousePos.x - 100,
            opacity: luzOpacidade,
          }}
        ></span>
        <Image src="/img/logo.png" width={84} height={64} alt="" priority />
        <p className={style.flyHead}> FLYVOO </p>
      </NavLink>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink
          to={"/sobre"}
          className={({ isActive, isPending }) =>
            isActive ? `${style.linkHead} ${style.selecionado}` : style.linkHead
          }
        >
          Sobre o Flyvoo
        </NavLink>
        <NavLink
          to={"/contato"}
          className={({ isActive, isPending }) =>
            isActive ? `${style.linkHead} ${style.selecionado}` : style.linkHead
          }
        >
          Contato
        </NavLink>
        <NavLink
          to="/entrar"
          className={({ isActive, isPending }) =>
            isActive
              ? `${style.btnHeadFill} ${style.selecionado}`
              : style.btnHeadFill
          }
        >
          Entrar/Cadastro
        </NavLink>
      </div>
    </nav>
  );
}
