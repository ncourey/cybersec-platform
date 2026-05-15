import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ResizableDialog, ResizableDialogContent, ResizableDialogDescription, ResizableDialogHeader, ResizableDialogTitle, ResizableDialogTrigger, ResizableDialogFooter } from "./ui/resizable-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { Shield, AlertTriangle, Activity, Eye, Lock, Zap, TrendingUp, TrendingDown, X, Calendar, Clock, MapPin, User, Search, Filter, ArrowUpDown } from "lucide-react";

const threatData = [
  { time: "00:00", threats: 12, blocked: 11 },
  { time: "04:00", threats: 8, blocked: 8 },
  { time: "08:00", threats: 24, blocked: 22 },
  { time: "12:00", threats: 31, blocked: 28 },
  { time: "16:00", threats: 18, blocked: 17 },
  { time: "20:00", threats: 15, blocked: 14 },
];

const vulnerabilityData = [
  { name: "Critical", value: 3, color: "#ef4444" },
  { name: "High", value: 12, color: "#f59e0b" },
  { name: "Medium", value: 28, color: "#eab308" },
  { name: "Low", value: 45, color: "#10b981" },
];

const threatDetails = [
  { id: 1, type: "Malware", severity: "High", source: "External", target: "Web Server", status: "Blocked", time: "2 min ago", timestamp: Date.now() - 2 * 60 * 1000 },
  { id: 2, type: "Phishing", severity: "Medium", source: "Email", target: "User Workstation", status: "Quarantined", time: "5 min ago", timestamp: Date.now() - 5 * 60 * 1000 },
  { id: 3, type: "Brute Force", severity: "High", source: "External", target: "SSH Service", status: "Blocked", time: "8 min ago", timestamp: Date.now() - 8 * 60 * 1000 },
  { id: 4, type: "DDoS", severity: "Critical", source: "Botnet", target: "Public API", status: "Mitigated", time: "12 min ago", timestamp: Date.now() - 12 * 60 * 1000 },
  { id: 5, type: "SQL Injection", severity: "High", source: "External", target: "Database", status: "Blocked", time: "15 min ago", timestamp: Date.now() - 15 * 60 * 1000 },
  { id: 6, type: "Ransomware", severity: "Critical", source: "External", target: "File Server", status: "Blocked", time: "18 min ago", timestamp: Date.now() - 18 * 60 * 1000 },
  { id: 7, type: "Port Scan", severity: "Low", source: "External", target: "Network", status: "Monitoring", time: "22 min ago", timestamp: Date.now() - 22 * 60 * 1000 },
  { id: 8, type: "Credential Stuffing", severity: "Critical", source: "Botnet", target: "Login Portal", status: "Blocked", time: "25 min ago", timestamp: Date.now() - 25 * 60 * 1000 },
  { id: 9, type: "Cross-Site Scripting", severity: "Medium", source: "External", target: "Web Application", status: "Blocked", time: "30 min ago", timestamp: Date.now() - 30 * 60 * 1000 },
  { id: 10, type: "Buffer Overflow", severity: "High", source: "External", target: "Service", status: "Blocked", time: "35 min ago", timestamp: Date.now() - 35 * 60 * 1000 },
];

const incidentDetails = [
  { id: 1, title: "Unauthorized Access Attempt", priority: "Critical", assignee: "John Smith", status: "In Progress", created: "10 min ago", timestamp: Date.now() - 10 * 60 * 1000, department: "IT Security" },
  { id: 2, title: "Suspicious Network Activity", priority: "High", assignee: "Sarah Johnson", status: "Investigating", created: "25 min ago", timestamp: Date.now() - 25 * 60 * 1000, department: "Network Ops" },
  { id: 3, title: "Failed Login Attempts", priority: "Medium", assignee: "Mike Davis", status: "Monitoring", created: "1 hour ago", timestamp: Date.now() - 60 * 60 * 1000, department: "Identity Management" },
  { id: 4, title: "Malware Detection", priority: "High", assignee: "Emily Chen", status: "Resolving", created: "2 hours ago", timestamp: Date.now() - 2 * 60 * 60 * 1000, department: "Endpoint Security" },
  { id: 5, title: "Data Exfiltration Alert", priority: "Critical", assignee: "Alex Turner", status: "Escalated", created: "3 hours ago", timestamp: Date.now() - 3 * 60 * 60 * 1000, department: "Data Protection" },
  { id: 6, title: "Firewall Rule Violation", priority: "Medium", assignee: "Lisa Wong", status: "New", created: "4 hours ago", timestamp: Date.now() - 4 * 60 * 60 * 1000, department: "Network Security" },
  { id: 7, title: "Endpoint Compromise", priority: "Critical", assignee: "David Kim", status: "In Progress", created: "5 hours ago", timestamp: Date.now() - 5 * 60 * 60 * 1000, department: "Incident Response" },
  { id: 8, title: "Phishing Campaign Detected", priority: "High", assignee: "Maria Garcia", status: "New", created: "6 hours ago", timestamp: Date.now() - 6 * 60 * 60 * 1000, department: "Email Security" },
  { id: 9, title: "Privilege Escalation", priority: "Critical", assignee: "Robert Chen", status: "Investigating", created: "7 hours ago", timestamp: Date.now() - 7 * 60 * 60 * 1000, department: "Access Control" },
  { id: 10, title: "SSL Certificate Expiry", priority: "Low", assignee: "Jennifer Lee", status: "Scheduled", created: "8 hours ago", timestamp: Date.now() - 8 * 60 * 60 * 1000, department: "Infrastructure" },
];

const vulnerabilityDetails = [
  { id: 1, title: "CVE-2024-1234: Buffer Overflow in Apache", severity: "Critical", score: 9.8, affected: "Web Servers (3)", status: "Patch Available", discovered: "1 day ago", category: "Web Server" },
  { id: 2, title: "CVE-2024-5678: Remote Code Execution", severity: "High", score: 8.1, affected: "Windows Endpoints (45)", status: "Patch Available", discovered: "2 days ago", category: "Operating System" },
  { id: 3, title: "CVE-2024-9012: SQL Injection Vulnerability", severity: "High", score: 7.5, affected: "Database Servers (2)", status: "Mitigated", discovered: "3 days ago", category: "Database" },
  { id: 4, title: "CVE-2024-3456: Cross-Site Scripting", severity: "Medium", score: 6.1, affected: "Web Applications (12)", status: "Testing", discovered: "4 days ago", category: "Web Application" },
  { id: 5, title: "CVE-2024-7890: Privilege Escalation", severity: "High", score: 7.8, affected: "Linux Systems (8)", status: "Patch Available", discovered: "5 days ago", category: "Operating System" },
  { id: 6, title: "CVE-2024-2468: Denial of Service", severity: "Medium", score: 6.5, affected: "Network Devices (15)", status: "Patch Available", discovered: "6 days ago", category: "Network" },
  { id: 7, title: "CVE-2024-1357: Information Disclosure", severity: "Low", score: 4.3, affected: "API Endpoints (8)", status: "Fixed", discovered: "7 days ago", category: "API" },
  { id: 8, title: "CVE-2024-9753: Memory Corruption", severity: "Critical", score: 9.1, affected: "Mobile Apps (23)", status: "Patch Available", discovered: "8 days ago", category: "Mobile" },
  { id: 9, title: "CVE-2024-4682: Authentication Bypass", severity: "High", score: 8.7, affected: "SSO Systems (4)", status: "Mitigated", discovered: "9 days ago", category: "Authentication" },
  { id: 10, title: "CVE-2024-8024: Insecure Deserialization", severity: "Medium", score: 6.8, affected: "Java Applications (18)", status: "Testing", discovered: "10 days ago", category: "Application" },
];

const securityScoreData = [
  { category: "Network Security", score: 95, max: 100 },
  { category: "Endpoint Protection", score: 98, max: 100 },
  { category: "Access Control", score: 92, max: 100 },
  { category: "Data Protection", score: 89, max: 100 },
  { category: "Incident Response", score: 96, max: 100 },
  { category: "Compliance", score: 94, max: 100 },
];

const networkData = [
  { time: "00:00", traffic: 45, bandwidth: 78 },
  { time: "04:00", traffic: 32, bandwidth: 56 },
  { time: "08:00", traffic: 89, bandwidth: 92 },
  { time: "12:00", traffic: 67, bandwidth: 85 },
  { time: "16:00", traffic: 78, bandwidth: 88 },
  { time: "20:00", traffic: 54, bandwidth: 72 },
];

export function Dashboard() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  
  // Filter and sort states for threats
  const [threatFilter, setThreatFilter] = useState<string>("All");
  const [threatSort, setThreatSort] = useState<string>("newest");
  const [threatSearch, setThreatSearch] = useState<string>("");
  
  // Filter and sort states for incidents
  const [incidentFilter, setIncidentFilter] = useState<string>("All");
  const [incidentSort, setIncidentSort] = useState<string>("newest");
  const [incidentSearch, setIncidentSearch] = useState<string>("");
  const [incidentStatus, setIncidentStatus] = useState<string>("All");
  
  // Filter and sort states for vulnerabilities
  const [vulnFilter, setVulnFilter] = useState<string>("All");
  const [vulnSort, setVulnSort] = useState<string>("score");
  const [vulnSearch, setVulnSearch] = useState<string>("");
  const [vulnCategory, setVulnCategory] = useState<string>("All");

  // Filter functions
  const getFilteredThreats = () => {
    let filtered = threatDetails;
    
    if (threatFilter !== "All") {
      filtered = filtered.filter(threat => threat.severity === threatFilter);
    }
    
    if (threatSearch) {
      filtered = filtered.filter(threat => 
        threat.type.toLowerCase().includes(threatSearch.toLowerCase()) ||
        threat.source.toLowerCase().includes(threatSearch.toLowerCase()) ||
        threat.target.toLowerCase().includes(threatSearch.toLowerCase())
      );
    }
    
    filtered.sort((a, b) => {
      if (threatSort === "newest") return b.timestamp - a.timestamp;
      if (threatSort === "oldest") return a.timestamp - b.timestamp;
      if (threatSort === "severity") {
        const severityOrder = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };
        return severityOrder[b.severity as keyof typeof severityOrder] - severityOrder[a.severity as keyof typeof severityOrder];
      }
      return 0;
    });
    
    return filtered;
  };

  const getFilteredIncidents = () => {
    let filtered = incidentDetails;
    
    if (incidentFilter !== "All") {
      filtered = filtered.filter(incident => incident.priority === incidentFilter);
    }
    
    if (incidentStatus !== "All") {
      filtered = filtered.filter(incident => incident.status === incidentStatus);
    }
    
    if (incidentSearch) {
      filtered = filtered.filter(incident => 
        incident.title.toLowerCase().includes(incidentSearch.toLowerCase()) ||
        incident.assignee.toLowerCase().includes(incidentSearch.toLowerCase()) ||
        incident.department.toLowerCase().includes(incidentSearch.toLowerCase())
      );
    }
    
    filtered.sort((a, b) => {
      if (incidentSort === "newest") return b.timestamp - a.timestamp;
      if (incidentSort === "oldest") return a.timestamp - b.timestamp;
      if (incidentSort === "priority") {
        const priorityOrder = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };
        return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
      }
      return 0;
    });
    
    return filtered;
  };

  const getFilteredVulnerabilities = () => {
    let filtered = vulnerabilityDetails;
    
    if (vulnFilter !== "All") {
      filtered = filtered.filter(vuln => vuln.severity === vulnFilter);
    }
    
    if (vulnCategory !== "All") {
      filtered = filtered.filter(vuln => vuln.category === vulnCategory);
    }
    
    if (vulnSearch) {
      filtered = filtered.filter(vuln => 
        vuln.title.toLowerCase().includes(vulnSearch.toLowerCase()) ||
        vuln.category.toLowerCase().includes(vulnSearch.toLowerCase())
      );
    }
    
    filtered.sort((a, b) => {
      if (vulnSort === "score") return b.score - a.score;
      if (vulnSort === "severity") {
        const severityOrder = { "Critical": 4, "High": 3, "Medium": 2, "Low": 1 };
        return severityOrder[b.severity as keyof typeof severityOrder] - severityOrder[a.severity as keyof typeof severityOrder];
      }
      return 0;
    });
    
    return filtered;
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Security Command Center
          </h1>
          <p className="text-muted-foreground mt-2">Real-time security monitoring and threat analysis</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-green-500 text-green-400">
            <Activity className="w-3 h-3 mr-1" />
            System Active
          </Badge>
          <Badge variant="outline" className="border-blue-500 text-blue-400">
            Last Scan: 2 min ago
          </Badge>
        </div>
      </div>

      {/* Security Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Threats Detected Card */}
        <ResizableDialog open={openDialog === "threats"} onOpenChange={(open) => setOpenDialog(open ? "threats" : null)}>
          <ResizableDialogTrigger asChild>
            <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent cursor-pointer hover:border-blue-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Threats Detected</CardTitle>
                <Shield className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">1,284</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="w-3 h-3 mr-1 text-green-400" />
                  -12% from last hour
                </p>
              </CardContent>
            </Card>
          </ResizableDialogTrigger>
          <ResizableDialogContent defaultWidth={1000} defaultHeight={700} minWidth={600} minHeight={500}>
            <ResizableDialogHeader>
              <ResizableDialogTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Recent Threat Detections</span>
              </ResizableDialogTitle>
              <ResizableDialogDescription>
                Detailed view of recently detected security threats
              </ResizableDialogDescription>
            </ResizableDialogHeader>
            <div className="space-y-4">
              {/* Filter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card 
                  className={`border-red-500/20 cursor-pointer transition-all ${threatFilter === "Critical" ? "ring-2 ring-red-500" : ""}`}
                  onClick={() => setThreatFilter(threatFilter === "Critical" ? "All" : "Critical")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {threatDetails.filter(t => t.severity === "Critical").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Critical</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-orange-500/20 cursor-pointer transition-all ${threatFilter === "High" ? "ring-2 ring-orange-500" : ""}`}
                  onClick={() => setThreatFilter(threatFilter === "High" ? "All" : "High")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">
                        {threatDetails.filter(t => t.severity === "High").length}
                      </div>
                      <div className="text-sm text-muted-foreground">High</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-yellow-500/20 cursor-pointer transition-all ${threatFilter === "Medium" ? "ring-2 ring-yellow-500" : ""}`}
                  onClick={() => setThreatFilter(threatFilter === "Medium" ? "All" : "Medium")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {threatDetails.filter(t => t.severity === "Medium").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Medium</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-green-500/20 cursor-pointer transition-all ${threatFilter === "Low" ? "ring-2 ring-green-500" : ""}`}
                  onClick={() => setThreatFilter(threatFilter === "Low" ? "All" : "Low")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {threatDetails.filter(t => t.severity === "Low").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Low</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search threats..."
                      value={threatSearch}
                      onChange={(e) => setThreatSearch(e.target.value)}
                      className="pl-9 w-64"
                    />
                  </div>
                  <Select value={threatSort} onValueChange={setThreatSort}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="severity">By Severity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={threatFilter === "All" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setThreatFilter("All")}
                  >
                    Show All ({threatDetails.length})
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setThreatFilter("All");
                      setThreatSearch("");
                      setThreatSort("newest");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>

              {/* Threat List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">
                    Threat Detection Results ({getFilteredThreats().length})
                  </h4>
                  {threatFilter !== "All" && (
                    <Badge variant="outline" className="text-blue-400">
                      Filtered by: {threatFilter}
                    </Badge>
                  )}
                </div>
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {getFilteredThreats().map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Badge variant={
                          threat.severity === "Critical" ? "destructive" : 
                          threat.severity === "High" ? "default" : 
                          threat.severity === "Medium" ? "secondary" : "outline"
                        }>
                          {threat.severity}
                        </Badge>
                        <div>
                          <div className="font-medium">{threat.type}</div>
                          <div className="text-sm text-muted-foreground">{threat.source} → {threat.target}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={
                          threat.status === "Blocked" ? "border-green-500 text-green-400" : 
                          threat.status === "Mitigated" ? "border-blue-500 text-blue-400" :
                          "border-yellow-500 text-yellow-400"
                        }>
                          {threat.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">{threat.time}</div>
                      </div>
                    </div>
                  ))}
                  {getFilteredThreats().length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No threats match your current filters
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ResizableDialogContent>
        </ResizableDialog>

        {/* Active Incidents Card */}
        <ResizableDialog open={openDialog === "incidents"} onOpenChange={(open) => setOpenDialog(open ? "incidents" : null)}>
          <ResizableDialogTrigger asChild>
            <Card className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent cursor-pointer hover:border-red-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Incidents</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-400">7</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1 text-red-400" />
                  +2 from last hour
                </p>
              </CardContent>
            </Card>
          </ResizableDialogTrigger>
          <ResizableDialogContent defaultWidth={1000} defaultHeight={700} minWidth={600} minHeight={500}>
            <ResizableDialogHeader>
              <ResizableDialogTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span>Active Security Incidents</span>
              </ResizableDialogTitle>
              <ResizableDialogDescription>
                Current incidents requiring attention from security team
              </ResizableDialogDescription>
            </ResizableDialogHeader>
            <div className="space-y-4">
              {/* Priority Filter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card 
                  className={`border-red-500/20 cursor-pointer transition-all ${incidentFilter === "Critical" ? "ring-2 ring-red-500" : ""}`}
                  onClick={() => setIncidentFilter(incidentFilter === "Critical" ? "All" : "Critical")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {incidentDetails.filter(i => i.priority === "Critical").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Critical</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-orange-500/20 cursor-pointer transition-all ${incidentFilter === "High" ? "ring-2 ring-orange-500" : ""}`}
                  onClick={() => setIncidentFilter(incidentFilter === "High" ? "All" : "High")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">
                        {incidentDetails.filter(i => i.priority === "High").length}
                      </div>
                      <div className="text-sm text-muted-foreground">High</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-yellow-500/20 cursor-pointer transition-all ${incidentFilter === "Medium" ? "ring-2 ring-yellow-500" : ""}`}
                  onClick={() => setIncidentFilter(incidentFilter === "Medium" ? "All" : "Medium")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {incidentDetails.filter(i => i.priority === "Medium").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Medium</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-green-500/20 cursor-pointer transition-all ${incidentFilter === "Low" ? "ring-2 ring-green-500" : ""}`}
                  onClick={() => setIncidentFilter(incidentFilter === "Low" ? "All" : "Low")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {incidentDetails.filter(i => i.priority === "Low").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Low</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4 items-center flex-wrap">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search incidents..."
                      value={incidentSearch}
                      onChange={(e) => setIncidentSearch(e.target.value)}
                      className="pl-9 w-64"
                    />
                  </div>
                  <Select value={incidentStatus} onValueChange={setIncidentStatus}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Status</SelectItem>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Investigating">Investigating</SelectItem>
                      <SelectItem value="Escalated">Escalated</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={incidentSort} onValueChange={setIncidentSort}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="priority">By Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={incidentFilter === "All" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => {
                      setIncidentFilter("All");
                      setIncidentStatus("All");
                    }}
                  >
                    Show All ({incidentDetails.length})
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setIncidentFilter("All");
                      setIncidentStatus("All");
                      setIncidentSearch("");
                      setIncidentSort("newest");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>

              {/* Incident List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">
                    Active Incidents ({getFilteredIncidents().length})
                  </h4>
                  {(incidentFilter !== "All" || incidentStatus !== "All") && (
                    <div className="flex gap-2">
                      {incidentFilter !== "All" && (
                        <Badge variant="outline" className="text-blue-400">
                          Priority: {incidentFilter}
                        </Badge>
                      )}
                      {incidentStatus !== "All" && (
                        <Badge variant="outline" className="text-green-400">
                          Status: {incidentStatus}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {getFilteredIncidents().map((incident) => (
                    <div key={incident.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Badge variant={
                          incident.priority === "Critical" ? "destructive" : 
                          incident.priority === "High" ? "default" : 
                          "secondary"
                        }>
                          {incident.priority}
                        </Badge>
                        <div>
                          <div className="font-medium">{incident.title}</div>
                          <div className="text-sm text-muted-foreground flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{incident.assignee}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Activity className="w-3 h-3" />
                              <span>{incident.department}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={
                          incident.status === "In Progress" ? "border-blue-500 text-blue-400" :
                          incident.status === "Escalated" ? "border-red-500 text-red-400" :
                          incident.status === "New" ? "border-yellow-500 text-yellow-400" :
                          "border-green-500 text-green-400"
                        }>
                          {incident.status}
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">{incident.created}</div>
                      </div>
                    </div>
                  ))}
                  {getFilteredIncidents().length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No incidents match your current filters
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ResizableDialogContent>
        </ResizableDialog>

        {/* Vulnerabilities Card */}
        <ResizableDialog open={openDialog === "vulnerabilities"} onOpenChange={(open) => setOpenDialog(open ? "vulnerabilities" : null)}>
          <ResizableDialogTrigger asChild>
            <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent cursor-pointer hover:border-purple-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Vulnerabilities</CardTitle>
                <Eye className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400">88</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendingDown className="w-3 h-3 mr-1 text-green-400" />
                  -5 resolved today
                </p>
              </CardContent>
            </Card>
          </ResizableDialogTrigger>
          <ResizableDialogContent defaultWidth={1000} defaultHeight={700} minWidth={600} minHeight={500}>
            <ResizableDialogHeader>
              <ResizableDialogTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-purple-400" />
                <span>Vulnerability Management</span>
              </ResizableDialogTitle>
              <ResizableDialogDescription>
                Current vulnerabilities across your infrastructure
              </ResizableDialogDescription>
            </ResizableDialogHeader>
            <div className="space-y-4">
              {/* Severity Filter Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card 
                  className={`border-red-500/20 cursor-pointer transition-all ${vulnFilter === "Critical" ? "ring-2 ring-red-500" : ""}`}
                  onClick={() => setVulnFilter(vulnFilter === "Critical" ? "All" : "Critical")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-400">
                        {vulnerabilityDetails.filter(v => v.severity === "Critical").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Critical</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-orange-500/20 cursor-pointer transition-all ${vulnFilter === "High" ? "ring-2 ring-orange-500" : ""}`}
                  onClick={() => setVulnFilter(vulnFilter === "High" ? "All" : "High")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400">
                        {vulnerabilityDetails.filter(v => v.severity === "High").length}
                      </div>
                      <div className="text-sm text-muted-foreground">High</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-yellow-500/20 cursor-pointer transition-all ${vulnFilter === "Medium" ? "ring-2 ring-yellow-500" : ""}`}
                  onClick={() => setVulnFilter(vulnFilter === "Medium" ? "All" : "Medium")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        {vulnerabilityDetails.filter(v => v.severity === "Medium").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Medium</div>
                    </div>
                  </CardContent>
                </Card>
                <Card 
                  className={`border-green-500/20 cursor-pointer transition-all ${vulnFilter === "Low" ? "ring-2 ring-green-500" : ""}`}
                  onClick={() => setVulnFilter(vulnFilter === "Low" ? "All" : "Low")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        {vulnerabilityDetails.filter(v => v.severity === "Low").length}
                      </div>
                      <div className="text-sm text-muted-foreground">Low</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex gap-4 items-center flex-wrap">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search vulnerabilities..."
                      value={vulnSearch}
                      onChange={(e) => setVulnSearch(e.target.value)}
                      className="pl-9 w-64"
                    />
                  </div>
                  <Select value={vulnCategory} onValueChange={setVulnCategory}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All">All Categories</SelectItem>
                      <SelectItem value="Web Server">Web Server</SelectItem>
                      <SelectItem value="Operating System">Operating System</SelectItem>
                      <SelectItem value="Database">Database</SelectItem>
                      <SelectItem value="Web Application">Web Application</SelectItem>
                      <SelectItem value="Network">Network</SelectItem>
                      <SelectItem value="API">API</SelectItem>
                      <SelectItem value="Mobile">Mobile</SelectItem>
                      <SelectItem value="Authentication">Authentication</SelectItem>
                      <SelectItem value="Application">Application</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={vulnSort} onValueChange={setVulnSort}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="score">CVSS Score</SelectItem>
                      <SelectItem value="severity">By Severity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={vulnFilter === "All" ? "default" : "outline"} 
                    size="sm"
                    onClick={() => {
                      setVulnFilter("All");
                      setVulnCategory("All");
                    }}
                  >
                    Show All ({vulnerabilityDetails.length})
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setVulnFilter("All");
                      setVulnCategory("All");
                      setVulnSearch("");
                      setVulnSort("score");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>

              {/* Vulnerability List */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">
                    Vulnerabilities ({getFilteredVulnerabilities().length})
                  </h4>
                  {(vulnFilter !== "All" || vulnCategory !== "All") && (
                    <div className="flex gap-2">
                      {vulnFilter !== "All" && (
                        <Badge variant="outline" className="text-blue-400">
                          Severity: {vulnFilter}
                        </Badge>
                      )}
                      {vulnCategory !== "All" && (
                        <Badge variant="outline" className="text-green-400">
                          Category: {vulnCategory}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                <div className="max-h-96 overflow-y-auto space-y-2">
                  {getFilteredVulnerabilities().map((vuln) => (
                    <div key={vuln.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <Badge variant={
                          vuln.severity === "Critical" ? "destructive" : 
                          vuln.severity === "High" ? "default" : 
                          vuln.severity === "Medium" ? "secondary" : "outline"
                        }>
                          {vuln.severity}
                        </Badge>
                        <div className="flex-1">
                          <div className="font-medium">{vuln.title}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-4">
                            <span>CVSS Score: {vuln.score}</span>
                            <span>Category: {vuln.category}</span>
                            <span>{vuln.affected}</span>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Discovered: {vuln.discovered}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={
                          vuln.status === "Patch Available" ? "border-green-500 text-green-400" :
                          vuln.status === "Fixed" ? "border-blue-500 text-blue-400" :
                          vuln.status === "Mitigated" ? "border-purple-500 text-purple-400" :
                          "border-yellow-500 text-yellow-400"
                        }>
                          {vuln.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  {getFilteredVulnerabilities().length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No vulnerabilities match your current filters
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ResizableDialogContent>
        </ResizableDialog>

        {/* Security Score Card */}
        <ResizableDialog open={openDialog === "score"} onOpenChange={(open) => setOpenDialog(open ? "score" : null)}>
          <ResizableDialogTrigger asChild>
            <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent cursor-pointer hover:border-green-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Score</CardTitle>
                <Lock className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">94%</div>
                <p className="text-xs text-muted-foreground">Excellent security posture</p>
              </CardContent>
            </Card>
          </ResizableDialogTrigger>
          <ResizableDialogContent defaultWidth={1000} defaultHeight={700} minWidth={600} minHeight={500}>
            <ResizableDialogHeader>
              <ResizableDialogTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-green-400" />
                <span>Security Score Breakdown</span>
              </ResizableDialogTitle>
              <ResizableDialogDescription>
                Detailed analysis of your organization's security posture
              </ResizableDialogDescription>
            </ResizableDialogHeader>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400">94%</div>
                <div className="text-lg text-muted-foreground">Overall Security Score</div>
                <Badge className="mt-2 bg-green-500/20 text-green-400 border-green-500">Excellent</Badge>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Category Breakdown</h4>
                {securityScoreData.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="font-medium">{category.category}</div>
                    <div className="flex items-center space-x-3">
                      <Progress value={category.score} className="w-32" />
                      <span className={`font-bold ${category.score >= 95 ? 'text-green-400' : category.score >= 90 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {category.score}%
                      </span>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ResizableDialogContent>
        </ResizableDialog>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Threat Detection Timeline */}
        <Card className="border-blue-500/20">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Threat Detection Timeline</span>
            </CardTitle>
            <CardDescription>Real-time threat detection and blocking activity</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={threatData}>
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
                  dataKey="threats" 
                  stroke="#ef4444" 
                  fill="#ef4444" 
                  fillOpacity={0.3}
                  name="Threats Detected"
                />
                <Area 
                  type="monotone" 
                  dataKey="blocked" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.3}
                  name="Threats Blocked"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vulnerability Distribution */}
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
                    <Cell key={`dashboard-cell-${entry.name}`} fill={entry.color} />
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

      {/* Network Activity */}
      <Card className="border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span>Network Activity Monitor</span>
          </CardTitle>
          <CardDescription>Real-time network traffic and bandwidth utilization</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={networkData}>
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
                dataKey="traffic" 
                stroke="#3b82f6" 
                strokeWidth={2}
                name="Traffic (%)"
              />
              <Line 
                type="monotone" 
                dataKey="bandwidth" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Bandwidth (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Security Health Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-blue-500/20">
          <CardHeader>
            <CardTitle>Firewall Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Rules Active</span>
              <Badge variant="outline" className="border-green-500 text-green-400">2,847</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Traffic Filtered</span>
              <span className="text-green-400">99.7%</span>
            </div>
            <Progress value={99.7} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-purple-500/20">
          <CardHeader>
            <CardTitle>Intrusion Detection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Signatures Updated</span>
              <Badge variant="outline" className="border-green-500 text-green-400">Today</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Detection Rate</span>
              <span className="text-green-400">98.3%</span>
            </div>
            <Progress value={98.3} className="h-2" />
          </CardContent>
        </Card>

        <Card className="border-orange-500/20">
          <CardHeader>
            <CardTitle>Endpoint Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Devices Protected</span>
              <Badge variant="outline" className="border-green-500 text-green-400">1,247</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Compliance</span>
              <span className="text-green-400">96.8%</span>
            </div>
            <Progress value={96.8} className="h-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}