import "../styles/Historico.css"
import { RefreshCcw, CalendarDays, CalendarClock } from "lucide-react";

const medicoes=[
  {data:"2026-10-26 00:00", temperatura: 18 , umidade:50 , precipitacao:20 , vento:34},
  {data:"2026-10-26 06:00", temperatura: 21 , umidade:68 , precipitacao:80 , vento:28},
  {data:"2026-10-26 12:00", temperatura: 26 , umidade:35 , precipitacao:22 , vento:21},
  {data:"2026-10-26 18:00", temperatura: 24 , umidade:50 , precipitacao:20 , vento:34},
  {data:"2026-10-26 19:00", temperatura: 35 , umidade:68 , precipitacao:80 , vento:28},
  {data:"2026-10-26 22:00", temperatura: 40 , umidade:50 , precipitacao:20 , vento:34},
  {data:"2026-10-26 23:00", temperatura: 26 , umidade:68 , precipitacao:80 , vento:28},
];

function Historico() {
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
          <p>01/04/2025 - 01/04/2026</p>
        </div>
        <div className="filtros-horario">
          <div className="filtros-icone">
            <CalendarClock size={20}></CalendarClock>
          </div>
          <p>00:00 - 23:59</p>
        </div>
        <div className="filtros-botao">
          <p>Filtrar</p>
        </div>
        <div className="filtros-atualizar">
          <RefreshCcw></RefreshCcw>
        </div>
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
            {medicoes.map((medicao) => (   
              <tr key={medicao.data}>
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

    </div>
  )
}

export default Historico