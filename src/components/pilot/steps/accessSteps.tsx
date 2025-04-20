
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
          
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.rootCertificate) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Root Certificate
          </a>
        </div>
      </div>
    )
  }
];
