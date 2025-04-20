import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export const createSecuritySteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'security-1',
    title: '4. Security Configuration',
    content: (
      <div className="space-y-4">
        <div className="mb-6">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            Enable Core Security Features
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-blue-500" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="space-y-2 text-sm">
                    <p>When bypassing security in Secure Access:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Full Bypass: DNS requests bypass both Secure Access DNS servers and SWG, using local DNS resolvers</li>
                      <li>SWG-only Bypass: Requests still use Secure Access DNS servers but bypass the SWG</li>
                    </ul>
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
              DNS and Web Security Settings
            </a>
            <p className="text-sm text-gray-600 ml-4">• Enable Secure Web Gateway (SWG)</p>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Security Profile Configuration:</h4>
          <div className="space-y-2">
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.securityProfiles) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Security Profiles - Internet Access
            </a>
            <ul className="text-sm text-gray-600 ml-4 space-y-1">
              <li>• Enable HTTPS inspection</li>
              <li>• Configure file sandboxing</li>
              <li>• Apply security profile</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-3">Decryption Settings:</h4>
          <div className="space-y-2">
            <a 
              href={isSubmitted ? getUrl(orgNumber, PATHS.dontDecryptLists) : '#'}
              className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Do Not Decrypt List Configuration
            </a>
            <p className="text-sm text-gray-600 ml-4">
              Configure sensitive domains (e.g., banking, healthcare) that should not be decrypted
            </p>
          </div>
        </div>
      </div>
    )
  }
];
