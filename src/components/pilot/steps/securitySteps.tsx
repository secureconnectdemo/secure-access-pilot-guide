import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export const createSecuritySteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'security-1',
    title: '4. Core Security Configuration',
    content: (
      <div className="space-y-6">
        {/* SWG Section */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center">
            1️⃣ Enable Secure Web Gateway (SWG)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Info className="inline-block h-4 w-4 text-blue-400 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>What It Does:</b>
                  <p>
                    Inspects HTTP/HTTPS traffic to enforce acceptable use policies and detect malicious activity.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          <ol className="list-decimal ml-6 space-y-1 text-sm text-gray-700">
            <li>
              Go to <span className="font-medium">Dashboard &gt; DNS and Web Security</span>{" "}
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
        </div>

        {/* HTTPS Inspection Section */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center">
            2️⃣ Enable HTTPS Inspection
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Info className="inline-block h-4 w-4 text-blue-400 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>What It Does:</b>
                  <p>
                    Decrypts and scans HTTPS traffic for threats and policy violations.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          <ol className="list-decimal ml-6 space-y-1 text-sm text-gray-700">
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
        </div>

        {/* Do Not Decrypt List Section */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center">
            3️⃣ Use System-Provided Do Not Decrypt List
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Info className="inline-block h-4 w-4 text-blue-400 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>What It Does:</b>
                  <p>
                    Automatically skips decryption for sensitive destinations like banking and healthcare sites.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          <ol className="list-decimal ml-6 space-y-1 text-sm text-gray-700">
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
            <li>Confirm that the <span className="font-medium">System-provided Do Not Decrypt List</span> is selected.</li>
            <li>
              This includes trusted categories (e.g., Finance, Healthcare, Microsoft services).
              <br />
              <span className="text-gray-500">No manual entries are needed.</span>
            </li>
            <li>
              Save if changes were made.
            </li>
          </ol>
        </div>
      </div>
    )
  }
];
