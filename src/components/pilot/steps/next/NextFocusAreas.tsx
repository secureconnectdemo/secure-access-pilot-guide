
import React from 'react';
import { Layers, Shield, Activity, Globe } from 'lucide-react';
import CardSection from '../CardSection';

const focusItems = [
  { icon: Layers, text: "Scaling to more users by rolling out the Secure Client at scale" },
  { icon: Shield, text: "Expanding policy enforcement to additional sites or user groups" },
  { icon: Activity, text: "Enhancing visibility with logging, reporting, and telemetry" },
  { icon: Globe, text: "Integrating with Cisco platforms like Duo, ISE, and XDR, Catalyst SD-WAN" }
];

const NextFocusAreas = () => {
  return (
    <CardSection title="Next Focus Areas">
      <div className="space-y-6">
        <ul className="space-y-4">
          {focusItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <item.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardSection>
  );
};

export default NextFocusAreas;
