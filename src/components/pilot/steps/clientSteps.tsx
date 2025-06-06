
import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import CardSection from "./CardSection";

export const createClientSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'client-1',
    title: '2. Client Configuration',
    content: (
      <div className="space-y-4">
        <CardSection title="Cisco Secure Client Installation">
          <p className="mb-4">Configure Cisco Secure Client installation and settings:</p>
          <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
            <li>Log in to the Secure Access Dashboard</li>
            <li>Navigate to Connect &gt; End-User Connectivity</li>
            <li>Click "Cisco Secure Client" in top-right corner</li>
          </ul>
          <div>
            <a
              href={isSubmitted ? `https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security` : '#'}
              className={`text-blue-600 hover:underline block mt-2 ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Cisco Secure Client
            </a>
            <p className="text-xs text-gray-700 mt-1">
              The Cisco Secure Client protects computers, on and off the network.
            </p>
          </div>
        </CardSection>
        <CardSection title="Download Required Components">
          <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
            <li>Full Cisco Secure Client installer package</li>
            <li>Internet Security Profile</li>
            <li>ThousandEyes Profile</li>
          </ul>
        </CardSection>
        <CardSection title="Configure Installation Files">
          <Alert className="mb-3 bg-amber-50 border-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-700">
              File paths and names must be exact to avoid installation errors
            </AlertDescription>
          </Alert>
          <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600">
            <li>Unzip the downloaded package</li>
            <li>Place configuration files:
              <ul className="ml-4 mt-1 space-y-2">
                <li className="flex items-center">
                  <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs mr-2">Profiles/Umbrella</span>
                  - Copy OrgInfo.json here
                </li>
                <li className="flex items-center">
                  <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs mr-2">Profiles/ThousandEyes</span>
                  - Place ThousandEyes config file here
                </li>
              </ul>
            </li>
          </ul>
        </CardSection>
        <CardSection title="Required Modules Selection">
          <h4 className="font-medium mb-2 flex items-center gap-2">
            Modules<span className="sr-only">:</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-blue-500" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="font-normal">
                    These modules enable:
                    <ul className="list-disc pl-4 mt-1">
                      <li>System diagnostics (DART)</li>
                      <li>DNS-layer security (Umbrella)</li>
                      <li>Experience monitoring (ThousandEyes)</li>
                    </ul>
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h4>
          <ul className="list-disc ml-6 space-y-1 text-sm text-gray-600">
            <li>DART (for diagnostics)</li>
            <li>Umbrella (for security)</li>
            <li>ThousandEyes (for monitoring)</li>
          </ul>
        </CardSection>
        <CardSection title="Run Installation">
          <ul className="list-disc ml-6 space-y-2 text-sm text-gray-600">
            <li>Install on the Test Computer</li>
            <li>On the test machine, extract the ZIP</li>
            <li>Open the extracted folder</li>
            <li>Right-click <code className="bg-gray-100 px-2 py-0.5 rounded">Secure Client Setup.exe</code> → select <strong>Run as Administrator</strong></li>
            <li>Follow the installation wizard</li>
            <li>Ensure the DART, Umbrella, and ThousandEyes modules are checked</li>
            <li>Config profiles will be auto-detected based on folder structure</li>
            <li>Complete installation</li>
            <li>No reboot required</li>
          </ul>
        </CardSection>
      </div>
    )
  }
];
