
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createSecuritySteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'security-1',
    title: '4. Security Configuration',
    content: (
      <div className="space-y-4">
        <p>Set up security profiles and policies:</p>
        <div className="space-y-2">
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.securityProfiles) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Security Profiles
          </a>
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.dontDecryptLists) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Don't Decrypt Lists
          </a>
        </div>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Configuration Steps:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Define security profiles</li>
            <li>Configure exemption lists</li>
            <li>Set up decryption policies</li>
          </ul>
        </div>
      </div>
    )
  }
];
