import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const proyectos = [
    {
      nombre: "Sobre mi",
      link: "https://sobre-mi-mu.vercel.app/",
    },
    {
      nombre: "Mi Portafolio",
      link: "https://nuevo-portafolio-angular.vercel.app/",
    }
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
              rel="noreferrer">
              {proyecto.nombre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;