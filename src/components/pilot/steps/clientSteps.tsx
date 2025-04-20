
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
            <p className="text-sm text-gray-600">1. Navigate to Connect > End-User Connectivity</p>
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
          <h4 className="font-medium mb-3">Verification Links:</h4>
          <div className="space-y-2">
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.clientSetup) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Setup Configuration
            </a>
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.roamingDevices) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify Roaming Device Registration
            </a>
          </div>
        </div>
      </div>
    )
  }
];
