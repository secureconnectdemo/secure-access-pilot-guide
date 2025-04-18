
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createClientSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'client-1',
    title: '2. Client Configuration',
    content: (
      <div className="space-y-4">
        <p>Configure client settings and deployment options:</p>
        <a 
          href={isSubmitted ? getUrl(orgNumber, PATHS.clientSetup) : '#'}
          className={`text-blue-600 hover:underline ${!isSubmitted && 'pointer-events-none opacity-50'}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Setup Configuration
        </a>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Required Actions:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Download client installer</li>
            <li>Configure client settings</li>
            <li>Test client deployment</li>
          </ul>
        </div>
      </div>
    )
  }
];
