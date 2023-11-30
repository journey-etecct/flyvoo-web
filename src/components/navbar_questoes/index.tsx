// NavbarQuestoes.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

export default function NavbarQuestoes() {
  return (
    <nav className={styles.head}>
      <NavLink to="/" className={styles.logo}>
        {/* Adicione a logo e o nome conforme necessário */}
        <img src="/img/logo.png" alt="Logo" className={styles.logoImg} />
        <p className={styles.flyHead}>FLYVOO</p>
      </NavLink>
      <div className={styles.rightSection}>
        <NavLink to="/sair" className={styles.btnHeadFill}>
          Sair
        </NavLink>
      </div>
    </nav>
  );
}
