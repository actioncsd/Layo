import { Fragment } from 'react';
import { Asterisco } from '../../components/Asterisco/Asterisco';
import styles from './Parceria.module.css';

const ETAPAS = [
  { numero: '01', titulo: 'Estratégia', texto: 'Definição de objetivos, persona e tom de comunicação.' },
  {
    numero: '02',
    titulo: 'Pautas',
    texto: 'Criação de pautas alinhadas ao posicionamento da marca e às necessidades do público-alvo.',
  },
  {
    numero: '03',
    titulo: 'Benchmarking',
    texto: 'Análise de concorrência e benchmarking para identificar oportunidades.',
  },
  {
    numero: '04',
    titulo: 'Produção',
    texto: 'Conteúdos estratégicos: carrosséis, vídeos curtos, posts institucionais e educativos.',
  },
  {
    numero: '05',
    titulo: 'Publicação',
    texto: 'Agendamento e publicação de conteúdos, com monitoramento das interações.',
  },
  { numero: '06', titulo: 'Análise', texto: 'Análise de desempenho e sugestões de ajustes estratégicos.' },
];

const CRESCIMENTO = ['Posicionamento', 'Engajamento', 'Geração de leads', 'Referência digital'];

export function Parceria() {
  return (
    <section className={styles.parceria}>
      <Asterisco semente={7} cor="#FFFFFF" className={styles.asterisco} />
      <div className="container">
        <span className="eyebrow eyebrow-clara">Escopo</span>
        <h2 className={`anton ${styles.titulo}`}>
          Como a parceria
          <br />
          <span>funciona.</span>
        </h2>
        <div className={styles.etapas}>
          {ETAPAS.map((etapa) => (
            <div key={etapa.numero} className={styles.etapa}>
              <span className={`anton ${styles.numero}`}>{etapa.numero}</span>
              <span className={`condensada ${styles.etapaTitulo}`}>{etapa.titulo}</span>
              <span className={styles.etapaTexto}>{etapa.texto}</span>
            </div>
          ))}
        </div>
        <div className={`condensada ${styles.crescimentoTitulo}`}>Crescimento progressivo em quatro etapas</div>
        <div className={styles.crescimento}>
          {CRESCIMENTO.map((fase, indice) => (
            <Fragment key={fase}>
              {indice > 0 && <span className={`anton ${styles.seta}`}>→</span>}
              <span className={`condensada ${styles.fase}`}>{fase}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
