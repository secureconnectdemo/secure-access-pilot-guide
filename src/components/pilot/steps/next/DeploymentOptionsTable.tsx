
import React from 'react';
import { Router, Server, Shield, Smartphone, FileBox } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const deploymentOptions = [
  {
    icon: Router,
    model: "IPsec Tunnels",
    whenToUse: "Connect on-prem data centers, branch offices, or private applications",
    features: ["Full Secure Access stack", "Full traffic forwarding", "BGP and ECMP routing"],
    devices: "Routers, Firewalls, AWS Transit Gateway"
  },
  {
    icon: Server,
    model: "Virtual Appliances",
    whenToUse: "DNS-based protection and IP/user attribution",
    features: ["DNS Security", "Source IP capture"],
    devices: "ESXi, KVM, Hyper-V, AWS EC2, Azure VM"
  },
  {
    icon: Shield,
    model: "Network Protection",
    whenToUse: "DNS security for non-Windows/macOS devices",
    features: ["DNS-layer security", "Content filtering", "Basic visibility"],
    devices: "IoT devices, printers, Linux machines, servers"
  },
  {
    icon: Smartphone,
    model: "Cisco Secure Client",
    whenToUse: "Mobile device security with DNS-level protection",
    features: ["DNS Security", "Policy enforcement"],
    devices: "iOS and Android devices"
  },
  {
    icon: FileBox,
    model: "PAC Files",
    whenToUse: "To enforce web security through browser-based traffic redirection without client installation",
    features: ["Web Security (SWG) only", "No DNS Security", "Browser-based protection via proxy"],
    devices: "Any device with a web browser (Windows, macOS, Linux, mobile devices)"
  },
  {
    icon: Shield,
    model: "Remote Access VPN (RAVPN)",
    whenToUse: "For secure, full-tunnel remote access to Secure Access with full inspection and enforcement",
    features: ["Full Secure Access stack", "Full traffic forwarding and policy support", "DNS Security, SWG, IPS, DLP, Experience Insights (where supported)"],
    devices: "All supported client platforms"
  }
];

const DeploymentOptionsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Model</TableHead>
          <TableHead>When to Use</TableHead>
          <TableHead>Key Features</TableHead>
          <TableHead>Supported Devices</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deploymentOptions.map((option, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <option.icon className="h-5 w-5 text-blue-600" />
                {option.model}
              </div>
            </TableCell>
            <TableCell>{option.whenToUse}</TableCell>
            <TableCell>
              <ul className="list-disc pl-4 space-y-1">
                {option.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </TableCell>
            <TableCell>{option.devices}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DeploymentOptionsTable;
