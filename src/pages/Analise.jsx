import "../styles/Analise.css"
import "../components/graficoTemperatura"
import { CalendarDays } from "lucide-react"

function Analise() {
  return (
    <div className="analise">
      <div className="main-titulo">
        <h1>Análise Meteorológica</h1>
        <p>Visualize e compare as variáveis coletadas em diferentes períodos</p>
      </div>
      <div className="main-filtro">
        <div className="filtro-data">
          <div className="filtro-icone">
            <CalendarDays size={20}></CalendarDays>
          </div>
          <p>01/04/2025 - 01/04/2026</p>
        </div>
        <div className="filtro-botao">
          <p>Aplicar</p>
        </div>
      </div>
      <div className="main-graficos">
        <div className="grafico-temperatura">
          <h2>Temperatura</h2>
        </div>
        <div className="grafico-umidade">
          <h2>Umidade</h2>
        </div>
        <div className="grafico-precipitacao">
          <h2>Precipitação</h2>
        </div>
        <div className="grafico-vento">
          <h2>Vento</h2>
        </div>
      </div>
    </div>
  )
}

export default Analise