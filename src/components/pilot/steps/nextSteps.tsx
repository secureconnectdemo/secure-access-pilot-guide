
import React from 'react';
import { PilotStep } from '../types';
import { 
  DnsIcon, 
  WebProtection,
  AdvancedThreatProtection,
  HttpsDecryption,
  RemoteBrowserIsolation,
  CasbPolicies,
  FileSandboxing,
  BasicAcceptableUsePolicy,
  Scaling,
  ExpandingPolicy,
  EnhancingVisibility,
  IntegratingCiscoPlatforms,
  IpsecTunnels,
  VirtualAppliances,
  NetworkProtectionLayers,
  CiscoSecureClient
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
              { icon: DnsIcon, text: "DNS Security and Web Protection (Full Proxy)" },
              { icon: AdvancedThreatProtection, text: "Advanced Threat Protection use cases in production" },
              { icon: HttpsDecryption, text: "HTTPS Decryption with custom Do Not Decrypt lists" },
              { icon: RemoteBrowserIsolation, text: "Remote Browser Isolation, CASB policies, and File Sandboxing" },
              { icon: BasicAcceptableUsePolicy, text: "Basic Acceptable Use Policy enforcement" }
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
                { icon: Scaling, text: "Scaling to more users by rolling out the Secure Client at scale" },
                { icon: ExpandingPolicy, text: "Expanding policy enforcement to additional sites or user groups" },
                { icon: EnhancingVisibility, text: "Enhancing visibility with logging, reporting, and telemetry" },
                { icon: IntegratingCiscoPlatforms, text: "Integrating with Cisco platforms like Duo, ISE, and SD-WAN" }
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
              { icon: IpsecTunnels, text: "IPsec tunnels" },
              { icon: VirtualAppliances, text: "Virtual appliances" },
              { icon: NetworkProtectionLayers, text: "Network protection layers" },
              { icon: CiscoSecureClient, text: "Cisco Secure Client for mobile devices" }
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
