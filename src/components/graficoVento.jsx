import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "./graficoVento.css"

function GraficoVento({ dados }) {
  return (
    <div className="graficos-vento">
      <ResponsiveContainer width="100%" height={150}>   {/* Tamanho do grafico */}
        <LineChart data={dados}> {/* Estrutura do grafico */}
          <Line
            type="monotone"
            dataKey="vento"
            stroke="rgb(11, 94, 230)"
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={2000}
            animationEasing="ease-in-out"
          /> {/* Linha do grafico */}
          <XAxis
            dataKey="hora"
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
            formatter={(vento) => `${vento} km/h`}
          /> {/* Ao passar o mouse nos pontos do grafico, exibe as informações */}
        </LineChart>
      </ResponsiveContainer>
    </div>


  )
}

export default GraficoVento