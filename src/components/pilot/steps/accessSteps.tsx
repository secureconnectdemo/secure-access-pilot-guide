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
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700 mb-3">
                Root certificates are crucial for:
                <ul className="list-disc ml-5 mt-1">
                  <li>Decrypting and inspecting network traffic</li>
                  <li>Displaying block and warning notifications</li>
                  <li>Enabling secure, transparent internet access</li>
                </ul>
              </p>
              
              <div className="mb-4">
                <video 
                  src="https://raw.githubusercontent.com/secureconnectdemo/images-and-giff/refs/heads/main/Cert.mp4" 
                  controls 
                  loop 
                  autoPlay
                  muted
                  className="w-3/4 mx-auto rounded-lg shadow-md"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
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
      </div>
    )
  }
];
