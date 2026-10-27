import { useState } from 'react';
import feedAction from '../../assets/feeds/actioncsd.jpg';
import feedIzzah from '../../assets/feeds/izzahimports.jpg';
import feedOvni from '../../assets/feeds/ovnirentacar.jpg';
import post01 from '../../assets/posts/post-01.jpg';
import post02 from '../../assets/posts/post-02.jpg';
import post03 from '../../assets/posts/post-03.jpg';
import post04 from '../../assets/posts/post-04.jpg';
import post05 from '../../assets/posts/post-05.jpg';
import post06 from '../../assets/posts/post-06.jpg';
import post07 from '../../assets/posts/post-07.jpg';
import post08 from '../../assets/posts/post-08.jpg';
import post09 from '../../assets/posts/post-09.jpg';
import post10 from '../../assets/posts/post-10.jpg';
import post11 from '../../assets/posts/post-11.jpg';
import post12 from '../../assets/posts/post-12.jpg';
import videoAction from '../../assets/videos/action-eventos.jpg';
import videoIzzah from '../../assets/videos/izzah-produtos.jpg';
import videoLayoRec from '../../assets/videos/layo-rec.jpg';
import { Asterisco } from '../../components/Asterisco/Asterisco';
import { Seta } from '../../components/Seta/Seta';
import { INSTAGRAM } from '../../config';
import styles from './Portfolio.module.css';

const ABAS = [
  { id: 'posts', rotulo: 'Posts' },
  { id: 'feeds', rotulo: 'Feeds' },
  { id: 'videos', rotulo: 'Vídeos' },
] as const;

type Aba = (typeof ABAS)[number]['id'];

const POSTS = [
  { imagem: post01, titulo: 'Compressor Mahle, líder de vendas', url: 'https://www.instagram.com/p/C2Ij9eZuXMK/', quadrado: true },
  {
    imagem: post02,
    titulo: 'Motor Gauss para caixa Uno Fire e Fiorino',
    url: 'https://www.instagram.com/p/C1pnOvaORen/?img_index=1',
    quadrado: true,
  },
  {
    imagem: post03,
    titulo: 'Segredos da máquina de limpeza Mastercool',
    url: 'https://www.instagram.com/p/C2ryyDkLnX2/?img_index=1',
    quadrado: true,
  },
  {
    imagem: post04,
    titulo: 'Seu negócio ainda utiliza processos apoiados em planilhas?',
    url: 'https://www.instagram.com/p/DSHx295iVmd/?img_index=1',
  },
  { imagem: post05, titulo: 'Somos mais que apenas uma consultoria', url: 'https://www.instagram.com/p/DSCoQ8oAX0w/?img_index=1' },
  {
    imagem: post06,
    titulo: 'Nossos consultores são experts em negócios',
    url: 'https://www.instagram.com/p/DR1wTHRFRnW/?img_index=1',
  },
  { imagem: post07, titulo: 'Com a Ovni, você roda com liberdade e tranquilidade', url: 'https://www.instagram.com/p/DbIpzGvS72D/' },
  { imagem: post08, titulo: 'Para quem a Ovni é?', url: 'https://www.instagram.com/p/DbDp7GjS7JG/' },
  { imagem: post09, titulo: 'Carros revisados, prontos para o seu sucesso', url: 'https://www.instagram.com/p/Da3eMNaSBXh/' },
  { imagem: post10, titulo: 'Edição de Aniversário, Lattafa Asad kit 2x1', url: 'https://www.instagram.com/p/DUI5PAHDUe7/' },
  {
    imagem: post11,
    titulo: 'Musamam White Intense, perfume árabe fresco e luxuoso',
    url: 'https://www.instagram.com/p/DUD53rVjdhN/',
  },
  { imagem: post12, titulo: 'Fragrância sensual Ameerat Al Arab', url: 'https://www.instagram.com/p/DT_BJ7XlTkq/' },
];

const FEEDS = [
  {
    imagem: feedAction,
    nome: 'Action Consultoria',
    perfil: '@actioncsd',
    descricao: 'Consultoria em negócios e tecnologia.',
    url: 'https://www.instagram.com/actioncsd/',
  },
  {
    imagem: feedOvni,
    nome: 'Ovni Rent a Car',
    perfil: '@ovnirentacar',
    descricao: 'Aluguel de veículos para motoristas de app ou por temporada.',
    url: 'https://www.instagram.com/ovnirentacar/',
  },
  {
    imagem: feedIzzah,
    nome: 'Izzah Imports',
    perfil: '@izzahimports',
    descricao: 'Perfumes e cosméticos importados.',
    url: 'https://www.instagram.com/izzahimports/',
  },
];

const VIDEOS = [
  {
    imagem: videoAction,
    nome: 'Action Consultoria',
    descricao: 'Cobertura de eventos corporativos.',
    url: 'https://www.instagram.com/p/DecnwfkhINW/',
  },
  {
    imagem: videoIzzah,
    nome: 'Izzah Imports',
    descricao: 'Vídeos criativos para os seus produtos.',
    url: 'https://www.instagram.com/p/DUV0NBejXXw/',
  },
  {
    imagem: videoLayoRec,
    nome: 'Layo.rec',
    descricao: 'Captação e edição para nichos de turismo e automotivo.',
    url: 'https://www.instagram.com/p/DdJkZ4Gg0K9/',
  },
];

function IconeInstagram({ tamanho }: { tamanho: number }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" />
    </svg>
  );
}

function Posts() {
  return (
    <div className={styles.posts}>
      {POSTS.map((post) => (
        <a
          key={post.url}
          className={`${styles.post} ${post.quadrado ? styles.quadrado : ''}`}
          href={post.url}
          target="_blank"
          rel="noopener"
          aria-label={`Post: ${post.titulo} (abre no Instagram)`}
        >
          <img src={post.imagem} alt={`Post: ${post.titulo}`} loading="lazy" />
          <span className={styles.sobreposicao}>
            <span className={`condensada ${styles.selo}`}>Ver no Instagram →</span>
          </span>
          <span className={styles.instagram}>
            <IconeInstagram tamanho={22} />
          </span>
        </a>
      ))}
    </div>
  );
}

function Feeds() {
  return (
    <div className={styles.feeds}>
      {FEEDS.map((feed) => (
        <a
          key={feed.url}
          className={styles.feed}
          href={feed.url}
          target="_blank"
          rel="noopener"
          aria-label={`${feed.nome}, ${feed.perfil} (abre o perfil no Instagram)`}
        >
          <div className={styles.celular}>
            <img src={feed.imagem} alt={`Feed do Instagram de ${feed.nome}`} loading="lazy" />
            <span className={`${styles.sobreposicao} ${styles.sobreposicaoFeed}`}>
              <span className={`condensada ${styles.selo}`}>Ver perfil →</span>
            </span>
          </div>
          <div className={styles.perfil}>
            <span className={styles.perfilIcone}>
              <IconeInstagram tamanho={20} />
            </span>
            <span className={styles.perfilTexto}>
              <span className={`condensada ${styles.perfilNome}`}>{feed.nome}</span>
              <span className={styles.perfilArroba}>{feed.perfil}</span>
              <span className={styles.perfilDescricao}>{feed.descricao}</span>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

function Videos() {
  return (
    <div className={styles.videos}>
      {VIDEOS.map((video) => (
        <a
          key={video.url}
          className={styles.video}
          href={video.url}
          target="_blank"
          rel="noopener"
          aria-label={`Reels: ${video.descricao} (abre no Instagram)`}
        >
          <span className={styles.capa}>
            <img src={video.imagem} alt={`Capa do reels: ${video.descricao}`} loading="lazy" />
            <span className={styles.sombra} />
            <span className={styles.play}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#111111" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className={`condensada ${styles.reels}`}>Reels</span>
          </span>
          <span className={`condensada ${styles.videoNome}`}>{video.nome}</span>
          <span className={styles.videoDescricao}>{video.descricao}</span>
        </a>
      ))}
    </div>
  );
}

export function Portfolio() {
  const [aba, setAba] = useState<Aba>('posts');

  return (
    <section id="portfolio" className={styles.portfolio}>
      <Asterisco semente={4} cor="#FF6E00" className={styles.asterisco} />
      <div className="container">
        <span className="eyebrow">Portfólio</span>
        <div className={styles.topo}>
          <h2 className={`anton ${styles.titulo}`}>
            O que a gente
            <br />
            <span>já criou.</span>
          </h2>
          <div className={styles.abas}>
            {ABAS.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`condensada ${styles.aba} ${aba === item.id ? styles.ativa : ''}`}
                onClick={() => setAba(item.id)}
              >
                {item.rotulo}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.galeria}>
          {aba === 'posts' && <Posts />}
          {aba === 'feeds' && <Feeds />}
          {aba === 'videos' && <Videos />}
        </div>
        <div className={styles.mais}>
          <a className={`brilho ${styles.maisLink}`} href={INSTAGRAM.layomkt}>
            <span className={styles.maisIcone}>
              <Seta />
            </span>
            <span className="condensada">Ver mais no @layomkt</span>
          </a>
          <a className={`brilho ${styles.maisLink} ${styles.maisRec}`} href={INSTAGRAM.layorec}>
            <span className={styles.maisIcone}>
              <Seta />
            </span>
            <span className="condensada">Vídeos no @layo.rec</span>
          </a>
        </div>
      </div>
    </section>
  );
}
