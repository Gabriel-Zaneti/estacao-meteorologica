import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { buscarMedicaoAtual } from "./services/climaService"
import { Cloud, Clock } from 'lucide-react' //icones-gerais
import Dashboard from './pages/Dashboard'
import Historico from './pages/Historico'
import Analise from './pages/Analise'

function App() {
  //Medição atual e cidade selecionada - Dashboard
  const [medicaoAtual, setMedicaoAtual] = useState(null);
  const [cidadeSelecionada, setCidadeSelecionada] = useState("São Paulo");
  //Tratamento
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataAtualizacao = medicaoAtual ? new Date(medicaoAtual.forecastAt) : null

  //Carrega as medições dos flashcards apartir da cidade escolhida
  useEffect(() => {
    async function carregarDados() {
      setLoading(true);
      setErro(null);
      try {
        const dados = await buscarMedicaoAtual(cidadeSelecionada);
        setMedicaoAtual(dados);
      } catch (error) {
        setErro(error);
        setMedicaoAtual(null)
        console.error("Erro ao carregar as medições", error);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, [cidadeSelecionada]);

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
            <NavLink to="/" className={({ isActive }) => isActive ?
              "nav-item nav-item-ativo" : "nav-item"}
            >Dashboard</NavLink>
            <NavLink to="/historico" className={({ isActive }) => isActive ?
              "nav-item nav-item-ativo" : "nav-item"}
            >Histórico</NavLink>
            <NavLink to="/analise" className={({ isActive }) => isActive ?
              "nav-item nav-item-ativo" : "nav-item"}
            >Análise</NavLink>
          </nav>

        </aside>
        {/* Main */}
        <main className="main">
          {/* Cabeçalho da Main */}
          <header className="main-cabecalho">
            <Clock size={15} className="cabecalho-icone"></Clock>
            <span>Última atualização: {dataAtualizacao
              ? dataAtualizacao.toLocaleString("pt-BR")
              : "Indisponível"}
            </span>
          </header>
          {/* ROTAS */}
          <Routes>
            <Route path="/" element={<Dashboard
              medicaoAtual={medicaoAtual}
              cidadeSelecionada={cidadeSelecionada}
              setCidadeSelecionada={setCidadeSelecionada}
              erro={erro}
              setErro={setErro}
              loading={loading}
            />} />
            <Route path="/historico" element={<Historico
              cidadeSelecionada={cidadeSelecionada}
            />} />
            <Route path="/analise" element={<Analise
              cidadeSelecionada={cidadeSelecionada}
            />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  )
}

export default App