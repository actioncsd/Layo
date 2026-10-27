import { useState } from 'react';
import { WHATSAPP_URL } from '../../config';
import styles from './Duvidas.module.css';

const PERGUNTAS = [
  {
    pergunta: 'Quanto custa contratar a Layo?',
    resposta:
      'O investimento é definido de acordo com cada negócio e os serviços escolhidos. Após a reunião de alinhamento, você recebe uma proposta personalizada.',
  },
  {
    pergunta: 'Em quanto tempo o trabalho começa?',
    resposta:
      'Após a assinatura do contrato e a reunião de alinhamento, em até 7 dias são enviadas as primeiras estratégias.',
  },
  {
    pergunta: 'Vou receber relatórios?',
    resposta:
      'Sim. Relatórios de performance mensais com métricas de alcance, engajamento, crescimento e geração de leads, para decisões embasadas em dados.',
  },
  {
    pergunta: 'O investimento em anúncios está incluso?',
    resposta:
      'Não. Em campanhas de tráfego pago, a Layo faz o planejamento, a criação e a gestão, e o investimento em mídia é responsabilidade da contratante.',
  },
  {
    pergunta: 'As informações da minha empresa ficam seguras?',
    resposta:
      'Sim. A Layo Mkt mantém sigilo absoluto sobre todas as informações da empresa contratante às quais tiver acesso durante o contrato.',
  },
];

export function Duvidas() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section id="faq" className="claro">
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.cabecalho}>
          <span className="eyebrow">Dúvidas</span>
          <h2 className={`condensada ${styles.titulo}`}>
            Perguntas que
            <br />a gente <span className="hl">sempre ouve.</span>
          </h2>
          <p className={styles.chamada}>
            Ficou alguma? <a href={WHATSAPP_URL}>Chama no WhatsApp.</a>
          </p>
        </div>
        <div className={styles.lista}>
          {PERGUNTAS.map((item, indice) => (
            <div key={item.pergunta} className={styles.duvida}>
              <button
                type="button"
                className={styles.pergunta}
                aria-expanded={aberta === indice}
                onClick={() => setAberta(aberta === indice ? null : indice)}
              >
                <span className="condensada">{item.pergunta}</span>
                <span className={styles.icone}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {aberta === indice && <p className={styles.resposta}>{item.resposta}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
