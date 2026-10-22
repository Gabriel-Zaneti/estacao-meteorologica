import { LineChart, Line, ResponsiveContainer } from "recharts";

const dadosTemperatura = [
    { hora: "00:00", temperatura: 18 },
    { hora: "06:00", temperatura: 21 },
    { hora: "12:00", temperatura: 26 },
    { hora: "18:00", temperatura: 24 }
];

function GraficoTemp() {
    return (
        <div>
            <ResponsiveContainer widht="100%" height={200}>
                <LineChart data={dadosTemperatura}>
                    <Line
                    type="monotone"
                    dataKey="temperatura"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>


    )
}

export default GraficoTemp