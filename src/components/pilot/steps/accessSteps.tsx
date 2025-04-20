
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
            <ol className="text-sm text-gray-600 ml-4 space-y-3">
              <li>
                1. Access Configuration Page
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Navigate to Traffic Steering Settings:
                    <a 
                      href={isSubmitted ? getUrl(orgNumber, PATHS.trafficSteering) : '#'}
                      className={`text-blue-600 hover:underline ml-2 inline-block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Settings
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                2. Configure Bypass Domains
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Add internal domains (e.g., *.corp.local)</li>
                  <li>• Include private IP ranges (e.g., 192.168.0.0/16)</li>
                  <li>• Add trusted cloud services if needed</li>
                </ul>
              </li>
              <li>
                3. Set Resource Exemptions
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Configure internal applications</li>
                  <li>• Add specific URLs or IP addresses</li>
                  <li>• Set exclusion rules for sensitive systems</li>
                </ul>
              </li>
              <li>
                4. Validate Configuration
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Test access to internal resources</li>
                  <li>• Verify bypass rules are working</li>
                  <li>• Confirm no disruption to local services</li>
                </ul>
              </li>
            </ol>
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

            <p className="text-sm text-gray-700 mt-3">
              Root certificates are crucial for:
              <ul className="list-disc ml-5 mt-1">
                <li>Decrypting and inspecting network traffic</li>
                <li>Displaying block and warning notifications</li>
                <li>Enabling secure, transparent internet access</li>
              </ul>
            </p>
          
            <div className="mt-4 mb-4">
              <video 
                src="https://github.com/secureconnectdemo/images-and-giff/raw/refs/heads/main/cert.mp4" 
                controls 
                loop 
                autoPlay
                muted
                className="w-1/2 mx-auto rounded-md shadow-sm"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
              
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
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
