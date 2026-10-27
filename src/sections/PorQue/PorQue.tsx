import { WHATSAPP_URL } from '../../config';
import styles from './PorQue.module.css';

const CURVA =
  '0,295 25,287 50,287 75,277 100,270 125,271 150,275 175,267 200,261 225,245 250,246 275,235 300,228 325,221 350,218 375,225 400,218 425,212 450,206 475,190 500,187 525,187 550,183 575,180 600,175 625,155 650,159 675,155 700,146 725,135 750,135 775,122 800,132 825,125 850,114 875,104 900,109 925,98 950,98 975,92 1000,80';

const MOTIVOS = [
  {
    numero: '01',
    titulo: 'Autoridade de marca',
    texto: 'Presença estratégica nas redes sociais transmite credibilidade e atrai potenciais clientes corporativos.',
  },
  {
    numero: '02',
    titulo: 'Relacionamento com o cliente',
    texto: 'Manter-se ativo nas redes fortalece o vínculo com parceiros, fornecedores e leads.',
  },
  {
    numero: '03',
    titulo: 'Posicionamento comercial',
    texto: 'Conteúdos bem direcionados educam o público e facilitam o ciclo de vendas.',
  },
  {
    numero: '04',
    titulo: 'Análise de dados',
    texto: 'Relatórios mensais permitem decisões baseadas em dados concretos, não em achismos.',
  },
];

export function PorQue() {
  return (
    <section id="por-que" className={styles.porQue}>
      <svg className={styles.grafico} viewBox="0 0 1000 320" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
        <defs>
          <pattern id="gridp" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0H0V34" fill="none" stroke="#8B5CFF" strokeOpacity={0.45} strokeWidth={1} />
          </pattern>
        </defs>
        <polygon points={`${CURVA} 1000,320 0,320`} fill="#3A12A8" />
        <polygon points={`${CURVA} 1000,320 0,320`} fill="url(#gridp)" />
        <polyline points={CURVA} fill="none" stroke="#EDE6F7" strokeWidth={7} strokeLinejoin="round" />
      </svg>
      <div className="container">
        <div className={styles.topo}>
          <div className={styles.cabecalho}>
            <span className="eyebrow eyebrow-clara">Por que investir</span>
            <h2 className={`condensada ${styles.titulo}`}>
              Por que investir em
              <br />
              <span className={styles.destaque}>presença digital</span>
              <br />
              estratégica?
            </h2>
          </div>
          <a className={styles.selo} href={WHATSAPP_URL} aria-label="Bora conversar no WhatsApp">
            <svg className="spin" viewBox="0 0 200 200" width="190" height="190" aria-hidden="true">
              <defs>
                <path id="stampc" d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
              </defs>
              <circle cx="100" cy="100" r="96" fill="none" stroke="#7B2CF0" strokeWidth={5} />
              <circle cx="100" cy="100" r="86" fill="none" stroke="#FFFFFF" strokeWidth={2} />
              <text fill="#FFFFFF" className={styles.seloTexto}>
                <textPath href="#stampc">BORA CONVERSAR ★ BORA CONVERSAR ★</textPath>
              </text>
              <path
                d="M78 100h44M106 84l16 16-16 16"
                stroke="#FF6E00"
                strokeWidth={7}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className={styles.motivos}>
          {MOTIVOS.map((motivo) => (
            <div key={motivo.numero} className={styles.motivo}>
              <div className={`anton ${styles.numero}`}>{motivo.numero}</div>
              <div className={`condensada ${styles.motivoTitulo}`}>{motivo.titulo}</div>
              <p>{motivo.texto}</p>
            </div>
          ))}
        </div>
        <div className={styles.linha} />
        <p className={styles.compromisso}>
          Um compromisso com o crescimento e a <span>visibilidade de longo prazo</span> no ambiente digital.
        </p>
      </div>
    </section>
  );
}
