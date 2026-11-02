import "../styles/Dashboard.css"
import { buscarCidades, buscarCondicoes, buscarTemperaturasHoje } from "../services/climaService"
import GraficoTemperatura from '../components/graficoTemperatura'
import { Thermometer, Droplets, Wind, CloudDrizzle, CloudSun } from 'lucide-react'  //Icones
import { useEffect, useState } from "react"


function Dashboard({ medicaoAtual, cidadeSelecionada, setCidadeSelecionada, erro, setErro, loading }) {
  //Seleção de cidades
  const [cidades, setCidades] = useState([]);
  //Grafico e Condições
  const [condicoesHoje, setCondicoesHoje] = useState(null);
  const [temperaturasHoje, setTemperaturasHoje] = useState([]);
  //Carrega as cidades do seletor
  useEffect(() => {
    async function carregarCidades() {
      setErro(null);
      try {
        const dados = await buscarCidades();
        setCidades(dados);
      } catch (error) {
        setErro(error);
        console.error("Erro ao carregar as cidades", error);
      }
    }
    carregarCidades();
  }, [])
  //Carrega as condições de hoje
  useEffect(() => {
    async function carregarCondicoes() {
      setErro(null)
      try {
        const dados = await buscarCondicoes(cidadeSelecionada);
        setCondicoesHoje(dados.forecast[0]);
      } catch (error) {
        setErro(error);
        console.error("Erro ao carregar as condições", error);
      }
    }
    carregarCondicoes();
  }, [cidadeSelecionada])
  //Carrega as temperatura de hoje para o grafico
  useEffect(() => {
    async function carregarTemperaturas() {
      setErro(null)
      try {
        const dados = await buscarTemperaturasHoje(cidadeSelecionada);
        console.log(dados)
        setTemperaturasHoje(dados.temperatures);
      } catch (error) {
        setErro(error);
        console.error("Erro ao carregar as temperaturas de hoje", error);
      }
    }
    carregarTemperaturas();
  }, [cidadeSelecionada])

  return (
    <div className="dashboard">
      <div className="cabecalho-dashboard">
        <div className="main-titulo">
          <h1>Condições Atuais</h1>
          <p>Dados da última coleta meteorológica</p>
          {loading && <p>Carregando medições...</p>}
        </div>
        <div className="main-seletor">
          <select
            className="seletor-cidades"
            value={cidadeSelecionada}
            onChange={(e) => setCidadeSelecionada(e.target.value)}
          >
            {cidades.map((cidade) => (
              <option value={cidade.city}>
                {cidade.city}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Flashcards da Main */}
      <div className="main-flashcards">
        {/* Flashcard 1 */}
        <div className="flashcards-flashcard">
          <Thermometer size={34} className="flashcard-icones"></Thermometer>
          <h3>Temperatura</h3>
          <p className="flashcard-valor1">{medicaoAtual?.temperature != null ? `${medicaoAtual.temperature}°C` : "Indisponível"}</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
        {/* Flashcard 2 */}
        <div className="flashcards-flashcard">
          <Droplets size={34} className="flashcard-icones"></Droplets>
          <h3>Umidade</h3>
          <p className="flashcard-valor1">{medicaoAtual?.humidity != null ? `${medicaoAtual.humidity}%` : "Indisponível"}</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
        {/* Flashcard 3 */}
        <div className="flashcards-flashcard">
          <CloudDrizzle size={34} className="flashcard-icones"></CloudDrizzle>
          <h3>Precipitação</h3>
          <p className="flashcard-valor1">{medicaoAtual?.precipitation != null ? `${medicaoAtual.precipitation}mm` : "Indisponível"}</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
        {/* Flashcard 4 */}
        <div className="flashcards-flashcard">
          <Wind size={34} className="flashcard-icones"></Wind>
          <h3>Velocidade do Vento</h3>
          <p className="flashcard-valor1">{medicaoAtual?.windSpeed != null ? `${medicaoAtual.windSpeed}km/h` : "Indisponível"}</p>
          <p className="flashcard-descricao">em relação a última hora</p>
        </div>
      </div>
      {/* Condições Diárias da Main */}
      <div className="main-diario">
        <div className="diario-grafico">
          <h2>Temperatura das ultimas 24 horas</h2>
          <GraficoTemperatura dados={temperaturasHoje} />
        </div>
        <div className="diario-clima">
          <CloudSun size={50} className="clima-icones"></CloudSun>
          <h3>Condições de hoje</h3>
          <h2>{medicaoAtual?.conditionDescription != null ? medicaoAtual.conditionDescription : "Indisponível"}</h2>
          <div className="clima-temperaturas">
            <p>Mín. {condicoesHoje?.minTemperature != null ? `${condicoesHoje.minTemperature}°` : "Indisponível"}</p>
            <p>Máx. {condicoesHoje?.maxTemperature != null ? `${condicoesHoje.maxTemperature}°` : "Indisponível"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard