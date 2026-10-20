import './App.css'

function App() {
  return (
    <div className="dashboard">
      {/* Barra Lateral */}
      <aside className="sidebar">
        {/* Titúlo da Barra Lateral */}
        <div className="sidebar-titulo">
          <h1>PrevisãoTempo</h1>
          <span>Estação Meteorológica</span>
        </div>
        {/* Navegação da Barra Lateral */}
        <nav className="sidebar-nav">
          <a href="" className="nav-item-ativo">Dashboard</a>
          <a href="" className="nav-item">Histórico</a>
          <a href="" className="nav-item">Análise</a>
        </nav>

      </aside>
      {/* Main */}
      <main className="main">
        {/* Cabeçalho da Main */}
        <header className="main-cabecalho">
          <span>Última atualização: ##/##/#### ##:##</span>
        </header>
        {/* Titúlo da Main */}
        <div className="main-titulo">
          <h1>Condições Atuais</h1>
          <p>Dados da última coleta</p>
        </div>
        {/* Flashcards da Main */}
        <div className="main-flashcards">

          <div className="flashcards-flashcard">
            <h3>Temperatura</h3>
            <p className="flashcard-valor1">10 °C</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>
          <div className="flashcards-flashcard">
            <h3>Umidade</h3>
            <p className="flashcard-valor1">10%</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>
          <div className="flashcards-flashcard">
            <h3>Precipitação</h3>
            <p className="flashcard-valor1">10%</p>
            <p className="flashcard-valor2">10mm</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>
          <div className="flashcards-flashcard">
            <h3>Velocidade do Vento</h3>
            <p className="flashcard-valor1">10 km/h</p>
            <p className="flashcard-descricao">em relação a última hora</p>
          </div>

        </div>
        {/* Condições Diárias da Main */}
        <div className="main-diario">
          <h2>Temperatura nas últimas 24 horas</h2>
          <div className="diario-grafico">

          </div>
          <div className="diario-clima">
            <h3>Condições de hoje</h3>
            <h2>*Descrição do clima*</h2>
            <p>Mín. **°</p>
            <p>Máx. **°</p>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App