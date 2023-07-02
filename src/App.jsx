import './App.css'
import Avaliacoes from './pages/components/avaliacoes';
import Banner from './pages/components/banner';
import Cta from './pages/components/cta';
import Footer from './pages/components/footer';
import Nav from './pages/components/navegacao';
import Sobre from './pages/components/sobre';

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <Sobre />
      <Avaliacoes />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
