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
          <h4 className="font-medium mb-3">Root Certificate Installation:</h4>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-700 mb-3">
              Root certificates are crucial for:
              <ul className="list-disc ml-5 mt-1">
                <li>Decrypting and inspecting network traffic</li>
                <li>Displaying block and warning notifications</li>
                <li>Enabling secure, transparent internet access</li>
              </ul>
            </p>
            
            <h5 className="font-medium mb-2">Installation Steps:</h5>
            <ol className="text-sm text-gray-600 ml-4 list-decimal space-y-2">
              <li>Open Microsoft Management Console (MMC):
                <ul className="ml-4 list-disc">
                  <li>Press Windows key + R</li>
                  <li>Type "mmc" and press Enter</li>
                </ul>
              </li>
              <li>Add Certificates Snap-in:
                <ul className="ml-4 list-disc">
                  <li>Go to File &gt; Add/Remove Snap-in</li>
                  <li>Select "Certificates"</li>
                  <li>Choose "Computer account"</li>
                  <li>Select "Local computer"</li>
                </ul>
              </li>
              <li>Navigate to Trusted Root Certification Authorities</li>
              <li>Right-click &gt; "All Tasks" &gt; "Import"</li>
              <li>Follow Certificate Import Wizard:
                <ul className="ml-4 list-disc">
                  <li>Browse to downloaded Cisco Secure Access root certificate</li>
                  <li>Select "Place all certificates in the following store"</li>
                  <li>Verify "Trusted Root Certification Authorities" store is selected</li>
                  <li>Complete the wizard</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
];
