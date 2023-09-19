import { Link, NavLink } from "react-router-dom";
import styles from "./index.module.css";
import { Poppins } from "next/font/google";

const poppins500 = Poppins({ subsets: ["latin"], weight: "500" });

export default function NavbarHome() {
  return (
    <div style={{ position: "relative", overflow: "visible" }} id="navbar">
      <div className={styles.containerIcones}>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? styles.item + " " + styles.escolhido : styles.item
          }
          to={"/"}
        >
          <span className="material-symbols-rounded">mountain_flag</span>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? styles.item + " " + styles.escolhido : styles.item
          }
          to={"/cursos"}
        >
          <span className="material-symbols-rounded">school</span>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? styles.item + " " + styles.escolhido : styles.item
          }
          to={"/carreiras"}
        >
          <span className="bi-briefcase" style={{ fontSize: "2.7em" }}></span>
        </NavLink>
        <NavLink
          className={({ isActive, isPending }) =>
            isActive ? styles.item + " " + styles.escolhido : styles.item
          }
          to={"/mais"}
        >
          <span className="material-symbols-rounded">settings</span>
        </NavLink>
      </div>
      <div className={styles.containerNomes} style={poppins500.style}>
        <div className={styles.nome}>
          <p className={styles.p}>Início</p>
        </div>
        <div className={styles.nome}>
          <p className={styles.p}>Cursos</p>
        </div>
        <div className={styles.nome}>
          <p className={styles.p}>Carreiras</p>
        </div>
        <div className={styles.nome}>
          <p className={styles.p}>Mais</p>
        </div>
      </div>
    </div>
  );
}
