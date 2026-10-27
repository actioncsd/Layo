import logo from '../../assets/logo.png';
import styles from './Footer.module.css';

const ANO = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <img className={styles.logo} src={logo} alt="Layo Mkt" />
        <div className={styles.direitos}>© {ANO} Layo Mkt · Soluções em Marketing e Automações</div>
      </div>
    </footer>
  );
}
