import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Eye } from "lucide-react";

const vulnerabilityData = [
  { name: "Critical", value: 3, color: "#ef4444" },
  { name: "High", value: 12, color: "#f59e0b" },
  { name: "Medium", value: 28, color: "#eab308" },
  { name: "Low", value: 45, color: "#10b981" },
];

export function PieChartPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Vulnerability Distribution
          </h1>
          <p className="text-muted-foreground mt-2">Pie chart showing vulnerability breakdown by severity</p>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-purple-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-5 h-5 text-purple-400" />
              <span>Vulnerability Distribution</span>
            </CardTitle>
            <CardDescription>Breakdown of vulnerabilities by severity</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vulnerabilityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {vulnerabilityData.map((entry) => (
                    <Cell key={`piechart-cell-${entry.name}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#ffffff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-4 mt-4">
              {vulnerabilityData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}: {item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}