
import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Shield, Globe, Check } from "lucide-react";

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: '5. Advanced Threat Protection',
    content: (
      <div className="space-y-8">
        {/* 1. File Inspection & Malware Sandboxing */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            🧬 1. File Inspection &amp; Malware Sandboxing
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Shield className="inline-block h-4 w-4 text-violet-600 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>Purpose:</b>
                  <p>
                    Detect and block malicious files in real time using advanced static and dynamic analysis.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-4 py-2 bg-violet-50 rounded border text-sm border-violet-100">
            <div className="font-semibold mb-1 flex items-center gap-1">
              <Check className="inline-block h-4 w-4 text-green-600" /> Steps:
            </div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Security Profiles → File Inspection</span>
              </li>
              <li>
                Enable <span className="font-medium">Malware Analytics (Sandboxing)</span>
              </li>
              <li>
                Attach the profile to your Internet Access Policy
              </li>
              <li>
                Ensure HTTPS decryption is enabled <span className="text-gray-500">(required to inspect encrypted files)</span>
              </li>
              <li>
                Save and apply
              </li>
            </ol>
          </div>
          {/* How it works card */}
          <div className="mt-2 px-4 py-2 bg-slate-50 rounded border text-sm border-slate-100">
            <div className="font-semibold mb-1 flex gap-1 items-center">
              🧪 How It Works:
            </div>
            <ul className="list-disc ml-5 mt-1">
              <li>Files are analyzed using both static (signatures, heuristics) and dynamic (sandbox execution) techniques</li>
              <li>Verdicts returned: <b>Clean</b>, <b>Malicious</b>, or <b>Suspicious</b></li>
              <li>Malicious files are blocked automatically</li>
            </ul>
            <span className="block mt-2">
              <span className="inline-flex items-center gap-1 font-semibold">
                <Check className="inline-block h-4 w-4 text-green-600" /> Test Tip:
              </span>
              Download <a href="https://www.eicar.org/download-anti-malware-testfile/"
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline">EICAR test file</a> to validate functionality.
            </span>
          </div>
        </div>
        {/* 2. Remote Browser Isolation (RBI) */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            🧪 2. Remote Browser Isolation (RBI)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Shield className="inline-block h-4 w-4 text-sky-600 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>Purpose:</b>
                  <p>
                    Allow users to safely visit unknown or high-risk websites by isolating content in a secure remote container.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-4 py-2 bg-sky-50 rounded border text-sm border-sky-100">
            <div className="font-semibold mb-1 flex items-center gap-1">
              <Check className="inline-block h-4 w-4 text-green-600" /> Steps:
            </div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Security Profiles → Isolation Rules</span>
              </li>
              <li>
                Enable <span className="font-medium">Remote Browser Isolation</span>
              </li>
              <li>
                Define the trigger:<br />
                <span className="block ml-4 text-gray-600">For example: Category = Social Media or Reputation = Unknown</span>
              </li>
              <li>
                Attach the rule to an existing or new Internet Access Policy
              </li>
              <li>
                Save and apply
              </li>
            </ol>
          </div>
          {/* Example test card */}
          <div className="mt-2 px-4 py-2 bg-slate-50 rounded border text-sm border-slate-100">
            <div className="font-semibold mb-1 flex gap-1 items-center">
              🧪 Example Test:
            </div>
            <span className="block ml-5">
              Try accessing <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.linkedin.com</a> or a new/unrated domain.
            </span>
            <span className="block mt-2">
              <span className="inline-flex items-center gap-1 font-semibold">
                <Check className="inline-block h-4 w-4 text-green-600" /> Expected:
              </span>
              Page opens in an isolated browser session, with a security banner and no data reaching the endpoint.
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'config-2',
    title: '6. Content Filtering (Acceptable Use Policies)',
    content: (
      <div className="space-y-8">
        {/* Content Filtering */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            📚 Content Filtering (Acceptable Use Policies)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Shield className="inline-block h-4 w-4 text-emerald-600 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>Purpose:</b>
                  <p>
                    Block or allow access based on content categories such as adult sites, gambling, and high-risk platforms.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-4 py-2 bg-emerald-50 rounded border text-sm border-emerald-100">
            <div className="font-semibold mb-1 flex items-center gap-1">
              <Check className="inline-block h-4 w-4 text-green-600" /> Steps:
            </div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Dashboard → Policies → Internet Access</span>
              </li>
              <li>
                Click <span className="font-medium">Add Rule</span>
              </li>
              <li>
                Name the rule (e.g., <span className="font-mono bg-gray-100 px-1 rounded">Block Gambling Sites</span>)
              </li>
              <li>
                Set Action to <span className="font-medium">Block</span>
              </li>
              <li>
                In <span className="font-medium">Destination Categories</span>, choose:
                <ul className="list-disc ml-8 mt-1">
                  <li>Gambling</li>
                  <li>Optionally add: Adult, Illegal, High Risk, etc.</li>
                </ul>
              </li>
              <li>
                Save and apply
              </li>
            </ol>
            <div className="mt-2 text-xs">
              <b>Test using:</b> <a href="https://777.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://777.com</a>
              <br />
              <span className="inline-flex items-center gap-1 font-semibold">
                <Check className="inline-block h-4 w-4 text-green-600" /> Expected:
              </span> Secure Access block page with:
              <ul className="list-disc ml-8">
                <li>Reason: Category: Gambling</li>
                <li>User info, IP, timestamp</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Geolocation Blocking */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            🌍 Geolocation Blocking
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Globe className="inline-block h-4 w-4 text-blue-500 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>Purpose:</b>
                  <p>
                    Prevent access to content hosted in specific countries or regions.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-4 py-2 bg-blue-50 rounded border text-sm border-blue-100">
            <div className="font-semibold mb-1 flex items-center gap-1">
              <Check className="inline-block h-4 w-4 text-green-600" /> Steps:
            </div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Policy Dashboard → Internet Access Policy → Add Rule</span>
              </li>
              <li>
                Name the rule (e.g., <span className="font-mono bg-gray-100 px-1 rounded">Geo Block Asia</span>)
              </li>
              <li>
                Set Action to <span className="font-medium">Block</span>
              </li>
              <li>
                Under <span className="font-medium">Destination Categories</span>, choose:
                <ul className="list-disc ml-8 mt-1">
                  <li>Geolocation</li>
                  <li>Then select the region (e.g., Asia)</li>
                </ul>
              </li>
              <li>
                Save and apply
              </li>
            </ol>
            <div className="mt-2 text-xs">
              <b>Test with:</b> <a href="https://www.qq.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.qq.com</a>
              <br />
              <span className="inline-flex items-center gap-1 font-semibold">
                <Check className="inline-block h-4 w-4 text-green-600" /> Expected:
              </span>
              Block page explaining the content is blocked due to geographic restrictions.
            </div>
          </div>
        </div>
      </div>
    )
  }
];

