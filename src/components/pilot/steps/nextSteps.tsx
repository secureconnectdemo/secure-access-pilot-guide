
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
  Check
} from 'lucide-react';
import CardSection from './CardSection';

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Shield, text: "IPsec tunnels" },
              { icon: Layers, text: "Virtual appliances" },
              { icon: ShieldCheck, text: "Network protection layers" },
              { icon: FileBox, text: "Cisco Secure Client for mobile devices" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <item.icon className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </CardSection>
      </div>
    )
  }
];
