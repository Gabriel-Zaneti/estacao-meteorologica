import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Cloud, Clock } from 'lucide-react' //icones-gerais
import Dashboard from './pages/Dashboard'
import Historico from './pages/Historico'
import Analise from './pages/Analise'

function App() {
  return (
    <BrowserRouter>
      <div className="estrutura">
        {/* Barra Lateral */}
        <aside className="sidebar">
          {/* Titúlo da Barra Lateral */}
          <div className="sidebar-icone-titulo">
            <div className="sidebar-icone">
              <Cloud size={34} className="titulo-icone"></Cloud>
            </div>
            <div className="sidebar-titulo">
              <h1>PrevisãoTempo</h1>
              <span>Estação Meteorológica</span>
            </div>
          </div>
          {/* Navegação da Barra Lateral */}
          <nav className="sidebar-nav">
            <Link to="/" className="nav-item nav-item-ativo">Dashboard</Link>
            <Link to="/historico" className="nav-item">Histórico</Link>
            <Link to="/analise" className="nav-item">Análise</Link>
          </nav>

        </aside>
        {/* Main */}
        <main className="main">
          {/* Cabeçalho da Main */}
          <header className="main-cabecalho">
            <Clock size={15} className="cabecalho-icone"></Clock>
            <span>Última atualização: ##/##/#### ##:##</span>
          </header>
          {/* ROTAS */}
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/historico" element={<Historico/>} />
            <Route path="/analise" element={<Analise/>} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  )
}

export default App