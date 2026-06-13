import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>Redes Sociales</h3>

      <div className={styles.redes}>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;