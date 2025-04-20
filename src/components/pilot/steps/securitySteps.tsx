
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
        {/* Removed duplicated heading here */}
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
                  href={isSubmitted ? `https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security` : '#'}
                  className={`text-blue-600 hover:underline block mt-2 ${!isSubmitted ? 'pointer-events-none opacity-50' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Cisco Secure Client
                </a>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>The Cisco Secure Client protects computers, on and off the network.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <a 
            href={isSubmitted ? `https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security` : '#'}
            className={`text-blue-600 hover:underline block mt-2 font-semibold ${!isSubmitted ? 'pointer-events-none opacity-50' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Configure Cisco Secure Client Settings - Enable SWG (Full Proxy)
          </a>
          <a 
            href={isSubmitted ? `https://dashboard.sse.cisco.com/org/${orgNumber}/connect/user-connectivity/internet-security` : '#'}
            className={`text-blue-600 hover:underline block mt-2`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Traffic Steering / SWG (Full Proxy) Dashboard
          </a>
        </div>
      </div>
    )
  }
];

