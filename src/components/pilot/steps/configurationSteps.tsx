
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: '5. Advanced Configuration',
    content: (
      <div className="space-y-4">
        <p>Complete advanced configuration settings:</p>
        <div className="space-y-2">
          <a 
            href={isSubmitted ? `https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security` : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Traffic Steering
          </a>
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.activityLogging) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Activity Logging
          </a>
        </div>
      </div>
    )
  }
];
