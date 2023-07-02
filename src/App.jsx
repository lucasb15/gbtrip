import './App.css'
import Avaliacoes from './pages/components/avaliacoes';
import Banner from './pages/components/banner';
import Cta from './pages/components/cta';
import Footer from './pages/components/footer';
import DestinosProcurados from './pages/components/maisProcurados';
import Nav from './pages/components/navegacao';
import Sobre from './pages/components/sobre';

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <DestinosProcurados />
      <Sobre />
      <Avaliacoes />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
