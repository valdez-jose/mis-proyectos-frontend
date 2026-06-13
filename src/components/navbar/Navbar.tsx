import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const proyectos = [
    {
      nombre: "Proyecto React",
      link: "https://proyecto-react.vercel.app",
    },
    {
      nombre: "Proyecto Angular",
      link: "https://proyecto-angular.vercel.app",
    },
    {
      nombre: "Proyecto TS",
      link: "https://proyecto-ts.vercel.app",
    },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Botón hamburguesa por si deseas mantener el comportamiento responsive */}
      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
            <a
              href={proyecto.link}
              target="_blank"
              rel="noreferrer"
            >
              {proyecto.nombre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;