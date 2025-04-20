
import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: '5. Advanced Configuration',
    content: (
      <div className="space-y-5">
        <ul className="list-disc ml-6 text-[15px] space-y-4">
          <li>
            {/* Removed recommendation about early threat awareness and incident response validation as requested */}
          </li>
          <li>
            <span className="text-gray-500">See the previous phase for core configuration tasks: SWG, HTTPS Inspection, and Do Not Decrypt List settings.</span>
          </li>
          <li>
            <span className="font-semibold">Enable File Sandboxing:</span>
            <div>
              {isSubmitted ? (
                <a
                  href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/securityprofiles`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Navigate to Security Profiles – Internet Access (Open Dashboard)
                </a>
              ) : (
                <span className="text-gray-400">(Dashboard link locked)</span>
              )}
            </div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Go to: Security Profiles – Internet Access</li>
              <li>Enable file sandboxing to analyze unknown or suspicious files in a secure environment.</li>
            </ul>
          </li>
        </ul>
      </div>
    ),
  }
];
