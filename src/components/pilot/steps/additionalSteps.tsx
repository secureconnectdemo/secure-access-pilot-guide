
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createAdditionalSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'additional-1',
    title: '6. Monitoring and Reporting',
    content: (
      <div className="space-y-4">
        <p>Set up monitoring and reporting tools:</p>
        <div className="space-y-2">
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.scheduledReports) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Scheduled Reports
          </a>
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.policyDashboard) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Policy Dashboard
          </a>
        </div>
        <div className="mt-4">
          <h4 className="font-medium mb-2">Monitoring Setup:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Configure alerts</li>
            <li>Set up scheduled reports</li>
            <li>Review dashboards</li>
          </ul>
        </div>
      </div>
    )
  }
];
