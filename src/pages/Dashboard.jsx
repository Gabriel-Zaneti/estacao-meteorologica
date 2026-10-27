import "../styles/Dashboard.css"
import GraficoTemp from '../components/graficoTemperatura'
import { Thermometer, Droplets, Wind, CloudDrizzle, CloudSun } from 'lucide-react'  //Icones


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="main-titulo">
        <h1>Condições Atuais</h1>
        <p>Dados da última coleta meteorológica</p>
      </div>
      {/* Flashcards da Main */}
      <div className="main-flashcards">
        {/* Flashcard 1 */}
        <div className="flashcards-flashcard">
          <Thermometer size={34} className="flashcard-icones"></Thermometer>
          <h3>Temperatura</h3>
          <p className="flashcard-valor1">10 °C</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
        {/* Flashcard 2 */}
        <div className="flashcards-flashcard">
          <Droplets size={34} className="flashcard-icones"></Droplets>
          <h3>Umidade</h3>
          <p className="flashcard-valor1">10%</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
        {/* Flashcard 3 */}
        <div className="flashcards-flashcard">
          <CloudDrizzle size={34} className="flashcard-icones"></CloudDrizzle>
          <h3>Precipitação</h3>
          <p className="flashcard-valor1">10%</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
        {/* Flashcard 4 */}
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
          <h2>Temperatura das ultimas 24 horas</h2>
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
    </div>
  )
}

export default Dashboard