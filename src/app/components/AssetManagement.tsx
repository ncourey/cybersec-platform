import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { 
  Database, 
  Server, 
  Monitor, 
  Smartphone, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Activity,
  Lock,
  Unlock,
  Wifi,
  HardDrive,
  Settings,
  Play,
  Pause,
  Square,
  X
} from "lucide-react";
import { useState } from "react";

const assets = [
  {
    id: "AS-001",
    name: "Web Server 01",
    type: "Server",
    category: "Infrastructure",
    ip: "192.168.1.10",
    os: "Ubuntu 22.04",
    location: "Data Center A",
    owner: "IT Operations",
    status: "Active",
    riskLevel: "Low",
    lastScan: "2025-01-20 14:30",
    vulnerabilities: 3,
    compliance: "Compliant",
    value: "High"
  },
  {
    id: "AS-002",
    name: "Database Server",
    type: "Database",
    category: "Infrastructure",
    ip: "192.168.1.20",
    os: "Windows Server 2019",
    location: "Data Center A",
    owner: "Database Team",
    status: "Active",
    riskLevel: "Medium",
    lastScan: "2025-01-20 13:45",
    vulnerabilities: 8,
    compliance: "Review Required",
    value: "Critical"
  },
  {
    id: "AS-003",
    name: "Admin Workstation",
    type: "Workstation",
    category: "Endpoint",
    ip: "192.168.1.45",
    os: "Windows 11",
    location: "Office Floor 3",
    owner: "Sarah Johnson",
    status: "Active",
    riskLevel: "High",
    lastScan: "2025-01-20 15:20",
    vulnerabilities: 12,
    compliance: "Non-Compliant",
    value: "Medium"
  },
  {
    id: "AS-004",
    name: "Mobile Device Fleet",
    type: "Mobile",
    category: "Endpoint",
    ip: "N/A",
    os: "iOS/Android",
    location: "Distributed",
    owner: "Mobile Team",
    status: "Active",
    riskLevel: "Medium",
    lastScan: "2025-01-20 12:15",
    vulnerabilities: 5,
    compliance: "Compliant",
    value: "Low"
  },
  {
    id: "AS-005",
    name: "Network Firewall",
    type: "Network Device",
    category: "Security",
    ip: "192.168.1.1",
    os: "Custom Firmware",
    location: "Data Center A",
    owner: "Security Team",
    status: "Active",
    riskLevel: "Low",
    lastScan: "2025-01-20 16:00",
    vulnerabilities: 1,
    compliance: "Compliant",
    value: "Critical"
  }
];

const assetTypes = [
  { name: "Servers", value: 45, color: "#3b82f6" },
  { name: "Workstations", value: 128, color: "#10b981" },
  { name: "Mobile Devices", value: 89, color: "#8b5cf6" },
  { name: "Network Devices", value: 23, color: "#f59e0b" },
  { name: "IoT Devices", value: 67, color: "#ef4444" },
];

const riskDistribution = [
  { name: "Low", value: 156, color: "#10b981" },
  { name: "Medium", value: 89, color: "#f59e0b" },
  { name: "High", value: 45, color: "#ef4444" },
  { name: "Critical", value: 12, color: "#dc2626" },
];

const assetTrends = [
  { month: "Jul", discovered: 28, decommissioned: 15 },
  { month: "Aug", discovered: 34, decommissioned: 18 },
  { month: "Sep", discovered: 22, decommissioned: 12 },
  { month: "Oct", discovered: 41, decommissioned: 25 },
  { month: "Nov", discovered: 38, decommissioned: 22 },
  { month: "Dec", discovered: 45, decommissioned: 28 },
  { month: "Jan", discovered: 32, decommissioned: 19 },
];

const complianceData = [
  { standard: "ISO 27001", compliant: 85, nonCompliant: 15 },
  { standard: "SOC 2", compliant: 78, nonCompliant: 22 },
  { standard: "PCI DSS", compliant: 92, nonCompliant: 8 },
  { standard: "GDPR", compliant: 88, nonCompliant: 12 },
];

export function AssetManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");
  const [discoveryOpen, setDiscoveryOpen] = useState(false);
  const [scanConfigOpen, setScanConfigOpen] = useState(false);
  const [scanRunning, setScanRunning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>([]);
  const [scanType, setScanType] = useState("comprehensive");
  const [discoveredAssets, setDiscoveredAssets] = useState<any[]>([]);

  const networks = [
    { id: "net1", name: "192.168.1.0/24", description: "Main Office Network" },
    { id: "net2", name: "192.168.2.0/24", description: "Data Center Network" },
    { id: "net3", name: "10.0.0.0/16", description: "VPN Network" },
    { id: "net4", name: "172.16.0.0/12", description: "Guest Network" },
  ];

  const mockDiscoveredAssets = [
    { ip: "192.168.1.100", hostname: "printer-office-01", type: "Printer", os: "Unknown", ports: ["80", "443", "9100"] },
    { ip: "192.168.1.101", hostname: "unknown-device", type: "Unknown", os: "Linux", ports: ["22", "80"] },
    { ip: "192.168.1.102", hostname: "iot-camera-01", type: "Security Camera", os: "Embedded", ports: ["80", "554"] },
    { ip: "192.168.1.103", hostname: "nas-storage", type: "NAS", os: "FreeNAS", ports: ["22", "80", "139", "445"] },
    { ip: "192.168.1.104", hostname: "wifi-ap-floor2", type: "Access Point", os: "Custom", ports: ["80", "443"] },
  ];

  const startDiscovery = () => {
    if (selectedNetworks.length === 0) {
      alert("Please select at least one network to scan.");
      return;
    }
    
    setScanRunning(true);
    setScanProgress(0);
    setDiscoveredAssets([]);
    setScanConfigOpen(false);
    setDiscoveryOpen(true);

    // Simulate scan progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanRunning(false);
          setDiscoveredAssets(mockDiscoveredAssets);
          return 100;
        }
        return prev + Math.random() * 10 + 5;
      });
    }, 500);
  };

  const stopScan = () => {
    setScanRunning(false);
    setScanProgress(0);
  };

  const closeDiscoveryDialog = () => {
    if (scanRunning) {
      stopScan();
    }
    setDiscoveryOpen(false);
    setScanProgress(0);
    setDiscoveredAssets([]);
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case "critical": return "border-red-600 text-red-400";
      case "high": return "border-red-500 text-red-400";
      case "medium": return "border-yellow-500 text-yellow-400";
      case "low": return "border-green-500 text-green-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "border-green-500 text-green-400";
      case "inactive": return "border-gray-500 text-gray-400";
      case "maintenance": return "border-yellow-500 text-yellow-400";
      case "decommissioned": return "border-red-500 text-red-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getComplianceColor = (compliance: string) => {
    switch (compliance.toLowerCase()) {
      case "compliant": return "border-green-500 text-green-400";
      case "non-compliant": return "border-red-500 text-red-400";
      case "review required": return "border-yellow-500 text-yellow-400";
      default: return "border-gray-500 text-gray-400";
    }
  };

  const getAssetIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "server": return <Server className="w-4 h-4" />;
      case "database": return <Database className="w-4 h-4" />;
      case "workstation": return <Monitor className="w-4 h-4" />;
      case "mobile": return <Smartphone className="w-4 h-4" />;
      case "network device": return <Wifi className="w-4 h-4" />;
      default: return <HardDrive className="w-4 h-4" />;
    }
  };

  const getDeviceTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "printer": return <Monitor className="w-4 h-4 text-purple-400" />;
      case "security camera": return <Eye className="w-4 h-4 text-blue-400" />;
      case "nas": return <Database className="w-4 h-4 text-green-400" />;
      case "access point": return <Wifi className="w-4 h-4 text-orange-400" />;
      default: return <HardDrive className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Asset Management
          </h1>
          <p className="text-muted-foreground mt-2">Complete inventory and security posture of all organizational assets</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-blue-500 text-blue-400">
            <Database className="w-3 h-3 mr-1" />
            352 Assets Tracked
          </Badge>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Asset
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <Database className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">352</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>

        <Card className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Assets</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">57</div>
            <p className="text-xs text-muted-foreground">16% of total assets</p>
          </CardContent>
        </Card>

        <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliant Assets</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">298</div>
            <p className="text-xs text-muted-foreground">85% compliance rate</p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unmanaged Assets</CardTitle>
            <XCircle className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">23</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="inventory">Asset Inventory</TabsTrigger>
          <TabsTrigger value="discovery">Asset Discovery</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="lifecycle">Lifecycle</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-blue-400" />
                <span>Asset Inventory</span>
              </CardTitle>
              <CardDescription>Complete asset registry with security and compliance status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search assets by name, IP, or owner..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="server">Server</SelectItem>
                    <SelectItem value="database">Database</SelectItem>
                    <SelectItem value="workstation">Workstation</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="network">Network Device</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={riskFilter} onValueChange={setRiskFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Risk Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Risk Levels</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Asset ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Owner</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Vulnerabilities</TableHead>
                    <TableHead>Compliance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assets.map((asset) => (
                    <TableRow key={asset.id}>
                      <TableCell className="font-mono text-blue-400">{asset.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getAssetIcon(asset.type)}
                          <span>{asset.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{asset.type}</TableCell>
                      <TableCell className="font-mono">{asset.ip}</TableCell>
                      <TableCell>{asset.owner}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(asset.status)}>
                          {asset.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRiskColor(asset.riskLevel)}>
                          {asset.riskLevel}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={asset.vulnerabilities > 5 ? "border-red-500 text-red-400" : "border-green-500 text-green-400"}>
                          {asset.vulnerabilities}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getComplianceColor(asset.compliance)}>
                          {asset.compliance}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-3 h-3 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3 mr-1" />
                            Edit
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

        <TabsContent value="discovery" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-green-400" />
                  <span>Asset Discovery</span>
                </CardTitle>
                <CardDescription>Automated network scanning and asset identification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Last Discovery Scan</span>
                    <span className="text-green-400">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Assets Discovered</span>
                    <span className="text-blue-400">12 new</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Network Coverage</span>
                    <span className="text-green-400">98.5%</span>
                  </div>
                  <Progress value={98.5} className="h-2" />
                  <div className="flex space-x-2">
                    <Dialog open={scanConfigOpen} onValueChange={setScanConfigOpen}>
                      <DialogTrigger asChild>
                        <Button className="flex-1" onClick={() => setScanConfigOpen(true)}>
                          <Search className="w-4 h-4 mr-2" />
                          Start Discovery
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-gray-900 border-gray-700">
                        <DialogHeader>
                          <DialogTitle className="text-green-400">Configure Asset Discovery Scan</DialogTitle>
                          <DialogDescription>Select networks and scan parameters for asset discovery</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-white">Network Ranges</h4>
                            <div className="space-y-2">
                              {networks.map((network) => (
                                <div key={network.id} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={network.id}
                                    checked={selectedNetworks.includes(network.id)}
                                    onCheckedChange={(checked) => {
                                      if (checked) {
                                        setSelectedNetworks([...selectedNetworks, network.id]);
                                      } else {
                                        setSelectedNetworks(selectedNetworks.filter(id => id !== network.id));
                                      }
                                    }}
                                  />
                                  <label
                                    htmlFor={network.id}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
                                  >
                                    {network.name} - {network.description}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Separator />

                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-white">Scan Type</h4>
                            <Select value={scanType} onValueChange={setScanType}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="quick">Quick Scan - Basic discovery (5-10 min)</SelectItem>
                                <SelectItem value="comprehensive">Comprehensive Scan - Full discovery (20-30 min)</SelectItem>
                                <SelectItem value="deep">Deep Scan - Detailed analysis (45-60 min)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div className="space-y-2">
                              <h5 className="font-medium text-blue-400">Quick Scan</h5>
                              <p className="text-muted-foreground">• Ping sweep</p>
                              <p className="text-muted-foreground">• Common ports</p>
                              <p className="text-muted-foreground">• Basic OS detection</p>
                            </div>
                            <div className="space-y-2">
                              <h5 className="font-medium text-green-400">Comprehensive</h5>
                              <p className="text-muted-foreground">• Extended port scan</p>
                              <p className="text-muted-foreground">• Service detection</p>
                              <p className="text-muted-foreground">• OS fingerprinting</p>
                            </div>
                            <div className="space-y-2">
                              <h5 className="font-medium text-orange-400">Deep Scan</h5>
                              <p className="text-muted-foreground">• All ports</p>
                              <p className="text-muted-foreground">• Vulnerability check</p>
                              <p className="text-muted-foreground">• Banner grabbing</p>
                            </div>
                          </div>

                          <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setScanConfigOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={startDiscovery} className="bg-green-500 hover:bg-green-600">
                              <Play className="w-4 h-4 mr-2" />
                              Start Scan
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline">
                      <Upload className="w-4 h-4 mr-2" />
                      Import
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-purple-400" />
                  <span>Asset Types Distribution</span>
                </CardTitle>
                <CardDescription>Breakdown of assets by type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={assetTypes}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {assetTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
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
                <div className="flex justify-center space-x-2 mt-4 text-sm">
                  {assetTypes.map((item) => (
                    <div key={item.name} className="flex items-center space-x-1">
                      <div 
                        className="w-2 h-2 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span>Compliance Dashboard</span>
              </CardTitle>
              <CardDescription>Asset compliance status across security frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={complianceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="standard" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#111827', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }} 
                  />
                  <Bar dataKey="compliant" fill="#10b981" />
                  <Bar dataKey="nonCompliant" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                <span>Asset Trends</span>
              </CardTitle>
              <CardDescription>Discovery and lifecycle trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={assetTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#111827', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }} 
                  />
                  <Line type="monotone" dataKey="discovered" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="decommissioned" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lifecycle" className="space-y-4">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="w-5 h-5 text-orange-400" />
                <span>Asset Lifecycle Management</span>
              </CardTitle>
              <CardDescription>Track asset procurement, deployment, maintenance, and retirement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-green-500/20 rounded-lg bg-green-500/5">
                  <div className="text-2xl font-bold text-green-400">23</div>
                  <div className="text-sm text-muted-foreground">Procurement Queue</div>
                </div>
                <div className="p-4 border border-blue-500/20 rounded-lg bg-blue-500/5">
                  <div className="text-2xl font-bold text-blue-400">45</div>
                  <div className="text-sm text-muted-foreground">Deployment Ready</div>
                </div>
                <div className="p-4 border border-yellow-500/20 rounded-lg bg-yellow-500/5">
                  <div className="text-2xl font-bold text-yellow-400">12</div>
                  <div className="text-sm text-muted-foreground">Maintenance Due</div>
                </div>
                <div className="p-4 border border-red-500/20 rounded-lg bg-red-500/5">
                  <div className="text-2xl font-bold text-red-400">8</div>
                  <div className="text-sm text-muted-foreground">End of Life</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Discovery Progress Dialog */}
      <Dialog open={discoveryOpen} onValueChange={(open) => !open && closeDiscoveryDialog()}>
        <DialogContent className="max-w-6xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-green-400 flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Asset Discovery in Progress</span>
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeDiscoveryDialog}
                className="text-gray-400 hover:text-white hover:bg-gray-800 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription className="text-white">
              Scanning selected networks for assets and devices
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white">Scan Progress</span>
                <span className="text-sm text-white">{Math.round(scanProgress)}%</span>
              </div>
              <Progress value={scanProgress} className="h-3" />
              {scanRunning && (
                <p className="text-sm text-white">
                  Scanning networks... {Math.round(scanProgress)}% complete
                </p>
              )}
            </div>

            <div className="flex justify-center space-x-2">
              {scanRunning && (
                <Button 
                  variant="outline" 
                  onClick={stopScan}
                  className="border-red-500 text-red-400 hover:bg-red-500/10"
                >
                  <Square className="w-4 h-4 mr-2" />
                  Stop Scan
                </Button>
              )}
              <Button 
                variant="outline" 
                onClick={closeDiscoveryDialog}
                className="text-white border-gray-600 hover:bg-gray-700"
              >
                Close
              </Button>
            </div>

            {discoveredAssets.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-green-400">
                    Discovered Assets ({discoveredAssets.length})
                  </h4>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    Scan Complete
                  </Badge>
                </div>
                
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-white">IP Address</TableHead>
                        <TableHead className="text-white">Hostname</TableHead>
                        <TableHead className="text-white">Device Type</TableHead>
                        <TableHead className="text-white">Operating System</TableHead>
                        <TableHead className="text-white">Open Ports</TableHead>
                        <TableHead className="text-white">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {discoveredAssets.map((asset, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-mono text-blue-400">{asset.ip}</TableCell>
                          <TableCell className="text-white">{asset.hostname}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getDeviceTypeIcon(asset.type)}
                              <span className="text-white">{asset.type}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-white">{asset.os}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {asset.ports.map((port: string) => (
                                <Badge key={port} variant="outline" className="text-xs text-white border-gray-600">
                                  {port}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="text-green-400 border-green-500 hover:bg-green-500/10">
                                Add to Inventory
                              </Button>
                              <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                                <Eye className="w-3 h-3 mr-1" />
                                Details
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={closeDiscoveryDialog} className="text-white border-gray-600 hover:bg-gray-700">
                    Close
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-600">
                    Add All to Inventory
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}