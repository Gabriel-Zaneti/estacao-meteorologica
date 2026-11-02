import "../styles/Historico.css"
import { useState, useEffect } from "react";
import { buscarHistorico } from "../services/climaService";
import { RefreshCcw, CalendarDays, CalendarClock, ChevronLeft, ChevronRight } from "lucide-react";

function Historico({ cidadeSelecionada }) {
  //Histórico de medições
  const [medicoes, setMedicoes] = useState([])
  //Tratamento
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    function limparFiltros() {
      setPaginaAtual(1);
      setInicioPaginacao(1);
      setDataInicial("");
      setDataFinal("");
      setHorarioInicial("");
      setHorarioFinal("");
      setDataInicialFiltro("");
      setDataFinalFiltro("");
      setHorarioInicialFiltro("");
      setHorarioFinalFiltro("")
    }
    limparFiltros();
  }, [cidadeSelecionada]);

  // Filtros
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [horarioInicial, setHorarioInicial] = useState("");
  const [horarioFinal, setHorarioFinal] = useState("");

  const [dataInicialFiltro, setDataInicialFiltro] = useState("");
  const [dataFinalFiltro, setDataFinalFiltro] = useState("");
  const [horarioInicialFiltro, setHorarioInicialFiltro] = useState("");
  const [horarioFinalFiltro, setHorarioFinalFiltro] = useState("");

  const medicoesFiltradas = medicoes.filter((medicao) => {
    const data = medicao.data.split(" ")[0];
    const horario = medicao.data.split(" ")[1];

    return (
      (data >= dataInicialFiltro || dataInicialFiltro === "")
      &&
      (data <= dataFinalFiltro || dataFinalFiltro === "")
      &&
      (
        (horarioInicialFiltro === "" && horarioFinalFiltro === "") || (horarioInicialFiltro > horarioFinalFiltro
          ? (horario >= horarioInicialFiltro) || (horario <= horarioFinalFiltro)
          : (horario >= horarioInicialFiltro) && (horario <= horarioFinalFiltro)
        )
      )
    );
  });


  // Paginação da Tabela
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [inicioPaginacao, setInicioPaginacao] = useState(1);

  const itensPagina = 6;
  const indiceInicial = (paginaAtual - 1) * itensPagina;
  const indiceFinal = (indiceInicial + itensPagina);

  const totalPaginas = Math.ceil(medicoesFiltradas.length / itensPagina);
  const numerosPaginas = Array.from({ length: Math.min(4, totalPaginas - inicioPaginacao + 1) },
    (_, i) => i + inicioPaginacao);


  return (
    <div className="historico">
      <div className="main-titulo">
        <h1>Histórico de Coleta</h1>
        <p>Consulte os registros das coletas meteorológicas</p>
      </div>
      <div className="main-filtros">
        <div className="filtros-data">
          <div className="filtros-icone">
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
        <div className="filtros-horario">
          <div className="filtros-icone">
            <CalendarClock size={20}></CalendarClock>
          </div>
          <input
            type="time"
            value={horarioInicial}
            onChange={(e) => setHorarioInicial(e.target.value)}
          />
          -
          <input
            type="time"
            value={horarioFinal}
            onChange={(e) => setHorarioFinal(e.target.value)}
          />
        </div>
        <button className="filtros-botao"
          onClick={() => {
            setPaginaAtual(1);
            setInicioPaginacao(1);
            setDataInicialFiltro(dataInicial);
            setDataFinalFiltro(dataFinal);
            setHorarioInicialFiltro(horarioInicial);
            setHorarioFinalFiltro(horarioFinal)
          }}
        >
          Filtrar
        </button>
        <button className="filtros-limpar"
          onClick={() => {
            setPaginaAtual(1);
            setInicioPaginacao(1);
            setDataInicial("");
            setDataFinal("");
            setHorarioInicial("");
            setHorarioFinal("");
            setDataInicialFiltro("");
            setDataFinalFiltro("");
            setHorarioInicialFiltro("");
            setHorarioFinalFiltro("")
          }}
        >
          <RefreshCcw></RefreshCcw>
        </button>
      </div>
      <div className="main-registros">
        <p>Foram encontrados <strong>{medicoesFiltradas.length} registros</strong></p>
      </div>
      {/* Tabela da Main */}
      <div className="main-tabela">
        <table>
          <thead>
            {/* Linha de Titulos */}
            <tr>
              <th>Data e hora</th>
              <th>Temperatura</th>
              <th>Umidade</th>
              <th>Precipitação</th>
              <th>Vento</th>
            </tr>
          </thead>
          {/* Corpo da Tabela(map percorre a lista, diferenciando as linhas atraves da KEY)*/}
          <tbody>
            {medicoesFiltradas.length > 0
              ? (medicoesFiltradas
                .slice(indiceInicial, indiceFinal)
                .map((medicao, indice) => (
                  <tr key={indice}>
                    <td>{medicao.data}</td>
                    <td>{medicao.temperatura}</td>
                    <td>{medicao.umidade}</td>
                    <td>{medicao.precipitacao}</td>
                    <td>{medicao.vento}</td>
                  </tr>
                )))
              : (<tr>
                <td className="tabela-semfiltro" colSpan="5">
                  Nenhuma medição encontrada para os filtros selecionados
                </td>
              </tr>
              )}
          </tbody>
        </table>
      </div>
      <div className="main-paginacao">
        {inicioPaginacao > 1 && (
          <button className="paginacao-anterior"
            onClick={() => setInicioPaginacao(inicioPaginacao - 4)}>
            <ChevronLeft size={15}></ChevronLeft>
          </button>
        )}
        {numerosPaginas.map((numero) => (
          <button
            key={numero}
            className={numero === paginaAtual ? "paginacao-pagina paginacao-pagina-ativa" : "paginacao-pagina"}
            onClick={() => setPaginaAtual(numero)}>
            {numero}
          </button>
        ))}
        {inicioPaginacao + 3 < totalPaginas && (
          <button className="paginacao-proximo"
            onClick={() => setInicioPaginacao(inicioPaginacao + 4)}>
            <ChevronRight size={15}></ChevronRight>
          </button>
        )}
      </div>

    </div>
  )
}

export default Historico