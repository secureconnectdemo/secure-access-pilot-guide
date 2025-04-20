
import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export const createAccessSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'access-1',
    title: '1. Initial Access Setup',
    content: (
      <div className="space-y-4">
        <p>Set up initial access to Cisco Secure Access:</p>
        <div className="space-y-2">
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.overview) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Access Dashboard
          </a>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3">Traffic Steering Configuration:</h4>
            <ol className="text-sm text-gray-600 ml-4 space-y-3">
              <li>
                1. Access Configuration Page
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Navigate to Traffic Steering Settings:
                    <a 
                      href={isSubmitted ? getUrl(orgNumber, PATHS.trafficSteering) : '#'}
                      className={`text-blue-600 hover:underline ml-2 inline-block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Settings
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                2. Configure Bypass Domains
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Add internal domains (e.g., *.corp.com)</li>
                  <li>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <span className="underline text-blue-600 cursor-pointer">About Internet Security Bypass</span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-sm">
                          <p>
                            Internet security bypass is supported on user devices with the Cisco Secure Client (formerly known as AnyConnect) deployed or browsers in the environment with a configured Secure Access or custom PAC file. User devices must have the Cisco Secure Client deployed with the Umbrella Roaming Security module.
                          </p>
                          <p className="mt-2">
                            If you bypass internet security in Secure Access, DNS requests for the destinations bypass the Secure Access DNS servers and Secure Web Gateway. The organization's local DNS servers resolve the DNS requests.<br />
                            If you bypass the Secure Web Gateway in Secure Access, Secure Access DNS servers resolve the DNS requests.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                  {/* Removed the private IP ranges bullet as requested */}
                  <li>• Add trusted cloud services if needed</li>
                </ul>
              </li>
              <li>
                3. Set Resource Exemptions
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Configure internal applications</li>
                  <li>• Add specific URLs or IP addresses</li>
                  <li>• Set exclusion rules for sensitive systems</li>
                </ul>
              </li>
              <li>
                4. Validate Configuration
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Test access to internal resources</li>
                  <li>• Verify bypass rules are working</li>
                  <li>• Confirm no disruption to local services</li>
                </ul>
              </li>
            </ol>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              Root Certificate Installation
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-blue-500" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="font-normal">
                      Root certificates are crucial for:
                      <ul className="list-disc pl-4 mt-1">
                        <li>Decrypting and inspecting network traffic</li>
                        <li>Displaying block and warning notifications</li>
                        <li>Enabling secure, transparent internet access</li>
                      </ul>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h4>
            <ol className="text-sm text-gray-600 ml-4 space-y-3">
              <li>
                1. Download Root Certificate
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• Login to Secure Access Dashboard</li>
                  <li>• Navigate to Secure &gt; Certificates &gt; Decryption
                    <a 
                      href={isSubmitted ? getUrl(orgNumber, PATHS.rootCertificate) : '#'}
                      className={`text-blue-600 hover:underline ml-2 inline-block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Certificate Page
                    </a>
                  </li>
                  <li>• Expand "Secure Access Root Certificate" section</li>
                  <li>• Click "Download certificate" to get Cisco_Secure_Access_Root_CA.cer</li>
                </ul>
              </li>

              <div className="mt-4 mb-4">
                <video 
                  src="https://github.com/secureconnectdemo/images-and-giff/raw/refs/heads/main/cert.mp4" 
                  controls 
                  loop 
                  autoPlay
                  muted
                  className="w-1/2 mx-auto rounded-md shadow-sm"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <li>
                2. Install the Certificate
                <ul className="ml-4 list-disc">
                  <li>Open Microsoft Management Console (MMC):
                    <ul className="ml-4 mt-1">
                      <li>• Press Windows key + R</li>
                      <li>• Type "mmc" and press Enter</li>
                    </ul>
                  </li>
                  <li>Add Certificates Snap-in:
                    <ul className="ml-4 mt-1">
                      <li>• Go to File &gt; Add/Remove Snap-in</li>
                      <li>• Select "Certificates"</li>
                      <li>• Choose "Computer account"</li>
                      <li>• Select "Local computer"</li>
                    </ul>
                  </li>
                  <li>Complete Installation:
                    <ul className="ml-4 mt-1">
                      <li>• Navigate to Trusted Root Certification Authorities</li>
                      <li>• Right-click &gt; "All Tasks" &gt; "Import"</li>
                      <li>• Browse to downloaded Cisco_Secure_Access_Root_CA.cer</li>
                      <li>• Select "Place all certificates in the following store"</li>
                      <li>• Verify "Trusted Root Certification Authorities" store</li>
                      <li>• Complete the wizard</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
];

