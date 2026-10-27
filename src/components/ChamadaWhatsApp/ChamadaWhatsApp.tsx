import { WHATSAPP_URL } from '../../config';
import { Seta } from '../Seta/Seta';
import styles from './ChamadaWhatsApp.module.css';

type ChamadaWhatsAppProps = {
  escura?: boolean;
  complemento: string;
};

export function ChamadaWhatsApp({ escura, complemento }: ChamadaWhatsAppProps) {
  return (
    <a className={`brilho ${styles.chamada} ${escura ? styles.escura : ''}`} href={WHATSAPP_URL}>
      <span className={styles.icone}>
        <Seta />
      </span>
      <span className={`condensada ${styles.texto}`}>
        Chama a Layo no WhatsApp
        <br />
        <span className={styles.complemento}>{complemento}</span>
      </span>
    </a>
  );
}
