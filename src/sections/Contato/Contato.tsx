import { Asterisco } from '../../components/Asterisco/Asterisco';
import { ChamadaWhatsApp } from '../../components/ChamadaWhatsApp/ChamadaWhatsApp';
import { EMAIL, INSTAGRAM, WHATSAPP_TELEFONE, WHATSAPP_URL } from '../../config';
import styles from './Contato.module.css';

export function Contato() {
  return (
    <section id="contato" className={styles.contato}>
      <Asterisco semente={9} cor="#7B2CF0" className={styles.asterisco} />
      <div className="container">
        <div className={`condensada ${styles.rotulo}`}>Nossos contatos</div>
        <div className={styles.linha} />
        <h2 className={`anton ${styles.titulo}`}>
          <span className={styles.claro}>Estamos prontos para</span>
          <br />
          <span className={styles.destaque}>iniciar essa parceria.</span>
        </h2>
        <p className={styles.texto}>Uma parceria estratégica para elevar a presença digital da sua empresa.</p>
        <div className={styles.cta}>
          <ChamadaWhatsApp escura complemento="e vamos começar!" />
        </div>
        <div className={styles.canais}>
          <div>
            <div className={`condensada ${styles.canal}`}>WhatsApp</div>
            <a className={styles.valor} href={WHATSAPP_URL}>
              {WHATSAPP_TELEFONE}
            </a>
          </div>
          <div>
            <div className={`condensada ${styles.canal}`}>E-mail</div>
            <a className={styles.valor} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
          <div>
            <div className={`condensada ${styles.canal}`}>Instagram</div>
            <div className={styles.perfis}>
              <a className={styles.valor} href={INSTAGRAM.layomkt}>
                @layomkt
              </a>
              <a className={styles.valor} href={INSTAGRAM.layorec}>
                @layo.rec
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
