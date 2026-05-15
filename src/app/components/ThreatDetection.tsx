import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AlertTriangle, Shield, Search, Filter, Eye, Ban, CheckCircle, Clock, Globe, Cpu } from "lucide-react";
import { useState } from "react";

const threatEvents = [
  {
    id: "TH001",
    timestamp: "2025-01-20 14:32:15",
    severity: "Critical",
    type: "Malware",
    source: "192.168.1.45",
    target: "web-server-01",
    description: "Trojan.Win32.Agent detected in incoming email attachment",
    status: "Blocked",
    risk: 95
  },
  {
    id: "TH002",
    timestamp: "2025-01-20 14:28:43",
    severity: "High",
    type: "Intrusion Attempt",
    source: "203.0.113.12",
    target: "database-01",
    description: "SQL injection attempt on user authentication endpoint",
    status: "Investigating",
    risk: 87
  },
  {
    id: "TH003",
    timestamp: "2025-01-20 14:25:01",
    severity: "Medium",
    type: "Suspicious Activity",
    source: "10.0.0.123",
    target: "file-server-02",
    description: "Unusual file access pattern detected - potential data exfiltration",
    status: "Monitoring",
    risk: 64
  },
  {
    id: "TH004",
    timestamp: "2025-01-20 14:20:33",
    severity: "High",
    type: "Phishing",
    source: "external",
    target: "user@company.com",
    description: "Phishing email with credential harvesting attempt",
    status: "Blocked",
    risk: 82
  },
  {
    id: "TH005",
    timestamp: "2025-01-20 14:15:22",
    severity: "Critical",
    type: "Ransomware",
    source: "172.16.0.88",
    target: "workstation-15",
    description: "Ransomware encryption activity detected",
    status: "Quarantined",
    risk: 98
  }
];

const threatIntelligence = [
  {
    indicator: "203.0.113.12",
    type: "IP Address",
    threatType: "Botnet C&C",
    firstSeen: "2025-01-18",
    confidence: "High",
    sources: 8
  },
  {
    indicator: "malicious-domain.evil",
    type: "Domain",
    threatType: "Phishing",
    firstSeen: "2025-01-19",
    confidence: "Medium",
    sources: 3
  },
  {
    indicator: "7d865e959b2466918c9863afca942d0fb89d7c9ac0c99bafc3749504ded97730",
    type: "File Hash",
    threatType: "Malware",
    firstSeen: "2025-01-20",
    confidence: "High",
    sources: 12
  }
];

export function ThreatDetection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState("all");

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "border-red-500 text-red-400";
      case "high": return "border-orange-500 text-orange-400";
      case "medium": return "border-yellow-500 text-yellow-400";
      case "low": return "border-green-500 text-green-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "blocked": return "border-green-500 text-green-400";
      case "quarantined": return "border-blue-500 text-blue-400";
      case "investigating": return "border-orange-500 text-orange-400";
      case "monitoring": return "border-yellow-500 text-yellow-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Threat Detection & Analysis
          </h1>
          <p className="text-muted-foreground mt-2">Advanced threat hunting and real-time security analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-red-500 text-red-400 pulse-animation">
            <AlertTriangle className="w-3 h-3 mr-1" />
            7 Active Threats
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="events" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="events">Threat Events</TabsTrigger>
          <TabsTrigger value="intelligence">Threat Intel</TabsTrigger>
          <TabsTrigger value="analysis">Deep Analysis</TabsTrigger>
          <TabsTrigger value="hunting">Threat Hunting</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-red-400" />
                <span>Active Threat Events</span>
              </CardTitle>
              <CardDescription>Real-time security events and incident detection</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search threats by ID, source, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={severityFilter} onValueChange={setSeverityFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Threat ID</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Risk</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {threatEvents.map((threat) => (
                    <TableRow key={threat.id}>
                      <TableCell className="font-mono text-blue-400">{threat.id}</TableCell>
                      <TableCell className="text-muted-foreground">{threat.timestamp}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getSeverityColor(threat.severity)}>
                          {threat.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>{threat.type}</TableCell>
                      <TableCell className="font-mono">{threat.source}</TableCell>
                      <TableCell className="font-mono">{threat.target}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(threat.status)}>
                          {threat.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-red-500" 
                              style={{ width: `${threat.risk}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{threat.risk}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Ban className="w-3 h-3 mr-1" />
                            Block
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-4">
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span>Threat Intelligence Feed</span>
              </CardTitle>
              <CardDescription>Global threat intelligence and IOC tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Indicator</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Threat Type</TableHead>
                    <TableHead>First Seen</TableHead>
                    <TableHead>Confidence</TableHead>
                    <TableHead>Sources</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {threatIntelligence.map((intel, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono text-sm max-w-xs truncate">
                        {intel.indicator}
                      </TableCell>
                      <TableCell>{intel.type}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-red-500 text-red-400">
                          {intel.threatType}
                        </Badge>
                      </TableCell>
                      <TableCell>{intel.firstSeen}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={intel.confidence === 'High' ? 'border-red-500 text-red-400' : 'border-yellow-500 text-yellow-400'}
                        >
                          {intel.confidence}
                        </Badge>
                      </TableCell>
                      <TableCell>{intel.sources}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            Details
                          </Button>
                          <Button variant="outline" size="sm">
                            <Ban className="w-3 h-3 mr-1" />
                            Block
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-blue-400" />
                  <span>Behavioral Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Process Anomalies</span>
                    <Badge variant="outline" className="border-red-500 text-red-400">12 Detected</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Network Anomalies</span>
                    <Badge variant="outline" className="border-orange-500 text-orange-400">7 Detected</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>File System Changes</span>
                    <Badge variant="outline" className="border-yellow-500 text-yellow-400">23 Changes</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Registry Modifications</span>
                    <Badge variant="outline" className="border-green-500 text-green-400">5 Changes</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Machine Learning Detection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Model Accuracy</span>
                    <span className="text-green-400">98.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>False Positives</span>
                    <span className="text-green-400">0.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Last Training</span>
                    <span className="text-muted-foreground">2 hours ago</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Samples Processed</span>
                    <span className="text-blue-400">2.4M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="hunting" className="space-y-4">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-orange-400" />
                <span>Advanced Threat Hunting</span>
              </CardTitle>
              <CardDescription>Proactive threat hunting and custom query execution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Hunt Query</label>
                    <textarea 
                      className="w-full h-32 p-3 bg-input border border-border rounded-md font-mono text-sm"
                      placeholder="SELECT * FROM network_events WHERE source_ip LIKE '192.168.%' AND port = 445"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Time Range</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1h">Last Hour</SelectItem>
                          <SelectItem value="24h">Last 24 Hours</SelectItem>
                          <SelectItem value="7d">Last 7 Days</SelectItem>
                          <SelectItem value="30d">Last 30 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Data Sources</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select data sources" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Sources</SelectItem>
                          <SelectItem value="network">Network Logs</SelectItem>
                          <SelectItem value="endpoint">Endpoint Logs</SelectItem>
                          <SelectItem value="email">Email Logs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Search className="w-4 h-4 mr-2" />
                    Execute Hunt
                  </Button>
                  <Button variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Save Hunt
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}