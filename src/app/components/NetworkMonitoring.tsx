import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter } from "recharts";
import { Wifi, Activity, Globe, Shield, AlertTriangle, Zap, Server, Monitor, Router } from "lucide-react";

const networkTraffic = [
  { time: "00:00", inbound: 45, outbound: 32, blocked: 12 },
  { time: "04:00", inbound: 38, outbound: 28, blocked: 8 },
  { time: "08:00", inbound: 89, outbound: 67, blocked: 24 },
  { time: "12:00", inbound: 92, outbound: 78, blocked: 31 },
  { time: "16:00", inbound: 78, outbound: 65, blocked: 18 },
  { time: "20:00", inbound: 56, outbound: 45, blocked: 15 },
];

const bandwidthData = [
  { time: "00:00", utilization: 23 },
  { time: "02:00", utilization: 18 },
  { time: "04:00", utilization: 15 },
  { time: "06:00", utilization: 22 },
  { time: "08:00", utilization: 67 },
  { time: "10:00", utilization: 78 },
  { time: "12:00", utilization: 82 },
  { time: "14:00", utilization: 75 },
  { time: "16:00", utilization: 69 },
  { time: "18:00", utilization: 54 },
  { time: "20:00", utilization: 43 },
  { time: "22:00", utilization: 35 },
];

const activeConnections = [
  {
    id: "CONN001",
    source: "192.168.1.45",
    destination: "203.0.113.12",
    port: "443",
    protocol: "HTTPS",
    bytes: "2.3 MB",
    duration: "00:15:23",
    status: "Suspicious",
    risk: "High"
  },
  {
    id: "CONN002",
    source: "10.0.0.156",
    destination: "8.8.8.8",
    port: "53",
    protocol: "DNS",
    bytes: "1.2 KB",
    duration: "00:00:02",
    status: "Normal",
    risk: "Low"
  },
  {
    id: "CONN003",
    source: "172.16.0.88",
    destination: "185.199.108.153",
    port: "80",
    protocol: "HTTP",
    bytes: "15.7 MB",
    duration: "00:08:45",
    status: "Blocked",
    risk: "Medium"
  },
  {
    id: "CONN004",
    source: "192.168.1.23",
    destination: "13.107.42.14",
    port: "443",
    protocol: "HTTPS",
    bytes: "892 KB",
    duration: "00:03:12",
    status: "Normal",
    risk: "Low"
  },
  {
    id: "CONN005",
    source: "10.0.0.67",
    destination: "157.240.14.35",
    port: "443",
    protocol: "HTTPS",
    bytes: "4.1 MB",
    duration: "00:12:56",
    status: "Monitoring",
    risk: "Medium"
  }
];

const firewallRules = [
  {
    id: "FW001",
    rule: "BLOCK TCP 22 FROM external",
    action: "DENY",
    hits: 1247,
    lastHit: "2025-01-20 14:35:22",
    status: "Active"
  },
  {
    id: "FW002",
    rule: "ALLOW HTTPS TO web-servers",
    action: "ALLOW",
    hits: 45892,
    lastHit: "2025-01-20 14:36:15",
    status: "Active"
  },
  {
    id: "FW003",
    rule: "BLOCK ICMP FROM blacklist",
    action: "DENY",
    hits: 623,
    lastHit: "2025-01-20 14:33:08",
    status: "Active"
  },
  {
    id: "FW004",
    rule: "ALLOW DNS TO internal",
    action: "ALLOW",
    hits: 12847,
    lastHit: "2025-01-20 14:36:18",
    status: "Active"
  }
];

const anomalyData = [
  { hour: 0, anomalies: 2 },
  { hour: 1, anomalies: 1 },
  { hour: 2, anomalies: 0 },
  { hour: 3, anomalies: 1 },
  { hour: 4, anomalies: 0 },
  { hour: 5, anomalies: 3 },
  { hour: 6, anomalies: 5 },
  { hour: 7, anomalies: 8 },
  { hour: 8, anomalies: 12 },
  { hour: 9, anomalies: 15 },
  { hour: 10, anomalies: 9 },
  { hour: 11, anomalies: 7 },
  { hour: 12, anomalies: 11 },
  { hour: 13, anomalies: 6 },
  { hour: 14, anomalies: 8 },
  { hour: 15, anomalies: 4 },
  { hour: 16, anomalies: 3 },
  { hour: 17, anomalies: 2 },
  { hour: 18, anomalies: 1 },
  { hour: 19, anomalies: 1 },
  { hour: 20, anomalies: 0 },
  { hour: 21, anomalies: 1 },
  { hour: 22, anomalies: 0 },
  { hour: 23, anomalies: 0 },
];

export function NetworkMonitoring() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "suspicious": return "border-red-500 text-red-400";
      case "blocked": return "border-red-500 text-red-400";
      case "monitoring": return "border-yellow-500 text-yellow-400";
      case "normal": return "border-green-500 text-green-400";
      case "active": return "border-green-500 text-green-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "high": return "border-red-500 text-red-400";
      case "medium": return "border-yellow-500 text-yellow-400";
      case "low": return "border-green-500 text-green-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Network Security Monitoring
          </h1>
          <p className="text-muted-foreground mt-2">Real-time network traffic analysis and threat detection</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-green-500 text-green-400">
            <Wifi className="w-3 h-3 mr-1" />
            Network Active
          </Badge>
          <Badge variant="outline" className="border-blue-500 text-blue-400">
            <Activity className="w-3 h-3 mr-1" />
            Monitoring 247 Devices
          </Badge>
        </div>
      </div>

      {/* Network Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Connections</CardTitle>
            <Globe className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">1,247</div>
            <p className="text-xs text-muted-foreground">+23 from last hour</p>
          </CardContent>
        </Card>

        <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bandwidth Usage</CardTitle>
            <Activity className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">78%</div>
            <p className="text-xs text-muted-foreground">2.1 GB/s current</p>
          </CardContent>
        </Card>

        <Card className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blocked Connections</CardTitle>
            <Shield className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">156</div>
            <p className="text-xs text-muted-foreground">Last hour</p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anomalies Detected</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">8</div>
            <p className="text-xs text-muted-foreground">Requires investigation</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="traffic">Traffic Analysis</TabsTrigger>
          <TabsTrigger value="connections">Active Connections</TabsTrigger>
          <TabsTrigger value="firewall">Firewall Rules</TabsTrigger>
          <TabsTrigger value="bandwidth">Bandwidth Monitor</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Network Traffic Flow */}
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span>Network Traffic Flow</span>
                </CardTitle>
                <CardDescription>Real-time inbound and outbound traffic monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={networkTraffic}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="inbound" 
                      stackId="1"
                      stroke="#3b82f6" 
                      fill="#3b82f6" 
                      fillOpacity={0.3}
                      name="Inbound (Mbps)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="outbound" 
                      stackId="1"
                      stroke="#10b981" 
                      fill="#10b981" 
                      fillOpacity={0.3}
                      name="Outbound (Mbps)"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="blocked" 
                      stackId="1"
                      stroke="#ef4444" 
                      fill="#ef4444" 
                      fillOpacity={0.3}
                      name="Blocked (Mbps)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Protocol Distribution */}
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-green-400" />
                  <span>Protocol Distribution</span>
                </CardTitle>
                <CardDescription>Network protocol usage breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>HTTPS</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>HTTP</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={28} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">28%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>DNS</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={15} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">15%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SSH</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={8} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">8%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Other</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={4} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">4%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Geographic Traffic Map */}
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span>Geographic Traffic Distribution</span>
              </CardTitle>
              <CardDescription>Traffic sources and destinations by location</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">Top Source Countries</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>United States</span>
                      <Badge variant="outline" className="border-blue-500 text-blue-400">45%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Germany</span>
                      <Badge variant="outline" className="border-green-500 text-green-400">23%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>United Kingdom</span>
                      <Badge variant="outline" className="border-purple-500 text-purple-400">18%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Japan</span>
                      <Badge variant="outline" className="border-orange-500 text-orange-400">14%</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Suspicious Sources</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Russia</span>
                      <Badge variant="outline" className="border-red-500 text-red-400">124 blocks</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>China</span>
                      <Badge variant="outline" className="border-red-500 text-red-400">89 blocks</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>North Korea</span>
                      <Badge variant="outline" className="border-red-500 text-red-400">67 blocks</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Iran</span>
                      <Badge variant="outline" className="border-red-500 text-red-400">43 blocks</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Network Health</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Latency</span>
                      <span className="text-green-400">15ms avg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Packet Loss</span>
                      <span className="text-green-400">0.02%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Jitter</span>
                      <span className="text-green-400">2.1ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uptime</span>
                      <span className="text-green-400">99.98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="connections" className="space-y-4">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wifi className="w-5 h-5 text-cyan-400" />
                <span>Active Network Connections</span>
              </CardTitle>
              <CardDescription>Real-time monitoring of network connections and their security status</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Connection ID</TableHead>
                    <TableHead>Source IP</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Port</TableHead>
                    <TableHead>Protocol</TableHead>
                    <TableHead>Data Transferred</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeConnections.map((conn) => (
                    <TableRow key={conn.id}>
                      <TableCell className="font-mono text-blue-400">{conn.id}</TableCell>
                      <TableCell className="font-mono">{conn.source}</TableCell>
                      <TableCell className="font-mono">{conn.destination}</TableCell>
                      <TableCell>{conn.port}</TableCell>
                      <TableCell>{conn.protocol}</TableCell>
                      <TableCell>{conn.bytes}</TableCell>
                      <TableCell className="font-mono">{conn.duration}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(conn.status)}>
                          {conn.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRiskColor(conn.risk)}>
                          {conn.risk}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Block</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="firewall" className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-red-400" />
                <span>Firewall Rules & Activity</span>
              </CardTitle>
              <CardDescription>Active firewall rules and their enforcement statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h3 className="font-medium">Firewall Status</h3>
                    <p className="text-sm text-muted-foreground">All rules active and enforcing</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline" className="border-green-500 text-green-400">
                      <Shield className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                    <Button>Add Rule</Button>
                  </div>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rule ID</TableHead>
                      <TableHead>Rule Description</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Hits</TableHead>
                      <TableHead>Last Hit</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {firewallRules.map((rule) => (
                      <TableRow key={rule.id}>
                        <TableCell className="font-mono text-blue-400">{rule.id}</TableCell>
                        <TableCell className="font-mono text-sm">{rule.rule}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={rule.action === 'ALLOW' ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400'}
                          >
                            {rule.action}
                          </Badge>
                        </TableCell>
                        <TableCell>{rule.hits.toLocaleString()}</TableCell>
                        <TableCell className="text-muted-foreground">{rule.lastHit}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(rule.status)}>
                            {rule.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Disable</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bandwidth" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span>Bandwidth Utilization</span>
                </CardTitle>
                <CardDescription>24-hour bandwidth usage trend</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={bandwidthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="utilization" 
                      stroke="#10b981" 
                      strokeWidth={3}
                      name="Utilization (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span>Network Interfaces</span>
                </CardTitle>
                <CardDescription>Interface status and utilization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Router className="w-4 h-4 text-blue-400" />
                      <span>eth0 (WAN)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={78} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Router className="w-4 h-4 text-green-400" />
                      <span>eth1 (LAN)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={45} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Router className="w-4 h-4 text-purple-400" />
                      <span>eth2 (DMZ)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={23} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">23%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Router className="w-4 h-4 text-orange-400" />
                      <span>wlan0 (Wireless)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={67} className="w-24 h-2" />
                      <span className="text-sm text-muted-foreground">67%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="anomalies" className="space-y-4">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-orange-400" />
                <span>Network Anomaly Detection</span>
              </CardTitle>
              <CardDescription>AI-powered detection of unusual network patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart data={anomalyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#111827', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                    labelStyle={{
                      color: '#ffffff',
                      fontWeight: '600'
                    }}
                    itemStyle={{
                      color: '#ffffff',
                      fontWeight: '500'
                    }}
                  />
                  <Scatter dataKey="anomalies" fill="#f59e0b" />
                </ScatterChart>
              </ResponsiveContainer>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">127</div>
                  <p className="text-sm text-muted-foreground">Anomalies Today</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">8</div>
                  <p className="text-sm text-muted-foreground">High Severity</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">94%</div>
                  <p className="text-sm text-muted-foreground">Detection Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}