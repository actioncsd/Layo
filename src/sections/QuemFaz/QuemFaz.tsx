import lucilene from '../../assets/lucilene.jpg';
import { Asterisco } from '../../components/Asterisco/Asterisco';
import { Sublinhado } from '../../components/Sublinhado/Sublinhado';
import { WHATSAPP_URL } from '../../config';
import styles from './QuemFaz.module.css';

const COMPETENCIAS = [
  { rotulo: 'Estratégia', estilo: styles.escura },
  { rotulo: 'Conteúdo', estilo: styles.roxa },
  { rotulo: 'Tráfego', estilo: styles.laranja },
  { rotulo: 'Automação', estilo: styles.escura },
  { rotulo: 'Vídeo', estilo: styles.roxa },
];

export function QuemFaz() {
  return (
    <section id="sobre" className="claro">
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.foto}>
          <Asterisco semente={5} cor="#FF6E00" className={styles.asteriscoTopo} />
          <Asterisco semente={6} cor="#111111" className={styles.asteriscoBase} />
          <div className={styles.moldura}>
            <img src={lucilene} alt="Lucilene Parente, da Layo Mkt" />
          </div>
        </div>
        <div className={styles.texto}>
          <span className="eyebrow">Quem faz</span>
          <h2 className={`condensada ${styles.titulo}`}>
            Prazer,
            <br />
            <Sublinhado>Lucilene.</Sublinhado>
          </h2>
          <p className={styles.apresentacao}>
            Lucilene Parente é a responsável pela Layo Mkt e acompanha cada projeto de perto, da estratégia à entrega.
          </p>
          <p className={styles.valores}>
            Excelência, personalização, inovação, transparência e relacionamento de longo prazo, sempre com foco em
            resultados, ética e responsabilidade.
          </p>
          <div className={styles.competencias}>
            {COMPETENCIAS.map((competencia) => (
              <span key={competencia.rotulo} className={`condensada ${styles.competencia} ${competencia.estilo}`}>
                {competencia.rotulo}
              </span>
            ))}
          </div>
          <div className={styles.cta}>
            <a className="btn btn-roxo" href={WHATSAPP_URL}>
              Falar com a Lucilene →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
