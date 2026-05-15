import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  Settings as SettingsIcon, 
  Shield, 
  Bell, 
  Database, 
  Key, 
  Cloud, 
  FileText,
  CreditCard,
  Server,
  Save,
  RefreshCw,
  Download,
  Upload,
  Eye,
  EyeOff,
  CheckCircle,
  AlertTriangle,
  Info,
  Copy,
  Trash2,
  Plus,
  Edit,
  Monitor,
  Lock,
  Unlock,
  Globe,
  Mail,
  Smartphone,
  Calendar,
  Clock
} from "lucide-react";
import { useState } from "react";

export function Settings() {
  // System Configuration State
  const [systemConfig, setSystemConfig] = useState({
    systemName: "CyberShield Pro",
    timezone: "UTC-5",
    language: "English",
    theme: "dark",
    autoUpdate: true,
    debugMode: false,
    performanceMode: "balanced"
  });

  // Security Policies State
  const [securityPolicies, setSecurityPolicies] = useState({
    passwordMinLength: 12,
    passwordExpiry: 90,
    maxLoginAttempts: 5,
    sessionTimeout: 480,
    mfaRequired: true,
    ssoEnabled: true,
    encryptionLevel: "AES-256"
  });

  // Notifications State
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    slackIntegration: true,
    smsAlerts: false,
    pushNotifications: true,
    criticalOnly: false,
    quietHours: true,
    alertFrequency: "immediate"
  });

  // API Configuration State
  const [apiConfig, setApiConfig] = useState({
    apiEnabled: true,
    rateLimitEnabled: true,
    requestsPerMinute: 1000,
    webhooksEnabled: true,
    apiVersion: "v2.1"
  });

  // Backup Settings State
  const [backupSettings, setBackupSettings] = useState({
    autoBackup: true,
    backupFrequency: "daily",
    retentionDays: 30,
    cloudBackup: true,
    encryptBackups: true,
    compressionEnabled: true
  });

  // Show/Hide API Keys
  const [showApiKeys, setShowApiKeys] = useState({
    main: false,
    webhook: false,
    integration: false
  });

  // Mock API Keys
  const [apiKeys] = useState({
    main: "sk_live_51H7Rf2eZvKYlo2C0QrPGJqGKJfzaABCDEFGHIJKLMNOP",
    webhook: "whsec_1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
    integration: "int_1234567890abcdef1234567890abcdef12345678"
  });

  // License Information
  const [licenseInfo] = useState({
    type: "Enterprise",
    users: 247,
    maxUsers: 500,
    expiryDate: "2025-12-31",
    features: ["Full Access", "24/7 Support", "Advanced Analytics", "Custom Integrations"]
  });

  // Save handlers
  const handleSaveSystemConfig = () => {
    // Simulate API call
    setTimeout(() => {
      alert("System configuration saved successfully!");
    }, 500);
  };

  const handleSaveSecurityPolicies = () => {
    setTimeout(() => {
      alert("Security policies updated successfully!");
    }, 500);
  };

  const handleSaveNotifications = () => {
    setTimeout(() => {
      alert("Notification settings saved successfully!");
    }, 500);
  };

  const handleTestNotification = () => {
    alert("Test notification sent! Check your configured channels.");
  };

  const handleBackupNow = () => {
    setTimeout(() => {
      alert("Backup initiated successfully! Check the backup status in the system logs.");
    }, 1000);
  };

  const handleExportSettings = () => {
    const settings = {
      systemConfig,
      securityPolicies,
      notifications,
      apiConfig,
      backupSettings
    };
    const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cybershield-settings.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied to clipboard!`);
  };

  const toggleApiKeyVisibility = (key: keyof typeof showApiKeys) => {
    setShowApiKeys(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const generateNewApiKey = (type: string) => {
    alert(`New ${type} API key generated! Please save it securely as it won't be shown again.`);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Security Settings & Configuration
          </h1>
          <p className="text-muted-foreground mt-2">Manage system configuration, security policies, and platform settings</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="border-green-500 text-green-400">
            <CheckCircle className="w-3 h-3 mr-1" />
            All Systems Operational
          </Badge>
          <Button onClick={handleExportSettings} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="system" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API & Keys</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
          <TabsTrigger value="audit">Audit</TabsTrigger>
          <TabsTrigger value="license">License</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4">
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Monitor className="w-5 h-5 text-blue-400" />
                <span>System Configuration</span>
              </CardTitle>
              <CardDescription>Core system settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="systemName">System Name</Label>
                    <Input
                      id="systemName"
                      value={systemConfig.systemName}
                      onChange={(e) => setSystemConfig(prev => ({ ...prev, systemName: e.target.value }))}
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select 
                      value={systemConfig.timezone} 
                      onValueChange={(value) => setSystemConfig(prev => ({ ...prev, timezone: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="UTC+0">UTC</SelectItem>
                        <SelectItem value="UTC+1">Central European Time (UTC+1)</SelectItem>
                        <SelectItem value="UTC+9">Japan Standard Time (UTC+9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select 
                      value={systemConfig.language} 
                      onValueChange={(value) => setSystemConfig(prev => ({ ...prev, language: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="English">English</SelectItem>
                        <SelectItem value="Spanish">Spanish</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="German">German</SelectItem>
                        <SelectItem value="Japanese">Japanese</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <Select 
                      value={systemConfig.theme} 
                      onValueChange={(value) => setSystemConfig(prev => ({ ...prev, theme: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dark">Dark Theme</SelectItem>
                        <SelectItem value="light">Light Theme</SelectItem>
                        <SelectItem value="auto">Auto (System)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="performanceMode">Performance Mode</Label>
                    <Select 
                      value={systemConfig.performanceMode} 
                      onValueChange={(value) => setSystemConfig(prev => ({ ...prev, performanceMode: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="performance">High Performance</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                        <SelectItem value="efficiency">Power Efficient</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="autoUpdate">Automatic Updates</Label>
                      <Switch
                        id="autoUpdate"
                        checked={systemConfig.autoUpdate}
                        onCheckedChange={(checked) => setSystemConfig(prev => ({ ...prev, autoUpdate: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="debugMode">Debug Mode</Label>
                      <Switch
                        id="debugMode"
                        checked={systemConfig.debugMode}
                        onCheckedChange={(checked) => setSystemConfig(prev => ({ ...prev, debugMode: checked }))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end space-x-4">
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset to Defaults
                </Button>
                <Button onClick={handleSaveSystemConfig}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Configuration
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-red-400" />
                <span>Security Policies</span>
              </CardTitle>
              <CardDescription>Password policies, session management, and security enforcement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="passwordLength">Minimum Password Length</Label>
                    <div className="mt-2">
                      <Slider
                        value={[securityPolicies.passwordMinLength]}
                        onValueChange={(value) => setSecurityPolicies(prev => ({ ...prev, passwordMinLength: value[0] }))}
                        max={32}
                        min={8}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>8 characters</span>
                        <span>{securityPolicies.passwordMinLength} characters</span>
                        <span>32 characters</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                    <Input
                      id="passwordExpiry"
                      type="number"
                      value={securityPolicies.passwordExpiry}
                      onChange={(e) => setSecurityPolicies(prev => ({ ...prev, passwordExpiry: parseInt(e.target.value) }))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                    <Input
                      id="maxLoginAttempts"
                      type="number"
                      value={securityPolicies.maxLoginAttempts}
                      onChange={(e) => setSecurityPolicies(prev => ({ ...prev, maxLoginAttempts: parseInt(e.target.value) }))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={securityPolicies.sessionTimeout}
                      onChange={(e) => setSecurityPolicies(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="encryptionLevel">Encryption Level</Label>
                    <Select 
                      value={securityPolicies.encryptionLevel} 
                      onValueChange={(value) => setSecurityPolicies(prev => ({ ...prev, encryptionLevel: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AES-128">AES-128</SelectItem>
                        <SelectItem value="AES-256">AES-256</SelectItem>
                        <SelectItem value="ChaCha20">ChaCha20</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="mfaRequired">Require Multi-Factor Authentication</Label>
                      <Switch
                        id="mfaRequired"
                        checked={securityPolicies.mfaRequired}
                        onCheckedChange={(checked) => setSecurityPolicies(prev => ({ ...prev, mfaRequired: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="ssoEnabled">Enable Single Sign-On</Label>
                      <Switch
                        id="ssoEnabled"
                        checked={securityPolicies.ssoEnabled}
                        onCheckedChange={(checked) => setSecurityPolicies(prev => ({ ...prev, ssoEnabled: checked }))}
                      />
                    </div>
                  </div>

                  <Alert>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      Changes to security policies will affect all users on next login.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>

              <Separator />

              <div className="flex justify-end space-x-4">
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset to Defaults
                </Button>
                <Button onClick={handleSaveSecurityPolicies}>
                  <Save className="w-4 h-4 mr-2" />
                  Update Policies
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="border-orange-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-orange-400" />
                <span>Notification Settings</span>
              </CardTitle>
              <CardDescription>Configure alert channels and notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Alert Channels</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-400" />
                        <Label htmlFor="emailAlerts">Email Alerts</Label>
                      </div>
                      <Switch
                        id="emailAlerts"
                        checked={notifications.emailAlerts}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailAlerts: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-green-400" />
                        <Label htmlFor="slackIntegration">Slack Integration</Label>
                      </div>
                      <Switch
                        id="slackIntegration"
                        checked={notifications.slackIntegration}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, slackIntegration: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 text-purple-400" />
                        <Label htmlFor="smsAlerts">SMS Alerts</Label>
                      </div>
                      <Switch
                        id="smsAlerts"
                        checked={notifications.smsAlerts}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, smsAlerts: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-4 h-4 text-orange-400" />
                        <Label htmlFor="pushNotifications">Push Notifications</Label>
                      </div>
                      <Switch
                        id="pushNotifications"
                        checked={notifications.pushNotifications}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushNotifications: checked }))}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Alert Preferences</h3>
                  
                  <div>
                    <Label htmlFor="alertFrequency">Alert Frequency</Label>
                    <Select 
                      value={notifications.alertFrequency} 
                      onValueChange={(value) => setNotifications(prev => ({ ...prev, alertFrequency: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="every-5min">Every 5 minutes</SelectItem>
                        <SelectItem value="every-15min">Every 15 minutes</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily digest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="criticalOnly">Critical Alerts Only</Label>
                      <Switch
                        id="criticalOnly"
                        checked={notifications.criticalOnly}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, criticalOnly: checked }))}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="quietHours">Enable Quiet Hours (9 PM - 6 AM)</Label>
                      <Switch
                        id="quietHours"
                        checked={notifications.quietHours}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, quietHours: checked }))}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Integration Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emailServer">SMTP Server</Label>
                    <Input
                      id="emailServer"
                      placeholder="smtp.company.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="slackWebhook">Slack Webhook URL</Label>
                    <Input
                      id="slackWebhook"
                      placeholder="https://hooks.slack.com/services/..."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between">
                <Button onClick={handleTestNotification} variant="outline">
                  <Bell className="w-4 h-4 mr-2" />
                  Test Notifications
                </Button>
                <div className="flex space-x-4">
                  <Button variant="outline">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Reset to Defaults
                  </Button>
                  <Button onClick={handleSaveNotifications}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card className="border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Key className="w-5 h-5 text-purple-400" />
                <span>API Configuration & Keys</span>
              </CardTitle>
              <CardDescription>Manage API access, keys, and integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">API Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="apiEnabled">Enable API Access</Label>
                    <Switch
                      id="apiEnabled"
                      checked={apiConfig.apiEnabled}
                      onCheckedChange={(checked) => setApiConfig(prev => ({ ...prev, apiEnabled: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="rateLimitEnabled">Enable Rate Limiting</Label>
                    <Switch
                      id="rateLimitEnabled"
                      checked={apiConfig.rateLimitEnabled}
                      onCheckedChange={(checked) => setApiConfig(prev => ({ ...prev, rateLimitEnabled: checked }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="requestsPerMinute">Requests per Minute</Label>
                    <Input
                      id="requestsPerMinute"
                      type="number"
                      value={apiConfig.requestsPerMinute}
                      onChange={(e) => setApiConfig(prev => ({ ...prev, requestsPerMinute: parseInt(e.target.value) }))}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="apiVersion">API Version</Label>
                    <Select 
                      value={apiConfig.apiVersion} 
                      onValueChange={(value) => setApiConfig(prev => ({ ...prev, apiVersion: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="v1.0">v1.0 (Legacy)</SelectItem>
                        <SelectItem value="v2.0">v2.0</SelectItem>
                        <SelectItem value="v2.1">v2.1 (Current)</SelectItem>
                        <SelectItem value="v3.0">v3.0 (Beta)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Webhook Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="webhooksEnabled">Enable Webhooks</Label>
                    <Switch
                      id="webhooksEnabled"
                      checked={apiConfig.webhooksEnabled}
                      onCheckedChange={(checked) => setApiConfig(prev => ({ ...prev, webhooksEnabled: checked }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <Input
                      id="webhookUrl"
                      placeholder="https://api.yourcompany.com/webhooks"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="webhookSecret">Webhook Secret</Label>
                    <Input
                      id="webhookSecret"
                      type="password"
                      placeholder="Enter webhook secret"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">API Keys</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">Main API Key</h4>
                      <p className="text-sm text-muted-foreground">Full API access</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {showApiKeys.main ? apiKeys.main : '••••••••••••••••••••••••••••••••••••••••••••••••••'}
                        </code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleApiKeyVisibility('main')}
                        >
                          {showApiKeys.main ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(apiKeys.main, 'Main API Key')}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => generateNewApiKey('Main')}>
                        <RefreshCw className="w-4 h-4 mr-1" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">Webhook Secret</h4>
                      <p className="text-sm text-muted-foreground">Webhook authentication</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {showApiKeys.webhook ? apiKeys.webhook : '••••••••••••••••••••••••••••••••••••••••••••••••••'}
                        </code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleApiKeyVisibility('webhook')}
                        >
                          {showApiKeys.webhook ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(apiKeys.webhook, 'Webhook Secret')}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => generateNewApiKey('Webhook')}>
                        <RefreshCw className="w-4 h-4 mr-1" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <h4 className="font-medium">Integration Key</h4>
                      <p className="text-sm text-muted-foreground">Third-party integrations</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <code className="bg-muted px-2 py-1 rounded text-sm">
                          {showApiKeys.integration ? apiKeys.integration : '••••••••••••••••••••••••••••••••••••••••••••••••••'}
                        </code>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleApiKeyVisibility('integration')}
                        >
                          {showApiKeys.integration ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(apiKeys.integration, 'Integration Key')}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => generateNewApiKey('Integration')}>
                        <RefreshCw className="w-4 h-4 mr-1" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create New API Key
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-5 h-5 text-green-400" />
                <span>Backup & Recovery</span>
              </CardTitle>
              <CardDescription>Configure data backup, disaster recovery, and data retention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Backup Settings</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="autoBackup">Automatic Backups</Label>
                    <Switch
                      id="autoBackup"
                      checked={backupSettings.autoBackup}
                      onCheckedChange={(checked) => setBackupSettings(prev => ({ ...prev, autoBackup: checked }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="backupFrequency">Backup Frequency</Label>
                    <Select 
                      value={backupSettings.backupFrequency} 
                      onValueChange={(value) => setBackupSettings(prev => ({ ...prev, backupFrequency: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Every Hour</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="retentionDays">Retention Period (days)</Label>
                    <Input
                      id="retentionDays"
                      type="number"
                      value={backupSettings.retentionDays}
                      onChange={(e) => setBackupSettings(prev => ({ ...prev, retentionDays: parseInt(e.target.value) }))}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="cloudBackup">Cloud Backup</Label>
                    <Switch
                      id="cloudBackup"
                      checked={backupSettings.cloudBackup}
                      onCheckedChange={(checked) => setBackupSettings(prev => ({ ...prev, cloudBackup: checked }))}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Recovery Options</h3>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="encryptBackups">Encrypt Backups</Label>
                    <Switch
                      id="encryptBackups"
                      checked={backupSettings.encryptBackups}
                      onCheckedChange={(checked) => setBackupSettings(prev => ({ ...prev, encryptBackups: checked }))}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="compressionEnabled">Enable Compression</Label>
                    <Switch
                      id="compressionEnabled"
                      checked={backupSettings.compressionEnabled}
                      onCheckedChange={(checked) => setBackupSettings(prev => ({ ...prev, compressionEnabled: checked }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="backupLocation">Backup Location</Label>
                    <Select defaultValue="aws-s3">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">Local Storage</SelectItem>
                        <SelectItem value="aws-s3">AWS S3</SelectItem>
                        <SelectItem value="azure-blob">Azure Blob Storage</SelectItem>
                        <SelectItem value="gcp-storage">Google Cloud Storage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Backup Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-blue-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Last Backup</p>
                          <p className="font-medium">2 hours ago</p>
                        </div>
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Backup Size</p>
                          <p className="font-medium">2.4 GB</p>
                        </div>
                        <Database className="w-5 h-5 text-blue-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Next Backup</p>
                          <p className="font-medium">In 22 hours</p>
                        </div>
                        <Clock className="w-5 h-5 text-purple-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <Button onClick={handleBackupNow}>
                    <Database className="w-4 h-4 mr-2" />
                    Backup Now
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Backup
                  </Button>
                </div>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card className="border-cyan-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                <span>Audit & Compliance</span>
              </CardTitle>
              <CardDescription>Configure audit logging, compliance frameworks, and data retention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Audit Logging</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="userActivityLogs">User Activity Logs</Label>
                      <Switch id="userActivityLogs" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="systemEventLogs">System Event Logs</Label>
                      <Switch id="systemEventLogs" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="securityEventLogs">Security Event Logs</Label>
                      <Switch id="securityEventLogs" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="apiAccessLogs">API Access Logs</Label>
                      <Switch id="apiAccessLogs" defaultChecked />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="logRetention">Log Retention (days)</Label>
                    <Input
                      id="logRetention"
                      type="number"
                      defaultValue="365"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Compliance Frameworks</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="iso27001">ISO 27001</Label>
                      <Switch id="iso27001" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="soc2">SOC 2</Label>
                      <Switch id="soc2" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="pciDss">PCI DSS</Label>
                      <Switch id="pciDss" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="gdpr">GDPR</Label>
                      <Switch id="gdpr" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="hipaa">HIPAA</Label>
                      <Switch id="hipaa" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Compliance Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center justify-between p-3 border border-green-500/20 rounded-lg">
                    <div>
                      <p className="font-medium">ISO 27001</p>
                      <p className="text-sm text-green-400">Compliant</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-green-500/20 rounded-lg">
                    <div>
                      <p className="font-medium">SOC 2</p>
                      <p className="text-sm text-green-400">Compliant</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-yellow-500/20 rounded-lg">
                    <div>
                      <p className="font-medium">PCI DSS</p>
                      <p className="text-sm text-yellow-400">Review Required</p>
                    </div>
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-green-500/20 rounded-lg">
                    <div>
                      <p className="font-medium">GDPR</p>
                      <p className="text-sm text-green-400">Compliant</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Audit Report
                </Button>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Configuration
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="license" className="space-y-4">
          <Card className="border-yellow-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="w-5 h-5 text-yellow-400" />
                <span>License & Billing</span>
              </CardTitle>
              <CardDescription>License information, usage metrics, and billing details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">License Information</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">License Type:</span>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500">{licenseInfo.type}</Badge>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Licensed Users:</span>
                      <span>{licenseInfo.users} / {licenseInfo.maxUsers}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expiry Date:</span>
                      <span>{licenseInfo.expiryDate}</span>
                    </div>
                  </div>

                  <div>
                    <Label>User Usage</Label>
                    <Progress value={(licenseInfo.users / licenseInfo.maxUsers) * 100} className="mt-2" />
                    <p className="text-sm text-muted-foreground mt-1">
                      {licenseInfo.users} of {licenseInfo.maxUsers} users ({Math.round((licenseInfo.users / licenseInfo.maxUsers) * 100)}%)
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Included Features</h3>
                  
                  <div className="space-y-2">
                    {licenseInfo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Your license expires in 340 days. Contact sales to renew.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Usage Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="border-blue-500/20">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">2.4TB</p>
                        <p className="text-sm text-muted-foreground">Data Processed</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-500/20">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-400">1.2M</p>
                        <p className="text-sm text-muted-foreground">API Calls</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-500/20">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-400">99.9%</p>
                        <p className="text-sm text-muted-foreground">Uptime</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-orange-500/20">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-400">340</p>
                        <p className="text-sm text-muted-foreground">Days Remaining</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </Button>
                  <Button variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Update Billing
                  </Button>
                </div>
                <Button>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Upgrade License
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-4">
          <Card className="border-red-500/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-red-400" />
                <span>System Maintenance</span>
              </CardTitle>
              <CardDescription>Database maintenance, system updates, and performance optimization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Database Maintenance</h3>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Database className="w-4 h-4 mr-2" />
                      Optimize Database
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Rebuild Indexes
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Clean Old Logs
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Health Check
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">System Updates</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">Security Update v2.1.3</p>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <Button size="sm">Install</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <p className="font-medium">Feature Update v2.2.0</p>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <Button size="sm" variant="outline">Schedule</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-green-500/20 rounded-lg">
                      <div>
                        <p className="font-medium">System Core v2.1.2</p>
                        <p className="text-sm text-green-400">Up to date</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Performance Monitoring</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-blue-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">CPU Usage</p>
                          <p className="text-2xl font-bold text-blue-400">23%</p>
                        </div>
                        <Progress value={23} className="w-16 h-2" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-green-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Memory Usage</p>
                          <p className="text-2xl font-bold text-green-400">67%</p>
                        </div>
                        <Progress value={67} className="w-16 h-2" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-purple-500/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Disk Usage</p>
                          <p className="text-2xl font-bold text-purple-400">45%</p>
                        </div>
                        <Progress value={45} className="w-16 h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Maintenance Schedule</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="font-medium">Weekly Database Optimization</p>
                        <p className="text-sm text-muted-foreground">Every Sunday at 2:00 AM</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="font-medium">Daily Log Cleanup</p>
                        <p className="text-sm text-muted-foreground">Every day at 1:00 AM</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="font-medium">Security Scan</p>
                        <p className="text-sm text-muted-foreground">Every day at 3:00 AM</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Maintenance Log
                </Button>
                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}