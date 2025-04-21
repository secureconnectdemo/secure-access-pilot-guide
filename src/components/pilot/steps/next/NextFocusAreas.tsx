
import React from 'react';
import { Users, ShieldCheck, Activity, Network } from 'lucide-react';
import CardSection from '../CardSection';

const focusItems = [
  {
    icon: Users,
    title: "Scale Secure Access to More Users and Environments",
    description: "Roll out the Secure Client to additional users and devices across the organization"
  },
  {
    icon: ShieldCheck,
    title: "Activate Advanced Security Capabilities",
    description: "Enable advanced protections like DLP, IPS, and HTTPS Decryption"
  },
  {
    icon: Activity,
    title: "Expand Visibility and Control",
    description: "Enhance visibility with logging, reporting, and telemetry capabilities"
  },
  {
    icon: Network,
    title: "Integrate with the Cisco Security Ecosystem",
    description: "Connect Secure Access with platforms like Duo, ISE, XDR, and Catalyst SD-WAN"
  }
];

const NextFocusAreas = () => {
  return (
    <CardSection title="Next Focus Areas">
      <div className="space-y-6">
        <p className="text-gray-700 mb-4">
          Now that you've completed your pilot, the next step is to scale your deployment and extend protection across your organization.
        </p>
        <ul className="space-y-6">
          {focusItems.map((item, index) => (
            <li key={index} className="space-y-2">
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="font-medium text-gray-900">{item.title}</span>
              </div>
              <p className="text-gray-600 ml-8">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </CardSection>
  );
};

export default NextFocusAreas;
