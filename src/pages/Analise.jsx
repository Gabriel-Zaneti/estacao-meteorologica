import "../styles/Analise.css"
import GraficoTemperaturaA from "../components/graficoTemperaturaA"
import GraficoUmidade from "../components/graficoUmidade"
import GraficoPrecipitacao from "../components/graficoPrecipitacao"
import GraficoVento from "../components/graficoVento"
import { useState, useEffect } from "react"
import { CalendarDays } from "lucide-react"

function Analise({ cidadeSelecionada }) {

  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

  const [medicoes, setMedicoes] = useState([]);
  // Filtros
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [dataInicialFiltro, setDataInicialFiltro] = useState("");
  const [dataFinalFiltro, setDataFinalFiltro] = useState("");

  const medicoesFiltradas = medicoes.filter((medicao) => {
    const data = medicao.data.split(" ")[0];

    return (
      (data >= dataInicialFiltro || dataInicialFiltro === "")
      &&
      (data <= dataFinalFiltro || dataFinalFiltro === "")
    );
  });

  useEffect(() => {
    async function carregarHistorico() {
      setErro(null);
      setLoading(true);
      try {
        const dados = await buscarHistorico(cidadeSelecionada);
        setMedicoes(dados);
      } catch (error) {
        setErro(error);
        setMedicoes([]);
        console.error("Erro ao carregar o histórico", error);
      } finally {
        setLoading(false);
      }
    }
    carregarHistorico();
  }, [cidadeSelecionada]);

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
          <input
            type="date"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
          />
          -
          <input
            type="date"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
          />
        </div>
        <div className="filtro-botao">
          <button
            onClick={() => {
              setDataInicialFiltro(dataInicial);
              setDataFinalFiltro(dataFinal);
            }}
          >
            Aplicar
          </button>
        </div>
      </div>
      <div className="main-graficos">
        <div className="grafico-temperatura">
          <h2>Temperatura</h2>
          <GraficoTemperaturaA dados={medicoesFiltradas}/>
        </div>
        <div className="grafico-umidade">
          <h2>Umidade</h2>
          <GraficoUmidade dados={medicoesFiltradas} />
        </div>
        <div className="grafico-precipitacao">
          <h2>Precipitação</h2>
          <GraficoPrecipitacao dados={medicoesFiltradas} />
        </div>
        <div className="grafico-vento">
          <h2>Vento</h2>
          <GraficoVento dados={medicoesFiltradas} />
        </div>
      </div>
    </div>
  )
}

export default Analise