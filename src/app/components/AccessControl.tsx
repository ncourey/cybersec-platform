import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Progress } from "./ui/progress";
import { Switch } from "./ui/switch";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { 
  Users, 
  Shield, 
  Key, 
  Lock, 
  Unlock,
  UserCheck,
  UserX,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Activity,
  Clock,
  Globe,
  Fingerprint,
  Smartphone,
  Mail
} from "lucide-react";
import { useState } from "react";

const users = [
  {
    id: "USR-001",
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Security Administrator",
    department: "IT Security",
    status: "Active",
    lastLogin: "2025-01-20 15:30:22",
    loginAttempts: 0,
    mfaEnabled: true,
    riskLevel: "Low",
    permissions: ["Full Access", "Admin Panel", "User Management"],
    location: "New York, NY"
  },
  {
    id: "USR-002",
    name: "Mike Chen",
    email: "mike.chen@company.com",
    role: "Network Engineer",
    department: "IT Operations",
    status: "Active",
    lastLogin: "2025-01-20 14:15:45",
    loginAttempts: 1,
    mfaEnabled: true,
    riskLevel: "Low",
    permissions: ["Network Access", "Monitoring", "Configuration"],
    location: "San Francisco, CA"
  },
  {
    id: "USR-003",
    name: "Lisa Park",
    email: "lisa.park@company.com",
    role: "Data Analyst",
    department: "Analytics",
    status: "Locked",
    lastLogin: "2025-01-20 11:22:18",
    loginAttempts: 5,
    mfaEnabled: false,
    riskLevel: "High",
    permissions: ["Data Access", "Reports"],
    location: "Chicago, IL"
  },
  {
    id: "USR-004",
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
    lastLogin: "2025-01-20 16:45:12",
    loginAttempts: 0,
    mfaEnabled: true,
    riskLevel: "Medium",
    permissions: ["Code Repository", "Development Tools"],
    location: "Austin, TX"
  },
  {
    id: "USR-005",
    name: "Alex Rodriguez",
    email: "alex.rodriguez@company.com",
    role: "Guest User",
    department: "External",
    status: "Pending",
    lastLogin: "N/A",
    loginAttempts: 0,
    mfaEnabled: false,
    riskLevel: "Medium",
    permissions: ["Limited Access"],
    location: "Remote"
  }
];

const roles = [
  {
    id: "ROL-001",
    name: "Security Administrator",
    description: "Full security system access and management",
    users: 3,
    permissions: 45,
    lastModified: "2025-01-15",
    riskLevel: "High"
  },
  {
    id: "ROL-002",
    name: "Network Engineer",
    description: "Network infrastructure management and monitoring",
    users: 8,
    permissions: 28,
    lastModified: "2025-01-18",
    riskLevel: "Medium"
  },
  {
    id: "ROL-003",
    name: "Data Analyst",
    description: "Data access and reporting capabilities",
    users: 12,
    permissions: 15,
    lastModified: "2025-01-20",
    riskLevel: "Low"
  },
  {
    id: "ROL-004",
    name: "Developer",
    description: "Development tools and repository access",
    users: 25,
    permissions: 22,
    lastModified: "2025-01-19",
    riskLevel: "Medium"
  },
  {
    id: "ROL-005",
    name: "Guest User",
    description: "Limited access for external users",
    users: 5,
    permissions: 3,
    lastModified: "2025-01-16",
    riskLevel: "Low"
  }
];

const accessLogs = [
  {
    id: "LOG-001",
    user: "Sarah Johnson",
    action: "Login Success",
    resource: "Admin Panel",
    timestamp: "2025-01-20 15:30:22",
    ip: "192.168.1.45",
    location: "New York, NY",
    riskLevel: "Low"
  },
  {
    id: "LOG-002",
    user: "Mike Chen",
    action: "Resource Access",
    resource: "Network Configuration",
    timestamp: "2025-01-20 14:15:45",
    ip: "192.168.1.67",
    location: "San Francisco, CA",
    riskLevel: "Low"
  },
  {
    id: "LOG-003",
    user: "Lisa Park",
    action: "Failed Login",
    resource: "Data Portal",
    timestamp: "2025-01-20 11:22:18",
    ip: "203.0.113.45",
    location: "Unknown",
    riskLevel: "High"
  },
  {
    id: "LOG-004",
    user: "David Kim",
    action: "Permission Escalation",
    resource: "Code Repository",
    timestamp: "2025-01-20 16:45:12",
    ip: "192.168.1.89",
    location: "Austin, TX",
    riskLevel: "Medium"
  },
  {
    id: "LOG-005",
    user: "Unknown",
    action: "Unauthorized Access",
    resource: "File Server",
    timestamp: "2025-01-20 13:30:55",
    ip: "185.199.108.153",
    location: "External",
    riskLevel: "Critical"
  }
];

const authenticationMethods = [
  { name: "Password", value: 45, color: "#3b82f6" },
  { name: "MFA", value: 38, color: "#10b981" },
  { name: "SSO", value: 25, color: "#8b5cf6" },
  { name: "Biometric", value: 12, color: "#f59e0b" },
];

const accessTrends = [
  { time: "00:00", logins: 12, failures: 3 },
  { time: "04:00", logins: 8, failures: 1 },
  { time: "08:00", logins: 45, failures: 8 },
  { time: "12:00", logins: 67, failures: 12 },
  { time: "16:00", logins: 52, failures: 6 },
  { time: "20:00", logins: 28, failures: 4 },
];

const riskMetrics = [
  { category: "User Behavior", score: 85 },
  { category: "Authentication", score: 92 },
  { category: "Access Patterns", score: 78 },
  { category: "Device Security", score: 88 },
  { category: "Location Analysis", score: 91 },
];

export function AccessControl() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [riskFilter, setRiskFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active": return "border-green-500 text-green-400";
      case "locked": return "border-red-500 text-red-400";
      case "pending": return "border-yellow-500 text-yellow-400";
      case "disabled": return "border-gray-500 text-gray-400";
      default: return "border-gray-500 text-gray-400";
    }
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

  const getActionColor = (action: string) => {
    switch (action.toLowerCase()) {
      case "login success": return "border-green-500 text-green-400";
      case "failed login": return "border-red-500 text-red-400";
      case "unauthorized access": return "border-red-600 text-red-400";
      case "permission escalation": return "border-yellow-500 text-yellow-400";
      default: return "border-blue-500 text-blue-400";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Access Control & Identity Management
          </h1>
          <p className="text-muted-foreground mt-2">Advanced user authentication and authorization management</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-green-500 text-green-400">
            <Users className="w-3 h-3 mr-1" />
            247 Active Users
          </Badge>
          <Button className="bg-purple-500 hover:bg-purple-600">
            <Plus className="w-4 h-4 mr-2" />
            Add User
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">247</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>

        <Card className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Failed Logins</CardTitle>
            <UserX className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">34</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>

        <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">MFA Enabled</CardTitle>
            <Shield className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">89%</div>
            <p className="text-xs text-muted-foreground">219 of 247 users</p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Risk Users</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-400">12</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles & Permissions</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="access-logs">Access Logs</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>User Management</span>
              </CardTitle>
              <CardDescription>Manage user accounts, permissions, and security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users by name, email, or role..."
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
                    <SelectItem value="locked">Locked</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={roleFilter} onValueChange={setRoleFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="engineer">Engineer</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>MFA</TableHead>
                    <TableHead>Risk Level</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-mono text-blue-400">{user.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span>{user.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch checked={user.mfaEnabled} />
                          {user.mfaEnabled ? (
                            <Shield className="w-4 h-4 text-green-400" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-red-400" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRiskColor(user.riskLevel)}>
                          {user.riskLevel}
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

        <TabsContent value="roles" className="space-y-4">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Roles & Permissions</span>
              </CardTitle>
              <CardDescription>Manage user roles and permission assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Role Management</h3>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Role
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role ID</TableHead>
                      <TableHead>Role Name</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Users</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-mono text-blue-400">{role.id}</TableCell>
                        <TableCell>{role.name}</TableCell>
                        <TableCell className="max-w-xs truncate">{role.description}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-blue-500 text-blue-400">
                            {role.users}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="border-green-500 text-green-400">
                            {role.permissions}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{role.lastModified}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getRiskColor(role.riskLevel)}>
                            {role.riskLevel}
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
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-green-400" />
                  <span>Authentication Methods</span>
                </CardTitle>
                <CardDescription>Distribution of authentication methods in use</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={authenticationMethods}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {authenticationMethods.map((entry, index) => (
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
                      labelStyle={{
                        color: '#ffffff',
                        fontWeight: '600'
                      }}
                      itemStyle={{
                        color: '#ffffff',
                        fontWeight: '500'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center space-x-2 mt-4 text-xs">
                  {authenticationMethods.map((item) => (
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

            <Card className="border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Fingerprint className="w-5 h-5 text-purple-400" />
                  <span>Security Settings</span>
                </CardTitle>
                <CardDescription>Authentication and security configuration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Smartphone className="w-4 h-4 text-blue-400" />
                    <span>Multi-Factor Authentication</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-green-400" />
                    <span>Password Policy Enforcement</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-orange-400" />
                    <span>Single Sign-On (SSO)</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-purple-400" />
                    <span>Session Monitoring</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span>Risk-Based Authentication</span>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="access-logs" className="space-y-4">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-orange-400" />
                <span>Access Logs & Audit Trail</span>
              </CardTitle>
              <CardDescription>Real-time access monitoring and security events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Log ID</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Resource</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Risk Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {accessLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-mono text-blue-400">{log.id}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getActionColor(log.action)}>
                          {log.action}
                        </Badge>
                      </TableCell>
                      <TableCell>{log.resource}</TableCell>
                      <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                      <TableCell className="font-mono">{log.ip}</TableCell>
                      <TableCell>{log.location}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRiskColor(log.riskLevel)}>
                          {log.riskLevel}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policies" className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-red-400" />
                <span>Security Policies</span>
              </CardTitle>
              <CardDescription>Access control policies and enforcement rules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="border-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Password Policy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Minimum 12 characters</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Special characters required</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>90-day expiration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>History of 12 passwords</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline" size="sm">
                      Edit Policy
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Access Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Role-based access (RBAC)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Principle of least privilege</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Regular access reviews</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Automated de-provisioning</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline" size="sm">
                      Edit Policy
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg">Session Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>8-hour session timeout</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Concurrent session limits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Device registration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>Location-based restrictions</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline" size="sm">
                      Edit Policy
                    </Button>
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
                  <span>Access Trends</span>
                </CardTitle>
                <CardDescription>Daily login patterns and security events</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={accessTrends}>
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
                      labelStyle={{
                        color: '#ffffff',
                        fontWeight: '600'
                      }}
                      itemStyle={{
                        color: '#ffffff',
                        fontWeight: '500'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="logins" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      name="Successful Logins"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="failures" 
                      stroke="#ef4444" 
                      strokeWidth={2}
                      name="Failed Attempts"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-green-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>Risk Assessment</span>
                </CardTitle>
                <CardDescription>Security risk metrics and scoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={riskMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="category" stroke="#64748b" />
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
                    <Bar dataKey="score" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}