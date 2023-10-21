"use client";
import Image from "next/image";
import style from "./index.module.css";
import "@/app/globals.css";
import { useRef, useState, RefObject, useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCookies } from "next-client-cookies";

export let reverse: boolean;

const telas: string[] = ["/", "/sobre", "/contato", "/entrar", "/verificaçãoEmail", "/esqueceuSenha"];
export function mudarCoiso(path: string) {
  reverse = telas.indexOf(path) < telas.indexOf(location.pathname);
}

export default function NavbarInicio() {
  const cookies = useCookies();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [luzOpacidade, setLuzOpacidade] = useState(0);

  function hoverHome() {
    setLuzOpacidade(1);
  }

  function removerListener() {
    setLuzOpacidade(0);
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
        onClick={() => mudarCoiso("/")}
        onDoubleClick={() => {
          cookies.set("logado", "true");
          window.location.reload();
        }}
      >
        <motion.div
          ref={ref}
          animate={{ x: x - 15, y: y - 15 }}
          className={style.luz}
          transition={{ delay: 0, duration: 0 }}
          style={{ opacity: luzOpacidade }}
        ></motion.div>
        <Image src="/img/logo.png" width={84} height={64} alt="" priority />
        <p className={style.flyHead}> FLYVOO </p>
      </NavLink>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavLink
          onClick={() => mudarCoiso("/sobre")}
          to={"/sobre"}
          className={({ isActive, isPending }) =>
            isActive ? `${style.linkHead} ${style.selecionado}` : style.linkHead
          }
        >
          Sobre o Flyvoo
        </NavLink>
        <NavLink
          onClick={() => mudarCoiso("/contato")}
          to={"/contato"}
          className={({ isActive, isPending }) =>
            isActive ? `${style.linkHead} ${style.selecionado}` : style.linkHead
          }
        >
          Contato
        </NavLink>
        <NavLink
          onClick={() => mudarCoiso("/entrar")}
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

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  });

  return point;
}
