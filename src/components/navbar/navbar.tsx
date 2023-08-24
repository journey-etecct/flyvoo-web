import Image from "next/image";
import style from "./style.module.css";
import "@/app/globals.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={style.head}>
      <a
        /* routerLinkActive="selecionado" (mouseenter)="hoverHome()" */ className={
          style.logo
        }
        /* routerLink="/i" */
      >
        <span className={style.luz}></span>
        <Image src="/img/logo.png" width={84} height={64} alt="" priority />
        <p className={style.flyHead}> FLYVOO </p>
      </a>
      <div /* style="display: flex; align-items: baseline;" */>
        <a
          /* routerLinkActive="selecionado"
          routerLink="/sobre" */
          className={style.linkHead}
        >
          Sobre o Flyvoo
        </a>
        <a
          /* routerLinkActive="selecionado"
          routerLink="/contato" */
          className={style.linkHead}
        >
          Contato
        </a>
        <Link
          href="/sim"
          /* routerLinkActive="selecionado"
          routerLink="/entrar" */
          className={style.btnHeadFill}
        >
          Entrar/Cadastro
        </Link>
      </div>
    </nav>
  );
}
