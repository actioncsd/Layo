import { Asterisco } from '../../components/Asterisco/Asterisco';
import { WHATSAPP_URL } from '../../config';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <Asterisco semente={1} cor="#7B2CF0" className={styles.asterisco} />
      <div className="container">
        <div className={`condensada ${styles.topo}`}>
          <span className={styles.marca}>Layo Mkt</span>
          <span className={`hide-sm ${styles.slogan}`}>Soluções em Marketing e Automações</span>
        </div>
        <div className={styles.linha} />
        <h1 className={`anton ${styles.titulo}`}>
          <span className={`rise ${styles.claro}`}>Estratégia digital</span>
          <br />
          <span className={`rise d2 ${styles.destaque}`}>com resultado real.</span>
        </h1>
        <div className={styles.conteudo}>
          <div className={styles.texto}>
            <p className={styles.descricao}>
              Somos uma agência especializada em estratégias digitais que unem{' '}
              <span className={styles.circulado}>
                criatividade, tecnologia e performance
                <svg viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M40 12 C 120 2, 280 4, 292 32 C 300 58, 120 70, 30 60 C -6 54, 2 22, 62 10"
                    stroke="#7B2CF0"
                    strokeWidth={4}
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              para transformar a presença online da sua empresa.
            </p>
            <div className={`condensada ${styles.servicos}`}>
              Gestão de redes.
              <br />
              Tráfego pago.
              <br />
              <span className={styles.destaque}>Automação.</span>
            </div>
          </div>
          <div className={styles.cta}>
            <a className="btn pulse" href={WHATSAPP_URL}>
              Quero elevar minha marca <span className="nudge">→</span>
            </a>
            <a className="btn btn-ghost" href="#servicos">
              Ver serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
