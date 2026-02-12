import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function AnalyticsChart({ leads }) {
  const sourceCount = leads.reduce((acc, lead) => {
    acc[lead.source] = (acc[lead.source] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(sourceCount).map((key) => ({
    name: key,
    value: sourceCount[key]
  }));

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={index} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;
