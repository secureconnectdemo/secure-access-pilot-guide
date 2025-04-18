
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';

export const createVerificationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'verify-1',
    title: '3. Connection Verification and Reporting',
    content: (
      <div className="space-y-4">
        <div className="mb-6">
          <h4 className="font-medium mb-3">Activity Monitoring:</h4>
          <div className="space-y-2">
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.activityLogging) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Activity Search Dashboard
            </a>
            <p className="text-sm text-gray-600 ml-4">• Verify traffic recording and policy actions</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Threat Activity Reports:</h4>
          <div className="space-y-2">
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.scheduledReports) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Reports
            </a>
            <ul className="text-sm text-gray-600 ml-4 space-y-1">
              <li>• Create daily threat reports (9:00 AM recommended)</li>
              <li>• Include all threats, even if not blocked</li>
              <li>• Set up for early threat awareness</li>
            </ul>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-3">Run and Review Reports:</h4>
          <ul className="text-sm text-gray-600 ml-4 space-y-1">
            <li>• Review built-in dashboards</li>
            <li>• Analyze threat, traffic, and user behavior</li>
            <li>• Share insights with team members</li>
          </ul>
        </div>
      </div>
    )
  }
];
