
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
            <span className="font-medium">Recommended for early threat awareness and incident response validation.</span>
          </li>

          <li>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Enable Secure Web Gateway (SWG):</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span>
                      <Info className="inline-block h-4 w-4 text-blue-400 cursor-pointer" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs" side="right">
                    <div>
                      <b>About Internet Security Bypass</b><br />
                      Internet security bypass is supported on user devices with the Cisco Secure Client (formerly known as AnyConnect) deployed or browsers in the environment with a configured Secure Access or custom PAC file. User devices must have the Cisco Secure Client deployed with the Umbrella Roaming Security module.
                      <br /><br />
                      If you bypass internet security in Secure Access, DNS requests for the destinations bypass the Secure Access DNS servers and Secure Web Gateway. The organization's local DNS servers resolve the DNS requests.<br />
                      If you bypass the Secure Web Gateway in Secure Access, Secure Access DNS servers resolve the DNS requests.
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>
              {isSubmitted ? (
                <a
                  href={`https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Navigate to DNS and Web Security (Open Dashboard)
                </a>
              ) : (
                <span className="text-gray-400">(Dashboard link locked)</span>
              )}
            </div>
            <div className="ml-5 mt-1">
              Activate SWG to inspect and enforce policies on HTTP/HTTPS traffic.
            </div>
          </li>

          <li>
            <span className="font-semibold">Enable HTTPS Inspection:</span>
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
              <li>Enable HTTPS inspection and apply a default or custom security profile.</li>
            </ul>
          </li>

          <li>
            <span className="font-semibold">Configure Do Not Decrypt List:</span>
            <div>
              {isSubmitted ? (
                <a
                  href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/dontdecryptlists`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Navigate to Secure and Do Not Decrypt List (Open Dashboard)
                </a>
              ) : (
                <span className="text-gray-400">(Dashboard link locked)</span>
              )}
            </div>
            <ul className="list-disc ml-5 mt-1 space-y-1">
              <li>Go to: Do Not Decrypt List Configuration</li>
              <li>Add sensitive destinations (domains or categories) that must not be decrypted (e.g., banking, healthcare sites).</li>
            </ul>
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
