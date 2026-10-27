import { Faixa } from './components/Faixa/Faixa';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Contato } from './sections/Contato/Contato';
import { Duvidas } from './sections/Duvidas/Duvidas';
import { Hero } from './sections/Hero/Hero';
import { Parceria } from './sections/Parceria/Parceria';
import { PorQue } from './sections/PorQue/PorQue';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { ProximosPassos } from './sections/ProximosPassos/ProximosPassos';
import { QuemFaz } from './sections/QuemFaz/QuemFaz';
import { QuemSomos } from './sections/QuemSomos/QuemSomos';
import { Servicos } from './sections/Servicos/Servicos';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Faixa />
        <QuemSomos />
        <PorQue />
        <Servicos />
        <Portfolio />
        <QuemFaz />
        <Parceria />
        <ProximosPassos />
        <Duvidas />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
