import styles from "./About.module.css";

function About() {
  return (
    <section className={styles["contenedor-section"]}>
      <div className={styles["contenedor-titulo-principal"]}>
        <h2 className={styles["titulo-principal"]}>Los frameworks que uso</h2>
      </div>

      {/* Frameworks */}
      <div className={styles.contenedor}>
        <div className={styles.cards}>
          <h3>React</h3>
          <p>React permite construir interfaces modernas, reutilizables y escalables mediante componentes.</p>
        </div>
        <div className={styles.cards}>
          <h3>TypeScript</h3>
          <p>TypeScript aporta tipado estático, ayuda a detectar errores antes de ejecutar la aplicación y mejora la experiencia de desarrollo.</p>
        </div>
        <div className={styles.cards}>
          <h3>Angular</h3>
          <p>Angular es un framework completo que incluye herramientas integradas para aplicaciones grandes y empresariales.</p>
        </div>
        <div className={styles.cards}>
          <h3>Bootstrap</h3>
          <p>Bootstrap es un framework de diseño que facilita la creación de interfaces responsivas y modernas.</p>
        </div>
        <div className={styles.cards}>
          <h3>HTML5</h3>
          <p>HTML5 es la última versión de HTML, que incluye nuevas características y elementos para crear páginas web más potentes y ricas en contenido.</p>
        </div>
        <div className={styles.cards}>
          <h3>CSS3</h3>
          <p>CSS3 es la última versión de CSS, que incluye nuevas características y funcionalidades para crear diseños más avanzados y atractivos.</p>
        </div>
      </div>

      {/* Complementos */}
      <div className={styles["contenedorComplemento"]}>
        {/* NUEVO DIV CONTENEDOR PARA CENTRAR EL SUBTÍTULO */}
        <div className={styles["contenedor-titulo-secundario"]}>
          <h3 className={styles["titulo-secundario"]}>Complementos</h3>
        </div>
        
        <div className={styles.contenedorCardsComplementos}>
          <div className={styles.cards}>
            <h3>Git</h3>
            <p>Git es un sistema de control de versiones distribuido que permite gestionar y rastrear los cambios en el código fuente.</p>
          </div>
          <div className={styles.cards}> 
            <h3>Github</h3>
            <p>GitHub es una plataforma de desarrollo colaborativo que utiliza Git para gestionar y rastrear los cambios en el código fuente.</p>
          </div>
          <div className={styles.cards}> 
            <h3>Vercel</h3>
            <p>Vercel es una plataforma de despliegue en la nube que facilita la implementación y el despliegue de aplicaciones web.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;