
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS, TEST_POLICY_URL, MALWARE_TEST_DOMAINS } from '../urlUtils';

export const createVerificationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'verify-1',
    title: '3. Connection Verification',
    content: (
      <div className="space-y-4">
        <p>Verify successful connection and policy enforcement:</p>
        <div className="space-y-2">
          <a 
            href={TEST_POLICY_URL}
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policy Test Page
          </a>
          <a 
            href={MALWARE_TEST_DOMAINS.example}
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Malware Test Domain 1
          </a>
          <a 
            href={MALWARE_TEST_DOMAINS.badguys}
            className="text-blue-600 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Malware Test Domain 2
          </a>
        </div>
      </div>
    )
  }
];
