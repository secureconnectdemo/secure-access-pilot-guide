
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createAccessSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'access-1',
    title: '1. Initial Access Setup',
    content: (
      <div className="space-y-4">
        <p>Set up initial access to Cisco Secure Access by visiting:</p>
        <div className="space-y-2">
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.overview) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Access Dashboard
          </a>
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.rootCertificate) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Root Certificate
          </a>
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.trafficSteering) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Traffic Steering Dashboard
          </a>
        </div>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Key Tasks:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Verify administrative access</li>
            <li>Review organization settings</li>
            <li>Download root certificate</li>
            <li>Configure traffic steering</li>
          </ul>
        </div>
      </div>
    )
  }
];
