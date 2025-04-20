
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const createClientSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'client-1',
    title: '2. Client Configuration',
    content: (
      <div className="space-y-4">
        <p>Configure Cisco Secure Client installation and settings:</p>
        
        <div className="mb-6">
          <h4 className="font-medium mb-3">Access Client Installation:</h4>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">1. Navigate to Connect &gt; End-User Connectivity</p>
            <p className="text-sm text-gray-600">2. Click "Cisco Secure Client" in top-right corner</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Download Components:</h4>
          <ul className="text-sm text-gray-600 ml-4 space-y-1">
            <li>• Full Cisco Secure Client installation package</li>
            <li>• Internet Security Profile</li>
            <li>• ThousandEyes Profile</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Profile Configuration:</h4>
          <Alert className="mb-4 bg-amber-50 border-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-700">
              Ensure exact filenames and folder paths to avoid installation errors
            </AlertDescription>
          </Alert>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">1. Unzip the downloaded package</p>
            <p className="text-sm text-gray-600 font-medium mt-3">2. Place configuration files:</p>
            <ul className="text-sm text-gray-600 ml-6 space-y-2">
              <li className="flex items-center">
                <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs mr-2">Profiles\Umbrella</span>
                - Copy OrgInfo.json here
              </li>
              <li className="flex items-center">
                <span className="bg-gray-100 px-2 py-1 rounded font-mono text-xs mr-2">Profiles\ThousandEyes</span>
                - Place ThousandEyes config file here
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            Required Modules
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
          <ul className="text-sm text-gray-600 ml-4 space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              DART
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              Umbrella
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              ThousandEyes
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Client Setup Execution:</h4>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-3">
              After configuring the profiles:
            </p>
            <ol className="text-sm text-gray-600 ml-4 list-decimal space-y-2">
              <li>Locate <code className="bg-gray-200 px-1 rounded">Secure Client Setup.exe</code> in the unzipped package</li>
              <li>Run the installer as administrator</li>
              <li>Follow the installation wizard:
                <ul className="ml-4 list-disc mt-1">
                  <li>Proceed through each step carefully</li>
                  <li>Pay attention to component selection</li>
                  <li>Ensure all required modules are selected</li>
                </ul>
              </li>
              <li>Complete the installation (no reboot required)</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
];
