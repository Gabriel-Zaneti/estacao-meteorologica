import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./graficoUmidade.css"

function GraficoUmidade({ dados }) {
  return (
    <div className="graficos-umidade">
      <ResponsiveContainer width="100%" height={150}>   {/* Tamanho do grafico */}
        <LineChart data={dados}> {/* Estrutura do grafico */}
          <Line
            type="monotone"
            dataKey="humidity"
            stroke="rgb(11, 94, 230)"
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={2000}
            animationEasing="ease-in-out"
          /> {/* Linha do grafico */}
          <XAxis
            dataKey="horario"
            tick={{ fill: "#6B7280", fontSize: 12 }}
          /> {/* Eixo X do grafico */}
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
          /> {/* Eixo Y do grafico */}
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
          /> {/* Linhas quadriculadas fundo do grafico*/}
          <Tooltip
            formatter={(umidade) => `${umidade} %`}
          /> {/* Ao passar o mouse nos pontos do grafico, exibe as informações */}
        </LineChart>
      </ResponsiveContainer>
    </div>


  )
}

export default GraficoUmidade