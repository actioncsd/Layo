import { Asterisco } from '../../components/Asterisco/Asterisco';
import styles from './QuemSomos.module.css';

const CARTOES = [
  {
    titulo: 'Missão',
    texto:
      'Ajudar empresas a alavancarem seus negócios através de estratégias digitais personalizadas e focadas em resultados reais.',
    estilo: styles.missao,
  },
  {
    titulo: 'Visão',
    texto:
      'Ser a principal agência de marketing digital para empresas B2B, transformando a presença digital de nossos clientes e garantindo crescimento sustentável.',
    estilo: styles.visao,
  },
  {
    titulo: 'Valores',
    texto:
      'Excelência, personalização, inovação, transparência e um relacionamento de longo prazo, sempre com foco em resultados, ética e responsabilidade.',
    estilo: styles.valores,
  },
];

export function QuemSomos() {
  return (
    <section id="quem-somos" className="claro">
      <Asterisco semente={2} cor="#FF6E00" className={styles.asteriscoTopo} />
      <Asterisco semente={3} cor="#111111" className={styles.asteriscoBase} />
      <div className={`container ${styles.conteudo}`}>
        <div className={styles.texto}>
          <span className="eyebrow">Quem somos</span>
          <h2 className={`condensada ${styles.titulo}`}>
            <span className={`hl ${styles.escuro}`}>Estratégias digitais personalizadas,</span>
            <br />
            <span className={`hl ${styles.laranja}`}>focadas em resultados reais.</span>
          </h2>
          <p className={styles.missaoTexto}>
            Na Layo Mkt, nossa missão é ajudar empresas a alavancarem seus negócios através de estratégias digitais
            personalizadas e focadas em resultados reais.
          </p>
          <p className={styles.crenca}>
            Acreditamos no poder do <strong>tráfego pago</strong>, da <strong>automação</strong> e da{' '}
            <strong>gestão de redes sociais</strong> para potencializar a presença digital das marcas e gerar conversões
            consistentes.
          </p>
        </div>
        <div className={styles.cartoes}>
          {CARTOES.map((cartao) => (
            <div key={cartao.titulo} className={`lift ${styles.cartao} ${cartao.estilo}`}>
              <div className={`condensada ${styles.cartaoTitulo}`}>{cartao.titulo}</div>
              <p>{cartao.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
