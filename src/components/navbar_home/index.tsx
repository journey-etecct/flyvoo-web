import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

export default function NavbarHome() {
  return (
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
  );
}
