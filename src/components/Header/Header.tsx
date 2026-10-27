import logo from '../../assets/logo.png';
import { WHATSAPP_URL } from '../../config';
import styles from './Header.module.css';

const LINKS = [
  { href: '#quem-somos', rotulo: 'Quem somos' },
  { href: '#servicos', rotulo: 'Serviços' },
  { href: '#portfolio', rotulo: 'Portfólio' },
  { href: '#sobre', rotulo: 'Quem faz' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#inicio" aria-label="Layo Mkt, início" className={styles.marca}>
          <img className={styles.logo} src={logo} alt="Layo Mkt" />
        </a>
        <div className={styles.links}>
          {LINKS.map((link) => (
            <a key={link.href} className={`hide-sm ${styles.link}`} href={link.href}>
              {link.rotulo}
            </a>
          ))}
          <a className={`btn pulse ${styles.destaque}`} href={WHATSAPP_URL}>
            Fale com a Layo
          </a>
        </div>
      </nav>
    </header>
  );
}
