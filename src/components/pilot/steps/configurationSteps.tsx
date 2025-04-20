
import React from 'react';
import { PilotStep } from '../types';

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: '5. Advanced Configuration',
    content: (
      <div className="space-y-5">
        <ul className="list-disc ml-6 text-[15px] space-y-4">
          <li>
            <span className="font-medium">Recommended for early threat awareness and incident response validation.</span>
          </li>
          <li>
            <span className="font-semibold">Enable Secure Web Gateway (SWG):</span>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>
                Navigate to <span className="font-medium">DNS and Web Security</span>&nbsp;
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400">(Dashboard link locked)</span>
                )}
              </li>
              <li>Activate SWG to inspect and enforce policies on HTTP/HTTPS traffic.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Enable HTTPS Inspection:</span>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>
                Navigate to <span className="font-medium">Security Profiles – Internet Access</span>&nbsp;
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/securityprofiles`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400">(Dashboard link locked)</span>
                )}
              </li>
              <li>Enable HTTPS inspection and apply a default or custom security profile.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Configure Do Not Decrypt List:</span>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>
                <span>Navigate to Do Not Decrypt List Configuration&nbsp;</span>
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/dontdecryptlists`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400">(Dashboard link locked)</span>
                )}
              </li>
              <li>Add sensitive destinations (domains or categories) that must not be decrypted (e.g., banking, healthcare sites).</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Enable File Sandboxing:</span>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>
                <span>Navigate to Security Profiles – Internet Access&nbsp;</span>
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/securityprofiles`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400">(Dashboard link locked)</span>
                )}
              </li>
              <li>Enable file sandboxing to analyze unknown or suspicious files in a secure environment.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  }
];
