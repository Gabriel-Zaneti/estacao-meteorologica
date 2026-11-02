import { ComposedChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";
import "./graficoTemperatura.css"

function GraficoTemperatura({ dados }) {
  return (
    <div className="graficos-temperatura">
      <ResponsiveContainer width="100%" height={225}>   {/* Tamanho do grafico */}
        <ComposedChart data={dados}> {/* Estrutura do grafico */}
          <Area
            type="monotone"
            dataKey="temperature"
            fill="rgb(11, 94, 230)"
            fillOpacity={0.2}
            tooltipType="none"
            isAnimationActive={true}
            animationDuration={2000}
            animationEasing="ease-in-out"
          /> {/* Área do grafico */}
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="rgb(11, 94, 230)"
            activeDot={{ r: 6 }}
            isAnimationActive={true}
            animationDuration={2000}
            animationEasing="ease-in-out"
          /> {/* Linha do grafico */}
          <XAxis
            dataKey="time"
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
            formatter={(temperatura) => `${temperatura} °C`}
          /> {/* Ao passar o mouse nos pontos do grafico, exibe as informações */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>


  )
}

export default GraficoTemperatura