
import React from "react";
import { PilotStep } from "../types";
import StepBlock from "./StepBlock";

export const createSecuritySteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: "security-1",
    title: (
      <span className="text-lg font-bold text-gray-800 border-l-4 border-green-300 pl-2">
        4. Core Security Configuration
      </span>
    ),
    content: (
      <div className="pt-4 pb-2 px-2 bg-white rounded">
        <StepBlock
          number={1}
          title="Enable Secure Web Gateway (SWG)"
          info={
            <>
              <b>What It Does:</b>
              <p>Inspects HTTP/HTTPS traffic to enforce acceptable use policies and detect malicious activity.</p>
            </>
          }
        >
          <ol className="list-decimal ml-5 space-y-1 text-gray-700 text-sm">
            <li>
              Go to <span className="font-medium">Dashboard &gt; DNS and Web Security</span>
              {isSubmitted ? (
                <a
                  href={`https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  (Open Dashboard)
                </a>
              ) : (
                <span className="text-gray-400 ml-1">(Dashboard link locked)</span>
              )}
            </li>
            <li>Locate the <span className="font-medium">Secure Web Gateway (SWG)</span> setting.</li>
            <li>Click <span className="font-medium">Enable</span>.</li>
            <li>Select the <span className="font-medium">System-provided Security Profile</span> when prompted.</li>
            <li>Click <span className="font-medium">Apply</span> to activate.</li>
          </ol>
        </StepBlock>

        <StepBlock
          number={2}
          title="Enable HTTPS Inspection"
          info={
            <>
              <b>What It Does:</b>
              <p>Decrypts and scans HTTPS traffic for threats and policy violations.</p>
            </>
          }
        >
          <ol className="list-decimal ml-5 space-y-1 text-gray-700 text-sm">
            <li>
              Navigate to <span className="font-medium">Security Profiles &gt; Internet Access</span>
              {isSubmitted ? (
                <a
                  href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/securityprofiles`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  (Open Dashboard)
                </a>
              ) : (
                <span className="text-gray-400 ml-1">(Dashboard link locked)</span>
              )}
            </li>
            <li>Find the <span className="font-medium">HTTPS Inspection</span> section.</li>
            <li>Toggle the switch to <span className="font-medium">Enable</span>.</li>
            <li>Choose <span className="font-medium">System-provided Security Profile</span>.</li>
            <li>Save and apply.</li>
          </ol>
        </StepBlock>

        <StepBlock
          number={3}
          title="Use System-Provided Do Not Decrypt List"
          info={
            <>
              <b>What It Does:</b>
              <p>
                Automatically skips decryption for sensitive destinations like banking and healthcare sites.
              </p>
            </>
          }
        >
          <ol className="list-decimal ml-5 space-y-1 text-gray-700 text-sm">
            <li>
              Go to <span className="font-medium">Global Settings &gt; Do Not Decrypt List</span>
              {isSubmitted ? (
                <a
                  href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/dontdecryptlists`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline ml-1"
                >
                  (Open Dashboard)
                </a>
              ) : (
                <span className="text-gray-400 ml-1">(Dashboard link locked)</span>
              )}
            </li>
            <li>
              Confirm that the <span className="font-medium">System-provided Do Not Decrypt List</span> is selected.
            </li>
            <li>
              This includes trusted categories (e.g., Finance, Healthcare, Microsoft services).
              <br />
              <span className="text-gray-500">No manual entries are needed.</span>
            </li>
            <li>Save if changes were made.</li>
          </ol>
        </StepBlock>
      </div>
    ),
  },
];
