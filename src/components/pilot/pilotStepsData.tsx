import React from 'react';
import { Check, ArrowRight, Globe, ChartBar, Link, Network, Cloud, Smartphone } from 'lucide-react';
import CardSection from './steps/CardSection';

const dashboardLink = (orgNumber: string, path: string) =>
  `https://dashboard.umbrella.com/o/${orgNumber}/#/deployments/${path}`;

const reportingLink = (orgNumber: string, path: string) =>
  `https://reporting.umbrella.com/o/${orgNumber}/#/report/${path}`;

export const createPilotSteps = (orgNumber: string, isSubmitted: boolean) => {
  const steps = [
    {
      id: "1-dns-security",
      title: "1. DNS Security",
      content: (
        <CardSection title="Configure DNS Security">
          <div className="space-y-4">
            <p>
              Configure DNS security settings to protect your network from threats.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href={isSubmitted ? dashboardLink(orgNumber, 'dnssecurity') : '#'}
                  className={isSubmitted ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Navigate to DNS Security Settings
                </a>
              </li>
              <li>
                <a
                  href={isSubmitted ? reportingLink(orgNumber, 'activityvolume') : '#'}
                  className={isSubmitted ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View DNS Security Reports
                </a>
              </li>
            </ul>
          </div>
        </CardSection>
      ),
    },
    {
      id: "2-web-security",
      title: "2. Web Security",
      content: (
        <CardSection title="Configure Web Security">
          <div className="space-y-4">
            <p>
              Set up web security policies to control access to websites and applications.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href={isSubmitted ? dashboardLink(orgNumber, 'websecurity') : '#'}
                  className={isSubmitted ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Web Security Policies
                </a>
              </li>
              <li>
                <a
                  href={isSubmitted ? reportingLink(orgNumber, 'webtraffic') : '#'}
                  className={isSubmitted ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review Web Traffic Reports
                </a>
              </li>
            </ul>
          </div>
        </CardSection>
      ),
    },
    {
      id: "3-threat-intelligence",
      title: "3. Threat Intelligence",
      content: (
        <CardSection title="Explore Threat Intelligence">
          <div className="space-y-4">
            <p>
              Utilize threat intelligence to identify and mitigate potential risks.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href={isSubmitted ? dashboardLink(orgNumber, 'threatintelligence') : '#'}
                  className={isSubmitted ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to Threat Intelligence Dashboard
                </a>
              </li>
              <li>
                <a
                  href={isSubmitted ? reportingLink(orgNumber, 'securityevents') : '#'}
                  className={isSubmitted ? "text-blue-500 hover:underline" : "text-gray-400 cursor-not-allowed"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Analyze Security Events
                </a>
              </li>
            </ul>
          </div>
        </CardSection>
      ),
    },
    {
      id: "whats-next",
      title: "What's Next: Continued Adoption & Optimization",
      content: (
        <CardSection title="Congratulations on completing your Secure Access Pilot!">
          <div className="space-y-6">
            <div>
              <p className="mb-4">You've successfully deployed foundational and advanced features, including:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>DNS Security and Web Protection (Full Proxy)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Advanced Threat Protection use cases in production</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>HTTPS Decryption with custom Do Not Decrypt lists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Remote Browser Isolation, CASB policies, and File Sandboxing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Basic Acceptable Use Policy enforcement</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-4">With these core elements in place, you're now ready to focus on:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-blue-500" />
                  <span>Scaling to more users by rolling out the Secure Client at scale</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span>Expanding policy enforcement to additional sites or user groups</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChartBar className="h-5 w-5 text-blue-500" />
                  <span>Enhancing visibility with logging, reporting, and telemetry</span>
                </li>
                <li className="flex items-center gap-2">
                  <Link className="h-5 w-5 text-blue-500" />
                  <span>Integrating with Cisco platforms like Duo, ISE, and SD-WAN</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-4">Exploring alternative deployment models such as:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-gray-600" />
                  <span>IPsec tunnels</span>
                </li>
                <li className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-gray-600" />
                  <span>Virtual appliances</span>
                </li>
                <li className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-gray-600" />
                  <span>Network protection layers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-gray-600" />
                  <span>Cisco Secure Client for mobile devices</span>
                </li>
              </ul>
            </div>
          </div>
        </CardSection>
      )
    }
  ];

  return steps;
};
