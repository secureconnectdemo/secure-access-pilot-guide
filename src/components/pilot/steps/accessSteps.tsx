
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createAccessSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'access-1',
    title: '1. Initial Access Setup',
    content: (
      <div className="space-y-4">
        <p>Set up initial access to Cisco Secure Access:</p>
        <div className="space-y-2">
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.overview) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Access Dashboard
          </a>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Traffic Steering Configuration:</h4>
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.trafficSteering) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Traffic Steering Settings
            </a>
            <ul className="text-sm text-gray-600 ml-4 space-y-1">
              <li>• Add private/local domains to bypass Secure Access</li>
              <li>• Configure internal resources exemptions</li>
              <li>• Verify bypass behavior for local domains</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Root Certificate Installation:</h4>
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.rootCertificate) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Root Certificate
            </a>
            
            <div className="mt-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="font-medium mb-2">Installation Steps using MMC:</p>
              <ol className="text-sm text-gray-600 ml-4 list-decimal space-y-2">
                <li>Open Microsoft Management Console (run "mmc.exe")</li>
                <li>Go to File &gt; Add/Remove Snap-in</li>
                <li>Select "Certificates" and click "Add"</li>
                <li>Choose "Computer account" &gt; "Local computer" &gt; "Finish"</li>
                <li>Navigate to "Certificates (Local Computer) &gt; Trusted Root Certification Authorities &gt; Certificates"</li>
                <li>Right-click &gt; "All Tasks" &gt; "Import"</li>
                <li>Follow the Certificate Import Wizard:
                  <ul className="ml-4 mt-1 list-disc">
                    <li>Browse to the downloaded certificate</li>
                    <li>Select "Place all certificates in the following store"</li>
                    <li>Verify "Trusted Root Certification Authorities" is selected</li>
                    <li>Complete the wizard</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
];
