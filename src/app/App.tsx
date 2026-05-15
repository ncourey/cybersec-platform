import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { ThreatDetection } from "./components/ThreatDetection";
import { VulnerabilityManagement } from "./components/VulnerabilityManagement";
import { NetworkMonitoring } from "./components/NetworkMonitoring";
import { IncidentResponse } from "./components/IncidentResponse";
import { AssetManagement } from "./components/AssetManagement";
import { AccessControl } from "./components/AccessControl";
import { Settings } from "./components/Settings";
import { PieChartPage } from "./components/PieChartPage";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  Bug, 
  Activity, 
  Settings as SettingsIcon, 
  Users, 
  FileText, 
  Database,
  Menu,
  X,
  Search,
  Bell,
  User,
  Lock,
  PieChart
} from "lucide-react";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: Shield, component: Dashboard },
  { id: "threats", label: "Threat Detection", icon: AlertTriangle, component: ThreatDetection },
  { id: "vulnerabilities", label: "Vulnerabilities", icon: Bug, component: VulnerabilityManagement },
  { id: "network", label: "Network Monitor", icon: Activity, component: NetworkMonitoring },
  { id: "incidents", label: "Incident Response", icon: FileText, component: IncidentResponse },
  { id: "assets", label: "Asset Management", icon: Database, component: AssetManagement },
  { id: "users", label: "Access Control", icon: Users, component: AccessControl },
  { id: "settings", label: "Settings", icon: SettingsIcon, component: Settings },
  { id: "piechart", label: "Pie chart", icon: PieChart, component: PieChartPage },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderActiveComponent = () => {
    const activeItem = navigationItems.find(item => item.id === activeTab);
    
    if (!activeItem || !activeItem.component) return <Dashboard />;
    
    const Component = activeItem.component;
    return <Component />;
  };

  return (
    <div className="min-h-screen bg-background dark cyber-grid">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/80">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CyberShield Pro
                </h1>
                <p className="text-xs text-muted-foreground">Enterprise Security Platform</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search security events..."
                className="pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring w-64 text-white placeholder:text-muted-foreground"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">
                7
              </span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed lg:static lg:translate-x-0 inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:transition-none mt-16 lg:mt-0 sidebar-container`}
        >
          <div className="p-6 border-b border-border">
            <div className="space-y-2">
              <Badge variant="outline" className="border-green-500 text-green-400 w-full justify-center">
                <Lock className="w-3 h-3 mr-1" />
                <span className="text-green-400">Security Status: Active</span>
              </Badge>
              <div className="text-sm text-center" style={{ color: '#94a3b8' }}>
                Last scan: 2 minutes ago
              </div>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start sidebar-nav-button ${
                    isActive 
                      ? "active glow-effect" 
                      : ""
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  <span className="text-current">{item.label}</span>
                  {item.id === "threats" && (
                    <Badge variant="outline" className="ml-auto border-red-500 text-red-400 text-xs">
                      <span className="text-red-400">7</span>
                    </Badge>
                  )}
                  {item.id === "vulnerabilities" && (
                    <Badge variant="outline" className="ml-auto border-orange-500 text-orange-400 text-xs">
                      <span className="text-orange-400">23</span>
                    </Badge>
                  )}
                  {item.id === "incidents" && (
                    <Badge variant="outline" className="ml-auto border-red-500 text-red-400 text-xs">
                      <span className="text-red-400">3</span>
                    </Badge>
                  )}
                </Button>
              );
            })}
          </nav>

          {/* System Status */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: '#e2e8f0' }}>System Health</span>
                <Badge variant="outline" className="border-green-500 text-green-400">
                  <span className="text-green-400">98%</span>
                </Badge>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: '#e2e8f0' }}>Active Sensors</span>
                <span className="text-green-400">247/247</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span style={{ color: '#e2e8f0' }}>License</span>
                <span className="text-blue-400">Enterprise</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {/* Overlay for mobile */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}
