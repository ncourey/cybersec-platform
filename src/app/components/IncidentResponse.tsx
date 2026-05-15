import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { 
  AlertTriangle, 
  Clock, 
  Users, 
  FileText, 
  CheckCircle, 
  XCircle, 
  PlayCircle,
  PauseCircle,
  Filter,
  Search,
  Plus,
  Eye,
  MessageSquare,
  Activity,
  Shield,
  Zap
} from "lucide-react";
import { useState } from "react";

const incidents = [
  {
    id: "INC-2025-001",
    title: "Ransomware Attack on Production Systems",
    severity: "Critical",
    status: "Active",
    category: "Malware",
    assignee: "Sarah Johnson",
    reporter: "System Monitor",
    created: "2025-01-20 14:32:15",
    lastUpdate: "2025-01-20 15:45:22",
    priority: "P1",
    impact: "High",
    urgency: "High",
    description: "Ransomware detected encrypting files on multiple production servers",
    affectedAssets: 12,
    estimatedLoss: "$250,000"
  },
  {
    id: "INC-2025-002",
    title: "Data Breach - Customer Information Exposed",
    severity: "High",
    status: "Investigating",
    category: "Data Breach",
    assignee: "Mike Chen",
    reporter: "Security Team",
    created: "2025-01-20 13:15:30",
    lastUpdate: "2025-01-20 15:30:45",
    priority: "P1",
    impact: "High",
    urgency: "Medium",
    description: "Unauthorized access to customer database containing PII",
    affectedAssets: 1,
    estimatedLoss: "$150,000"
  },
  {
    id: "INC-2025-003",
    title: "DDoS Attack on Web Infrastructure",
    severity: "High",
    status: "Mitigating",
    category: "Network Attack",
    assignee: "Alex Rodriguez",
    reporter: "Network Team",
    created: "2025-01-20 12:45:12",
    lastUpdate: "2025-01-20 15:25:18",
    priority: "P2",
    impact: "Medium",
    urgency: "High",
    description: "Large-scale DDoS attack targeting web services",
    affectedAssets: 8,
    estimatedLoss: "$75,000"
  },
  {
    id: "INC-2025-004",
    title: "Phishing Campaign Targeting Employees",
    severity: "Medium",
    status: "Resolved",
    category: "Social Engineering",
    assignee: "Lisa Park",
    reporter: "Employee",
    created: "2025-01-20 11:20:45",
    lastUpdate: "2025-01-20 15:15:30",
    priority: "P3",
    impact: "Low",
    urgency: "Medium",
    description: "Sophisticated phishing emails sent to multiple employees",
    affectedAssets: 0,
    estimatedLoss: "$0"
  },
  {
    id: "INC-2025-005",
    title: "Insider Threat - Unauthorized Data Access",
    severity: "High",
    status: "Under Review",
    category: "Insider Threat",
    assignee: "David Kim",
    reporter: "HR Department",
    created: "2025-01-20 10:30:20",
    lastUpdate: "2025-01-20 14:45:55",
    priority: "P2",
    impact: "Medium",
    urgency: "Medium",
    description: "Employee accessing files outside their authorization level",
    affectedAssets: 3,
    estimatedLoss: "$25,000"
  }
];

const responseTeams = [
  { name: "Incident Commander", member: "Sarah Johnson", status: "Active", role: "Lead" },
  { name: "Technical Lead", member: "Mike Chen", status: "Active", role: "Technical" },
  { name: "Communications", member: "Lisa Park", status: "Standby", role: "Communications" },
  { name: "Legal Counsel", member: "David Kim", status: "Active", role: "Legal" },
  { name: "External Expert", member: "Alex Rodriguez", status: "On-Call", role: "Consultant" }
];

const incidentTrends = [
  { month: "Jul", incidents: 12, resolved: 10 },
  { month: "Aug", incidents: 15, resolved: 13 },
  { month: "Sep", incidents: 8, resolved: 8 },
  { month: "Oct", incidents: 11, resolved: 9 },
  { month: "Nov", incidents: 14, resolved: 12 },
  { month: "Dec", incidents: 18, resolved: 16 },
  { month: "Jan", incidents: 9, resolved: 4 },
];

const responseMetrics = [
  { time: "00:00", responseTime: 15, resolutionTime: 240 },
  { time: "06:00", responseTime: 12, resolutionTime: 180 },
  { time: "12:00", responseTime: 8, resolutionTime: 120 },
  { time: "18:00", responseTime: 10, resolutionTime: 150 },
];

export function IncidentResponse() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
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
      case "active": return "border-red-500 text-red-400";
      case "investigating": return "border-orange-500 text-orange-400";
      case "mitigating": return "border-yellow-500 text-yellow-400";
      case "resolved": return "border-green-500 text-green-400";
      case "under review": return "border-blue-500 text-blue-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return <PlayCircle className="w-4 h-4" />;
      case "investigating": return <Search className="w-4 h-4" />;
      case "mitigating": return <Shield className="w-4 h-4" />;
      case "resolved": return <CheckCircle className="w-4 h-4" />;
      case "under review": return <Eye className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Incident Response Center
          </h1>
          <p className="text-muted-foreground mt-2">Comprehensive incident management and response coordination</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-red-500 text-red-400 pulse-animation">
            <AlertTriangle className="w-3 h-3 mr-1" />
            3 Critical Incidents
          </Badge>
          <Button className="bg-red-500 hover:bg-red-600">
            <Plus className="w-4 h-4 mr-2" />
            Create Incident
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">5</div>
            <p className="text-xs text-muted-foreground">3 Critical, 2 High</p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">8.5</div>
            <p className="text-xs text-muted-foreground">minutes (target: 15min)</p>
          </CardContent>
        </Card>

        <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved This Month</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">47</div>
            <p className="text-xs text-muted-foreground">94% resolution rate</p>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">12</div>
            <p className="text-xs text-muted-foreground">5 on-call, 7 available</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="incidents" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="incidents">Incidents</TabsTrigger>
          <TabsTrigger value="response">Response Team</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="playbooks">Playbooks</TabsTrigger>
        </TabsList>

        <TabsContent value="incidents" className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span>Active Incidents</span>
              </CardTitle>
              <CardDescription>Real-time incident tracking and management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search incidents by ID, title, or assignee..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="investigating">Investigating</SelectItem>
                    <SelectItem value="mitigating">Mitigating</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={severityFilter} onValueChange={setSeverityFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severity</SelectItem>
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
                    <TableHead>Incident ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Impact</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {incidents.map((incident) => (
                    <TableRow key={incident.id}>
                      <TableCell className="font-mono text-blue-400">{incident.id}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate" title={incident.title}>
                          {incident.title}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getSeverityColor(incident.severity)}>
                          {incident.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(incident.status)}>
                          <span className="flex items-center space-x-1">
                            {getStatusIcon(incident.status)}
                            <span>{incident.status}</span>
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell>{incident.assignee}</TableCell>
                      <TableCell className="text-muted-foreground">{incident.created}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>Assets: {incident.affectedAssets}</div>
                          <div className="text-red-400">{incident.estimatedLoss}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Update
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

        <TabsContent value="response" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span>Response Team Status</span>
                </CardTitle>
                <CardDescription>Current team availability and assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {responseTeams.map((team, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">{team.name}</div>
                          <div className="text-sm text-muted-foreground">{team.member}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-blue-500 text-blue-400">
                          {team.role}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={
                            team.status === 'Active' ? 'border-green-500 text-green-400' :
                            team.status === 'On-Call' ? 'border-orange-500 text-orange-400' :
                            'border-yellow-500 text-yellow-400'
                          }
                        >
                          {team.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <span>Response Metrics</span>
                </CardTitle>
                <CardDescription>Response time and resolution performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={responseMetrics}>
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
                      dataKey="responseTime" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="Response Time (min)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="resolutionTime" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      name="Resolution Time (min)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="workflows" className="space-y-4">
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Incident Response Workflows</span>
              </CardTitle>
              <CardDescription>Automated response procedures and escalation paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Critical Incident</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm">Immediate escalation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Notify leadership</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Activate war room</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Execute response plan</span>
                      </div>
                    </div>
                    <Progress value={85} className="mt-4" />
                    <p className="text-xs text-muted-foreground mt-2">Active: 2 incidents</p>
                  </CardContent>
                </Card>

                <Card className="border-orange-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">High Priority</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Assign to team lead</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Assess impact</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Implement containment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Monitor resolution</span>
                      </div>
                    </div>
                    <Progress value={67} className="mt-4" />
                    <p className="text-xs text-muted-foreground mt-2">Active: 3 incidents</p>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Standard Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Initial triage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">Assign priority</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm">Investigation</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Resolution</span>
                      </div>
                    </div>
                    <Progress value={92} className="mt-4" />
                    <p className="text-xs text-muted-foreground mt-2">Active: 8 incidents</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span>Incident Trends</span>
                </CardTitle>
                <CardDescription>Monthly incident volume and resolution rates</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={incidentTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111827', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Bar dataKey="incidents" fill="#ef4444" name="Incidents" />
                    <Bar dataKey="resolved" fill="#10b981" name="Resolved" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Performance Metrics</span>
                </CardTitle>
                <CardDescription>Key performance indicators and SLA compliance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Mean Time to Response</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={85} className="w-24 h-2" />
                      <span className="text-sm text-green-400">8.5 min</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mean Time to Resolution</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={78} className="w-24 h-2" />
                      <span className="text-sm text-green-400">2.3 hours</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>First Call Resolution</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={67} className="w-24 h-2" />
                      <span className="text-sm text-green-400">67%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>SLA Compliance</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={94} className="w-24 h-2" />
                      <span className="text-sm text-green-400">94%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Satisfaction</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={91} className="w-24 h-2" />
                      <span className="text-sm text-green-400">4.6/5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="playbooks" className="space-y-4">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-orange-400" />
                <span>Incident Response Playbooks</span>
              </CardTitle>
              <CardDescription>Standardized response procedures and documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-red-400" />
                      <span>Malware Response</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive procedures for malware incidents including containment, eradication, and recovery.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-red-500 text-red-400">Critical</Badge>
                      <div className="text-sm">Last updated: 2025-01-15</div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">View Playbook</Button>
                  </CardContent>
                </Card>

                <Card className="border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-blue-400" />
                      <span>Data Breach</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Step-by-step guidance for data breach incidents including legal requirements and notification procedures.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-orange-500 text-orange-400">High</Badge>
                      <div className="text-sm">Last updated: 2025-01-18</div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">View Playbook</Button>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-green-400" />
                      <span>DDoS Mitigation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Network-based attack response including traffic analysis and mitigation strategies.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-yellow-500 text-yellow-400">Medium</Badge>
                      <div className="text-sm">Last updated: 2025-01-12</div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">View Playbook</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}