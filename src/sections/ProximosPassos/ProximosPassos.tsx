import { Asterisco } from '../../components/Asterisco/Asterisco';
import styles from './ProximosPassos.module.css';

const PASSOS = [
  { numero: '01', titulo: 'Assinatura do contrato', texto: 'Formalização da parceria.' },
  {
    numero: '02',
    titulo: 'Reunião de alinhamento',
    texto: 'Após o aceite da proposta, agendamos uma reunião para detalhar o planejamento e as expectativas.',
  },
  { numero: '03', titulo: 'Início da execução', texto: 'Em até 7 dias você recebe as primeiras estratégias.' },
];

export function ProximosPassos() {
  return (
    <section className={styles.proximosPassos}>
      <Asterisco semente={8} cor="#FF6E00" className={styles.asterisco} />
      <div className="container">
        <span className="eyebrow">Próximos passos</span>
        <h2 className={`anton ${styles.titulo}`}>
          Do aceite à execução
          <br />
          <span>em até 7 dias.</span>
        </h2>
        <div className={styles.passos}>
          {PASSOS.map((passo) => (
            <div key={passo.numero} className={`lift ${styles.passo}`}>
              <div className={`anton ${styles.numero}`}>{passo.numero}</div>
              <div className={`condensada ${styles.passoTitulo}`}>{passo.titulo}</div>
              <p>{passo.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
