import { ComposedChart, Line, ResponsiveContainer,XAxis,YAxis, CartesianGrid, Tooltip, Area } from "recharts";
import "./graficoTemperatura.css"
const dadosTemperatura = [
    { hora: "00:00", temperatura: 18 },
    { hora: "06:00", temperatura: 21 },
    { hora: "12:00", temperatura: 26 },
    { hora: "18:00", temperatura: 24 },
    { hora: "19:00", temperatura: 35 },
    { hora: "22:00", temperatura: 40 },
    { hora: "23:00", temperatura: 26 },
];

function GraficoTemp() {
    return (
        <div className="graficos-temp">
            <ResponsiveContainer width="100%" height={225}>   {/* Tamanho do grafico */}
                <ComposedChart data={dadosTemperatura}> {/* Estrutura do grafico */}
                    <Area
                    type="monotone"
                    dataKey="temperatura"
                    fill="rgb(11, 94, 230)"
                    fillOpacity={0.2}
                    tooltipType="none"
                    isAnimationActive={true}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    
                    />
                    <Line 
                    type="monotone"
                    dataKey="temperatura"
                    stroke="rgb(11, 94, 230)"
                    activeDot={{r:6}}
                    isAnimationActive={true}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                    /> {/* Line- Como será a linha do grafico */}
                    <XAxis
                    dataKey="hora"
                    tick={{fill: "#6B7280", fontSize: 12 }}
                    /> {/* Eixo X do grafico */}
                    <YAxis
                    tick={{fill: "#6B7280", fontSize: 12 }}
                    /> {/* Eixo Y do grafico */}
                    <CartesianGrid
                    strokeDasharray="3 3" 
                    stroke="#E5E7EB"
                    /> {/* Linhas quadriculadas fundo do grafico(stroke deixa elas tracejadas) */} 
                    <Tooltip
                    formatter={(temperatura) => `${temperatura} °C`} 
                    /> {/* Ao passar o mouse nos pontos do grafico, exibe as informações */}
                </ComposedChart>
            </ResponsiveContainer>
        </div>


    )
}

export default GraficoTemp