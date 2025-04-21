
import React from 'react';
import { PilotStep } from '../types';
import { 
  Globe, 
  Shield, 
  Activity,
  FileText, 
  ShieldCheck,
  Layers,
  FileBox,
  Server,
  Network,
  Smartphone,
  Database,
  Router
} from 'lucide-react';
import CardSection from './CardSection';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

export const createNextSteps = (): PilotStep[] => [
  {
    id: 'whats-next',
    title: "What's Next: Continued Adoption & Optimization",
    content: (
      <div className="space-y-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Congratulations on completing your Secure Access Pilot! 🎉
          </h3>
          <p className="text-green-700 font-medium mb-4">
            You've successfully deployed foundational and advanced features, including:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { icon: Globe, text: "DNS Security and Web Protection (Full Proxy)" },
              { icon: Activity, text: "Advanced Threat Protection use cases in production" },
              { icon: Shield, text: "HTTPS Decryption with custom Do Not Decrypt lists" },
              { icon: ShieldCheck, text: "Remote Browser Isolation, CASB policies, and File Sandboxing" },
              { icon: FileText, text: "Basic Acceptable Use Policy enforcement" }
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-green-700">
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <CardSection title="Next Focus Areas">
          <div className="space-y-6">
            <ul className="space-y-4">
              {[
                { icon: Layers, text: "Scaling to more users by rolling out the Secure Client at scale" },
                { icon: Shield, text: "Expanding policy enforcement to additional sites or user groups" },
                { icon: Activity, text: "Enhancing visibility with logging, reporting, and telemetry" },
                { icon: Globe, text: "Integrating with Cisco platforms like Duo, ISE, and XDR, Catalyst SD-WAN" }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardSection>

        <CardSection title="Alternative Deployment Models">
          <div className="space-y-4">
            <p className="text-gray-700 mb-4">
              Cisco Secure Access supports multiple deployment models to scale coverage across diverse environments and provide appropriate protection based on device type, use case, and security requirements.
            </p>
            
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
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Router className="h-5 w-5 text-blue-600" />
                      IPsec Tunnels
                    </div>
                  </TableCell>
                  <TableCell>Connect on-prem data centers, branch offices, or private applications</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Full Secure Access stack</li>
                      <li>Full traffic forwarding</li>
                      <li>BGP and ECMP routing</li>
                    </ul>
                  </TableCell>
                  <TableCell>Routers, Firewalls, AWS Transit Gateway</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Server className="h-5 w-5 text-blue-600" />
                      Virtual Appliances
                    </div>
                  </TableCell>
                  <TableCell>DNS-based protection and IP/user attribution</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>DNS Security</li>
                      <li>Source IP capture</li>
                      <li>Custom routing</li>
                    </ul>
                  </TableCell>
                  <TableCell>ESXi, KVM, Hyper-V, AWS EC2, Azure VM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Network Protection
                    </div>
                  </TableCell>
                  <TableCell>DNS security for non-Windows/macOS devices</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>DNS-layer security</li>
                      <li>Content filtering</li>
                      <li>Basic visibility</li>
                    </ul>
                  </TableCell>
                  <TableCell>IoT devices, printers, Linux machines, servers</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                      Cisco Secure Client
                    </div>
                  </TableCell>
                  <TableCell>Mobile device security with DNS-level protection</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>DNS Security</li>
                      <li>Policy enforcement</li>
                    </ul>
                  </TableCell>
                  <TableCell>iOS and Android devices</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                These deployment options can be mixed and matched to meet operational, geographic, and user-specific needs while maintaining consistent security policies across all environments.
              </p>
            </div>
          </div>
        </CardSection>
      </div>
    )
  }
];
