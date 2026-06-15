import styles from "./About.module.css";

function About() {
  return (
    <section className={styles["contenedor-section"]}>
      <div className={styles["contenedor-titulo-principal"]}>
        <h2 className={styles["titulo-principal"]}>Mis proyectos en frontend</h2>
      </div>

      {/* Proyectos */}
      <div className={styles.contenedorProyectos}>
        {/* Proyecto: Turismo en San Luis */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Turismo en San Luis</h3>
          <p>
            Desarrollé Turismo en San Luis, una plataforma web interactiva construida con React, TypeScript y React Router. El proyecto optimiza la navegación entre guías turísticas mediante un enrutamiento dinámico y seguro, aprovechando el tipado fuerte de TypeScript para un código robusto y mantenible.
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://valdez-jose.github.io/galeria-sanluis/" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver proyecto
            </a>
          </div>
        </div> 

        {/* Proyecto: Vevero */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Vevero</h3>
          <p>
            Vivero El Paso es una aplicación web moderna desarrollada con React y TypeScript, diseñada para la visualización, filtrado y gestión de un catálogo digital de plantas y productos de jardinería. Gracias al uso de TypeScript, el proyecto cuenta con una arquitectura robusta, un tipado seguro para el inventario y una experiencia de usuario fluida y reactiva.
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://valdez-jose.github.io/vivero-el-paso/" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver proyecto
            </a>
          </div>
        </div>

        {/* Proyecto: Bicicleteria */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Bicicleteria</h3>
          <p>
            Desarrollé Bicicletería, una solución web para la gestión de productos y servicios de ciclismo utilizando Angular. Implementé una estructura modular con rutas hijas, consumo de servicios para el manejo de datos y formularios reactivos, garantizando una experiencia de usuario fluida y un código altamente mantenible.
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://bicicleteria-angular.vercel.app/" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver proyecto
            </a>
          </div>
        </div>

        {/* Proyecto: Todo-motos */}
        <div className={styles.cardProyecto}>
          <h3>Proyecto: Todo-motos</h3>
          <p>
            Todo-motos es una plataforma web para la exhibición y venta de motocicletas, desarrollada con Angular. La aplicación permite a los usuarios explorar diferentes modelos, filtrar por marcas o cilindradas y acceder a fichas técnicas detalladas. Está construida bajo una arquitectura modular y eficiente, garantizando una carga rápida de imágenes y una navegación fluida e intuitiva.
          </p>
          <div className={styles["contenedor-enlace"]}>
            <a href="https://todo-motos-angular.vercel.app/" target="_blank" rel="noreferrer" className={styles["enlace-proyecto"]}>
              Ver proyecto
            </a>
          </div>
        </div>
      </div>

      {/* Mis Herramientas */}
      <div className={styles["contenedorComplemento"]}>
        <div className={styles["contenedor-titulo-secundario"]}>
          <h3 className={styles["titulo-secundario"]}>Mis herramientas</h3>
        </div>
        
        {/* Contenedor flex para que se centren de manera fluida */}
        <div className={styles.contenedorCardsHerramientas}>
          <div className={styles.cardHerramienta}><h3>React</h3></div>
          <div className={styles.cardHerramienta}><h3>Typescript</h3></div>
          <div className={styles.cardHerramienta}><h3>Angular</h3></div>
          <div className={styles.cardHerramienta}><h3>Html5</h3></div>
          <div className={styles.cardHerramienta}><h3>CSS3</h3></div>
          <div className={styles.cardHerramienta}><h3>Bootstrap</h3></div>
          <div className={styles.cardHerramienta}><h3>Git</h3></div>
          <div className={styles.cardHerramienta}><h3>Github</h3></div>
          <div className={styles.cardHerramienta}><h3>Vercel</h3></div>
        </div>
      </div>
    </section>
  );
}

export default About;