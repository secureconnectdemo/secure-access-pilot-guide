
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export const createClientSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'client-1',
    title: '2. Cisco Secure Client Configuration',
    content: (
      <div className="space-y-4">
        <div className="mb-6">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            Configure DNS and Web Security Settings
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-blue-500" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-2 text-sm">
                    <p>
                      Configure DNS and web security settings for the Cisco Secure Client.
                      <br />
                      <strong>Note:</strong> The Secure Access DNS-layer security is always enabled on the Cisco Secure Client.
                    </p>
                    <ul className="list-disc ml-4 mt-2">
                      <li>Navigate to <span className="font-semibold">Connect &gt; End User Connectivity</span>, then click <span className="font-semibold">Internet Security</span>.</li>
                      <li>Navigate to <span className="font-semibold">Cisco Secure Client Settings &gt; DNS and Web Security</span>.</li>
                      <li>
                        <span className="font-semibold">Enable the Web Security (port 80/443 traffic only) toggle button.</span>
                      </li>
                    </ul>
                    <div className="mt-2 text-blue-900 text-xs bg-blue-50 p-2 rounded">
                      The Cisco Secure Client with the Umbrella Roaming Security module steers web traffic on ports 80/443 to the Secure Web Gateway (SWG). All web traffic is evaluated against the organization's policy and Internet Access rules when a VPN connection is not established.
                      <br />
                      <span className="font-semibold">Note:</span> You can override this option on individual roaming devices.
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h4>
          <div className="space-y-2">
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.trafficSteering) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Cisco Secure Client Settings
            </a>
            <p className="text-sm text-gray-600 ml-4">• Configure DNS and Web Security</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            Internet Security Bypass (Optional)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-blue-500" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-2 text-sm">
                    Add destinations in Secure Access to bypass internet security. Traffic for destinations that are added in Secure Access bypass the Secure Access DNS resolvers and Secure Web Gateway or the Secure Web Gateway only.
                    <br />
                    <br />
                    <span className="font-semibold">If you bypass internet security in Secure Access:</span> DNS requests for the destinations bypass the Secure Access DNS servers and Secure Web Gateway. The organization's local DNS servers resolve the DNS requests.
                    <br />
                    <br />
                    <span className="font-semibold">If you bypass the Secure Web Gateway in Secure Access:</span> Secure Access DNS servers resolve the DNS requests.
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h4>
          <ul className="text-sm text-gray-600 ml-4 space-y-1">
            <li>• Add internal domains (e.g., *.corp.com)</li>
          </ul>
        </div>
      </div>
    )
  }
];
