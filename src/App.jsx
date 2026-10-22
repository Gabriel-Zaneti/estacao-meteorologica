import './App.css'
import GraficoTemp from './components/graficoTemperatura'
import { Thermometer, Droplets, Wind, CloudDrizzle } from 'lucide-react'  //Icones-flashcards
import { CloudSun, Cloud, Clock } from 'lucide-react' //icones-gerais

function App() {
  return (
    <div className="dashboard">
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
          <a href="" className="nav-item nav-item-ativo">Dashboard</a>
          <a href="" className="nav-item">Histórico</a>
          <a href="" className="nav-item">Análise</a>
        </nav>

      </aside>
      {/* Main */}
      <main className="main">
        {/* Cabeçalho da Main */}
        <header className="main-cabecalho">
          <Clock size={15} className="cabecalho-icone"></Clock>
          <span>Última atualização: ##/##/#### ##:##</span>
        </header>
        {/* Titúlo da Main */}
        <div className="main-titulo">
          <h1>Condições Atuais</h1>
          <p>Dados da última coleta meteorológica</p>
        </div>
        {/* Flashcards da Main */}
        <div className="main-flashcards">

          <div className="flashcards-flashcard">
            <Thermometer size={34} className="flashcard-icones"></Thermometer>
            <h3>Temperatura</h3>
            <p className="flashcard-valor1">10 °C</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>
          <div className="flashcards-flashcard">
            <Droplets size={34} className="flashcard-icones"></Droplets>
            <h3>Umidade</h3>
            <p className="flashcard-valor1">10%</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>
          <div className="flashcards-flashcard">
            <CloudDrizzle size={34} className="flashcard-icones"></CloudDrizzle>
            <h3>Precipitação</h3>
            <p className="flashcard-valor1">10%</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>
          <div className="flashcards-flashcard">
            <Wind size={34} className="flashcard-icones"></Wind>
            <h3>Velocidade do Vento</h3>
            <p className="flashcard-valor1">10 km/h</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>

        </div>
        {/* Condições Diárias da Main */}
        <div className="main-diario">
          <div className="diario-grafico">
            <h2>Temperatura nas últimas 24 horas</h2>
            <GraficoTemp></GraficoTemp>
          </div>
          <div className="diario-clima">
            <CloudSun size={50} className="clima-icones"></CloudSun>
            <h3>Condições de hoje</h3>
            <h2>*Descrição do clima*</h2>
            <div className="clima-temperaturas">
              <p>Mín. **°</p>
              <p>Máx. **°</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App