
import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export const createSecuritySteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'security-1',
    title: '4. Configure DNS and Web Security Settings',
    content: (
      <div className="space-y-4">
        <p>Configure DNS and web security settings for the Cisco Secure Client.</p>
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-700">Note: The Secure Access DNS-layer security is always enabled on the Cisco Secure Client.</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <Info className="inline-block h-4 w-4 text-blue-400 cursor-pointer" />
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  The Cisco Secure Client with the Umbrella Roaming Security module steers web traffic on ports 80/443 to the Secure Web Gateway (SWG). All web traffic is evaluated against the organization's policy and Internet Access rules when a VPN connection is not established.
                  <br />
                  <strong>Note:</strong> You can override this option on individual roaming devices.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <ol className="list-decimal ml-6 space-y-1 text-sm text-gray-700">
          <li>Navigate to <span className="font-medium">Connect &gt; End User Connectivity</span>, and then click <span className="font-medium">Internet Security</span>.</li>
          <li>Navigate to <span className="font-medium">Cisco Secure Client Settings &gt; DNS and Web Security</span>.</li>
          <li>Enable the <span className="font-medium">Web Security (port 80/443 traffic only)</span> toggle button.</li>
        </ol>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <a
                  id="configure-swg"
                  href={isSubmitted ? `https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security` : '#'}
                  className={`text-blue-600 hover:underline block mt-2 font-semibold ${!isSubmitted ? 'pointer-events-none opacity-50' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Configure Cisco Secure Client Settings - Enable SWG (Full Proxy)
                </a>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>
                  The Cisco Secure Client protects computers, on and off the network.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    )
  },
  {
    id: 'security-2',
    title: '4b. Policy Configuration: SWG & HTTPS Inspection',
    content: (
      <div className="space-y-5">
        <ul className="list-disc ml-6 text-[15px] space-y-4">

          {/* SWG */}
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

          {/* HTTPS Inspection */}
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

          {/* Do Not Decrypt List */}
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
        </ul>
      </div>
    )
  }
];
