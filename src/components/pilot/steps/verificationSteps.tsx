import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS, TEST_POLICY_URL, MALWARE_TEST_DOMAINS } from '../urlUtils';
import CardSection from "./CardSection";

export const createVerificationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'verify-1',
    title: '3. Connection Verification and Reporting',
    content: (
      <div className="space-y-5">
        <CardSection title="Connection Testing">
          <ul className="ml-5 list-disc text-sm text-gray-700 space-y-2">
            <li>Verify that Secure Access is working correctly:</li>
            <li>
              <span className="font-medium">Visit the Policy Test Page</span>
              <div>
                <a 
                  href={TEST_POLICY_URL}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {TEST_POLICY_URL}
                </a>
              </div>
              <div className="ml-1 text-xs text-gray-500">Confirms policy enforcement and the Secure Access tunnel is active.</div>
            </li>
          </ul>
        </CardSection>
        <CardSection title="Test Traffic Generation">
          <ul className="ml-5 list-disc text-sm text-gray-700 space-y-2">
            <li>Use safe, simulated test domains to trigger threat detections:</li>
            <li>
              <span className="font-medium">Example Malware Domain</span>
              <div>
                <a 
                  href={MALWARE_TEST_DOMAINS.example}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {MALWARE_TEST_DOMAINS.example}
                </a>
              </div>
            </li>
            <li>
              <span className="font-medium">Internet Bad Guys Test</span>
              <div>
                <a
                  href={MALWARE_TEST_DOMAINS.badguys}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {MALWARE_TEST_DOMAINS.badguys}
                </a>
              </div>
              <div className="ml-1 text-xs text-gray-500">This domain is flagged by Secure Access to validate threat protection.</div>
            </li>
          </ul>
        </CardSection>
        <CardSection title="Activity Monitoring">
          <ul className="ml-5 list-disc text-sm text-gray-700 space-y-1">
            <li>
              Navigate to{' '}
              <span className="font-medium">Monitor &gt; Reports &gt; Activity Search.</span>{' '}
              <a
                href={
                  isSubmitted
                    ? `https://dashboard.sse.cisco.com/org/${orgNumber}/reports/activity`
                    : '#'
                }
                className={`text-blue-600 hover:underline ${!isSubmitted && 'pointer-events-none opacity-50'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                (Open in Dashboard)
              </a>
            </li>
            <li>Confirm that test traffic is being logged.</li>
            <li>Check if policy actions (e.g., block, warn, allow) are applied correctly.</li>
            <li>Validate which rules triggered the response.</li>
          </ul>
        </CardSection>
        <CardSection title="Threat Activity Reporting">
          <div className="mb-1 ml-1">
            <span className="font-medium">Automate threat visibility and share updates with your team:</span>
          </div>
          <ul className="ml-5 list-disc text-sm text-gray-700 space-y-1">
            <li>
              <span className="font-medium">Schedule Daily Reports:</span>
              <ul className="ml-5 list-disc text-xs text-gray-600 space-y-1">
                <li>Go to Secure &gt; Reports &gt; Threat Activity</li>
                <li>Click Schedule Report</li>
                <li>Set frequency: Daily at 9:00 AM (recommended)</li>
                <li>
                  Include:
                  <ul className="ml-5 list-disc">
                    <li>All threat types</li>
                    <li>Blocked and allowed events (for full visibility)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Run & Review Reports:</span> Access the{' '}
              <a
                href={isSubmitted ? getUrl(orgNumber, PATHS.scheduledReports) : '#'}
                className={`text-blue-600 hover:underline ${!isSubmitted && 'pointer-events-none opacity-50'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Threat Reports Dashboard
              </a>
              <ul className="ml-5 list-disc text-xs text-gray-600 mt-1 space-y-1">
                <li>Review Threat Types (Malware, Phishing, etc.)</li>
                <li>Analyze Traffic Patterns (bytes transferred, destinations)</li>
                <li>Monitor User behavior trends (frequent violators, risky activity)</li>
              </ul>
            </li>
            <li>Share key insights with internal security or IT teams.</li>
          </ul>
        </CardSection>
      </div>
    )
  }
];
