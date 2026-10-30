import "../styles/Historico.css"
import { useState } from "react";
import { RefreshCcw, CalendarDays, CalendarClock, ChevronLeft, ChevronRight} from "lucide-react";

const medicoes = [
  { data: "2026-10-21 00:00", temperatura: 1, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 06:00", temperatura: 2, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-27 12:00", temperatura: 3, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-22 18:00", temperatura: 4, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 19:00", temperatura: 5, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-27 22:00", temperatura: 6, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 00:00", temperatura: 7, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 06:00", temperatura: 8, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 12:00", temperatura: 9, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-26 18:00", temperatura: 10, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-22 19:00", temperatura: 11, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 22:00", temperatura: 12, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 00:00", temperatura: 1, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 06:00", temperatura: 2, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-27 12:00", temperatura: 3, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-26 18:00", temperatura: 4, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-22 19:00", temperatura: 5, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 22:00", temperatura: 6, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 00:00", temperatura: 7, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-27 06:00", temperatura: 8, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 12:00", temperatura: 9, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-22 18:00", temperatura: 10, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 19:00", temperatura: 11, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 22:00", temperatura: 12, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 00:00", temperatura: 1, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 06:00", temperatura: 2, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 12:00", temperatura: 3, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-26 18:00", temperatura: 4, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-28 19:00", temperatura: 5, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-28 22:00", temperatura: 6, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-28 00:00", temperatura: 7, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-28 06:00", temperatura: 8, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-28 12:00", temperatura: 9, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-28 18:00", temperatura: 10, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 19:00", temperatura: 11, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 22:00", temperatura: 12, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 00:00", temperatura: 1, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 06:00", temperatura: 2, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 12:00", temperatura: 3, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-26 18:00", temperatura: 4, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-21 19:00", temperatura: 5, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 22:00", temperatura: 6, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-21 00:00", temperatura: 7, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-21 02:00", temperatura: 8, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 12:00", temperatura: 9, umidade: 35, precipitacao: 22, vento: 21 },
  { data: "2026-10-21 05:00", temperatura: 10, umidade: 50, precipitacao: 20, vento: 34 },
  { data: "2026-10-26 19:00", temperatura: 11, umidade: 68, precipitacao: 80, vento: 28 },
  { data: "2026-10-26 22:00", temperatura: 12, umidade: 50, precipitacao: 20, vento: 34 }
];

function Historico() {
  // Filtros
  const [dataInicial, setDataInicial] = useState("")
  const [dataFinal, setDataFinal] = useState("")
  const [horarioInicial, setHorarioInicial] = useState("")
  const [horarioFinal, setHorarioFinal] = useState("")

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
      (horarioInicialFiltro === "" && horarioFinalFiltro === "") || ( horarioInicialFiltro > horarioFinalFiltro 
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
  const numerosPaginas = Array.from({ length: Math.min(4, totalPaginas - inicioPaginacao + 1)},
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
          setHorarioFinalFiltro(horarioFinal)}}
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
          setHorarioFinalFiltro("")}}
        >
          <RefreshCcw></RefreshCcw>
        </button>
      </div>
      <div className="main-registros">
        <p>Foram encontrados <strong>482 registros</strong></p>
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
            {medicoesFiltradas
            .slice(indiceInicial, indiceFinal)
            .map((medicao, indice) => (
              <tr key={indice}>
                <td>{medicao.data}</td>
                <td>{medicao.temperatura}</td>
                <td>{medicao.umidade}</td>
                <td>{medicao.precipitacao}</td>
                <td>{medicao.vento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="main-paginacao">
        {inicioPaginacao > 1 &&(
        <button className="paginacao-anterior"
        onClick={() => setInicioPaginacao(inicioPaginacao - 4)}>
        <ChevronLeft size={15}></ChevronLeft>
        </button>
      )}
        {numerosPaginas.map((numero) => (
        <button
          key={numero} 
          className={numero===paginaAtual ? "paginacao-pagina paginacao-pagina-ativa":"paginacao-pagina"} 
          onClick={() => setPaginaAtual(numero)}>
          {numero}
        </button>
      ))}
        {inicioPaginacao + 3 < totalPaginas &&(
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