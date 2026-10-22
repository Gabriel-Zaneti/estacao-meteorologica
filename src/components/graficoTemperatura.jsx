import { LineChart, Line, ResponsiveContainer,XAxis,YAxis, CartesianGrid, Tooltip } from "recharts";

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
        <div>
            <ResponsiveContainer width="100%" height={200}>   {/* Tamanho do grafico */}
                <LineChart data={dadosTemperatura}> {/* Estrutura do grafico */}
                    <Line 
                    type="monotone"
                    dataKey="temperatura"
                    /> {/* Line- Como será a linha do grafico */}
                    <XAxis
                    dataKey="hora"
                    /> {/* Eixo X do grafico */}
                    <YAxis/> {/* Eixo Y do grafico */}
                    <CartesianGrid
                    strokeDasharray="3 3" 
                    /> {/* Linhas quadriculadas fundo do grafico(stroke deixa elas tracejadas) */} 
                    <Tooltip
                    formatter=""
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>


    )
}

export default GraficoTemp