import type { ReactNode } from 'react';
import logo from '../../assets/logo-servicos.png';
import { ChamadaWhatsApp } from '../../components/ChamadaWhatsApp/ChamadaWhatsApp';
import { Sublinhado } from '../../components/Sublinhado/Sublinhado';
import styles from './Servicos.module.css';

const SERVICOS: { titulo: string; texto: string; icone: ReactNode }[] = [
  {
    titulo: 'Gestão de redes',
    texto:
      'Planejamento estratégico, criação e agendamento de conteúdos, monitoramento das interações e análise de resultados. O foco é garantir presença consistente, autoridade e relacionamento com o público.',
    icone: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  },
  {
    titulo: 'Design gráfico',
    texto:
      'Criação de artes, identidade visual e criativos profissionais alinhados à identidade visual da marca. O objetivo é reforçar posicionamento, clareza e reconhecimento no digital.',
    icone: (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.6 7.6" />
      </>
    ),
  },
  {
    titulo: 'Storymaker',
    texto:
      'Desenvolvimento de roteiros estratégicos para stories e coberturas de eventos, com storytelling e chamadas claras. Trabalhar a proximidade, engajamento e conversão.',
    icone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M10.5 9l4 3-4 3z" />
      </>
    ),
  },
  {
    titulo: 'Tráfego pago',
    texto:
      'Planejamento e gestão de campanhas pagas com segmentação estratégica e otimizações contínuas. O foco é alcance qualificado, geração de leads e resultados mensuráveis.',
    icone: (
      <>
        <path d="M4 20V14M10 20V9M16 20V12M22 20V5" />
        <path d="M3 9l6-5 5 4 7-6" />
      </>
    ),
  },
  {
    titulo: 'Automações',
    texto:
      'Automação aliada à gestão de redes e ao tráfego pago para potencializar a presença digital da marca e gerar conversões consistentes.',
    icone: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </>
    ),
  },
  {
    titulo: 'Captação & edição · Layo.rec',
    texto:
      'Do roteiro à entrega: captação profissional em estúdio, externas e eventos, e edição estratégica com cortes dinâmicos, legendas, trilhas e chamadas claras.',
    icone: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M16 10l6-3v10l-6-3z" />
      </>
    ),
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="claro">
      <div className="container">
        <div className={styles.topo}>
          <div>
            <h2 className={`condensada ${styles.titulo}`}>
              Serviços
              <br />
              <Sublinhado>oferecidos.</Sublinhado>
            </h2>
            <p className={styles.intro}>
              Um time experiente que atua de forma integrada para entregar resultados consistentes e sustentáveis.
            </p>
          </div>
          <img className={`hide-sm ${styles.logo}`} src={logo} alt="Layo Mkt" />
        </div>
        <svg className={styles.riscos} viewBox="0 0 100 80" width="90" height="72" aria-hidden="true">
          <g stroke="#5C00BC" strokeWidth={7} strokeLinecap="round">
            <path d="M20 30 L40 48" />
            <path d="M52 6 L54 38" />
            <path d="M84 16 L68 42" />
            <path d="M10 62 L36 66" />
          </g>
        </svg>
        <div className={styles.conteudo}>
          <div className={styles.lista}>
            {SERVICOS.map((servico) => (
              <div key={servico.titulo} className={styles.servico}>
                <div className={styles.icone}>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#5C00BC"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {servico.icone}
                  </svg>
                </div>
                <div className={styles.divisor} />
                <div className={styles.descricao}>
                  <div className={`condensada ${styles.servicoTitulo}`}>{servico.titulo}</div>
                  <div className={styles.servicoTexto}>{servico.texto}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.lateral}>
            <div className={styles.dados}>
              <div className={styles.lampada}>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18h6M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z" />
                </svg>
              </div>
              <div className={`condensada ${styles.dadosTitulo}`}>
                Decisões com dados.
                <br />
                <Sublinhado>Não com achismos.</Sublinhado>
              </div>
              <p>
                Relatórios de performance mensais com métricas de alcance, engajamento, crescimento e geração de leads.
              </p>
            </div>
            <ChamadaWhatsApp complemento="e vamos conversar!" />
          </div>
        </div>
      </div>
    </section>
  );
}
