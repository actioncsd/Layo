import { Fragment } from 'react';
import styles from './Faixa.module.css';

const SERVICOS = ['Social media', 'Tráfego pago', 'Automações', 'Design', 'Storymaker', 'Captação & edição'];

const PILARES = ['Criatividade', 'Tecnologia', 'Performance', 'Resultados reais', 'Estratégia', 'Conversão'];

function Itens({ itens, ocultar }: { itens: string[]; ocultar?: boolean }) {
  return (
    <div className={styles.itens} aria-hidden={ocultar || undefined}>
      {itens.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span className={styles.asterisco}>✱</span>
        </Fragment>
      ))}
    </div>
  );
}

export function Faixa() {
  return (
    <div className={styles.faixas}>
      <div className={`${styles.faixa} ${styles.laranja}`}>
        <div className={`marquee anton ${styles.trilho}`}>
          <Itens itens={SERVICOS} />
          <Itens itens={SERVICOS} ocultar />
        </div>
      </div>
      <div className={`${styles.faixa} ${styles.roxa}`} aria-hidden="true">
        <div className={`marquee rev condensada ${styles.trilho}`}>
          <Itens itens={PILARES} />
          <Itens itens={PILARES} />
        </div>
      </div>
    </div>
  );
}
