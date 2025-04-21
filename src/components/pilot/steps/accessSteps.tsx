import React from 'react';
import { PilotStep } from '../types';
import { getUrl, PATHS } from '../urlUtils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import CardSection from "./CardSection";

export const createAccessSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'access-1',
    title: '1. Initial Access Setup',
    content: (
      <div className="space-y-5">
        <CardSection title="Access the Secure Access Dashboard">
          <p className="mb-3 text-gray-700 text-sm">
            As you move through the next steps, we’ll provide direct links that point to specific locations within your own Secure Access dashboard—based on the Org ID you entered.<br />
            To ensure smooth navigation and a seamless experience, make sure you&apos;re already logged into the Secure Access dashboard. This will take you directly to the right configuration pages without needing to search manually.
          </p>
          <a 
            href={isSubmitted ? getUrl(orgNumber, PATHS.overview) : '#'}
            className={`text-blue-600 hover:underline block ${!isSubmitted && 'pointer-events-none opacity-50'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Secure Access Dashboard
          </a>
        </CardSection>
        
        {/* Revised CardSection: Add an Additional Admin Account */}
        <CardSection title="Add an Additional Admin">
          <ol className="ml-4 list-decimal space-y-2 text-gray-700 text-sm">
            <li>
              <span className="font-medium">
                Navigate to Admin &gt; Accounts and click New.
              </span>
              <br />
              <a
                href={
                  isSubmitted
                    ? `https://dashboard.sse.cisco.com/org/${orgNumber}/admin/accounts`
                    : '#'
                }
                className={`text-blue-600 hover:underline ${!isSubmitted && 'pointer-events-none opacity-50'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Dashboard
              </a>
            </li>
            <li>
              <span className="font-medium">Enter the User’s Email Address:</span> <br />
              In the “Email” field, enter the email address of the user you want to add.
            </li>
            <li>
              <span className="font-medium">Select a Role:</span>
              <ul className="ml-6 mt-1 space-y-1 list-disc text-xs text-gray-600">
                <li>
                  <span className="font-semibold">Full Admin</span> – Full access to all features.
                </li>
                <li>
                  <span className="font-semibold">Read Only</span> – Can view settings but cannot make changes.
                </li>
                <li>
                  <span className="font-semibold">Security Administrator</span> – Can manage security-related settings (limited scope).
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">Submit:</span> <br />
              After selecting the appropriate role, click <span className="bg-gray-100 rounded px-1 py-0.5 border text-xs border-gray-300">Add</span> or <span className="bg-gray-100 rounded px-1 py-0.5 border text-xs border-gray-300">Save</span> (based on your interface).
            </li>
            <li>
              <span className="font-medium">User Will Be Notified:</span> <br/>
              If your org is SAML-enabled, the user will receive an email and can log in using SSO.
            </li>
          </ol>
          <div className="flex items-start mt-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    <Info className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="underline font-medium text-sm text-blue-700">Best Practice</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  Always have at least <span className="font-semibold">2 Full Admins</span> added—preferably one being a personal account and one a shared/backup admin.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardSection>

        <CardSection title="Traffic Steering Configuration">
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
        </CardSection>

        <CardSection title="Root Certificate Installation">
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
        </CardSection>
      </div>
    )
  }
];
