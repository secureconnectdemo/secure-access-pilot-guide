
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

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
          <h4 className="font-medium mb-3">Installation Setup:</h4>
          <div className="space-y-2">
            <p className="text-sm text-gray-600 font-medium">Profile Configuration:</p>
            <ul className="text-sm text-gray-600 ml-4 space-y-1">
              <li>• Unzip the package</li>
              <li>• Place Umbrella OrgInfo.json in Profiles\Umbrella</li>
              <li>• Place ThousandEyes config in Profiles\ThousandEyes</li>
            </ul>
            
            <p className="text-sm text-gray-600 font-medium mt-3">Required Modules:</p>
            <ul className="text-sm text-gray-600 ml-4 space-y-1">
              <li>• ✅ DART</li>
              <li>• ✅ Umbrella</li>
              <li>• ✅ ThousandEyes</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Client Setup Execution:</h4>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-3">
              After downloading the Secure Client package:
            </p>
            <ol className="text-sm text-gray-600 ml-4 list-decimal space-y-2">
              <li>Locate the downloaded Secure Client package</li>
              <li>Run the <code className="bg-gray-200 px-1 rounded">Secure Client Setup.exe</code></li>
              <li>Follow the installation wizard carefully
                <ul className="ml-4 list-disc">
                  <li>The wizard will guide you through installing the required agents</li>
                  <li>Pay attention to each configuration step</li>
                  <li>Ensure all necessary components are selected</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
];
