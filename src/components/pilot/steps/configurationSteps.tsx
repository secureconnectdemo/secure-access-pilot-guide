
import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Shield, Check, FileText } from "lucide-react";

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: '5. Advanced Threat Protection',
    content: (
      <div className="space-y-8">
        {/* 1. File Inspection & Malware Sandboxing */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            <span className="text-xl font-bold mr-1">🧬 1. File Inspection &amp; Malware Sandboxing</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Shield className="inline-block h-4 w-4 text-violet-600 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>Purpose:</b>
                  <p>Detect and block malicious files in real time using advanced static and dynamic analysis.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-5 py-3 rounded border text-sm bg-[#efebfa] border-[#c8bfff]">
            <div className="font-medium mb-1 flex items-center gap-1 text-green-600">
              <Check className="inline-block h-4 w-4" /> Steps:
            </div>
            <ol className="list-decimal ml-6 mt-1 space-y-1 text-gray-900">
              <li>Go to <span className="font-medium">Security Profiles → File Inspection</span></li>
              <li>Enable <span className="font-medium">Malware Analytics (Sandboxing)</span></li>
              <li>Attach the profile to your Internet Access Policy</li>
              <li>
                Ensure HTTPS decryption is enabled{" "}
                <span className="text-gray-500 font-normal">(required to inspect encrypted files)</span>
              </li>
              <li>Save and apply</li>
            </ol>
          </div>
          {/* How it works card */}
          <div className="mt-2 px-5 py-3 rounded border text-sm bg-[#f7fafd] border-[#d8eefe]">
            <div className="font-semibold mb-1 flex gap-1 items-center text-emerald-700">
              <FileText className="inline-block h-4 w-4 text-sky-600" /> How It Works:
            </div>
            <ul className="list-disc ml-5 mt-1 text-gray-800">
              <li>Files are analyzed using both static (signatures, heuristics) and dynamic (sandbox execution) techniques</li>
              <li>Verdicts returned: <b>Clean</b>, <b>Malicious</b>, or <b>Suspicious</b></li>
              <li>Malicious files are blocked automatically</li>
            </ul>
            <span className="block mt-2 text-base font-normal">
              <span className="inline-flex items-center gap-1 font-medium text-green-700">
                <Check className="inline-block h-4 w-4" /> Test Tip:
              </span>{" "}
              Download{" "}
              <a href="https://www.eicar.org/download-anti-malware-testfile/"
                target="_blank" rel="noopener noreferrer"
                className="text-blue-700 hover:underline">EICAR test file</a>{" "}
              to validate functionality.
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'config-2',
    title: '6. Remote Browser Isolation (RBI)',
    content: (
      <div className="space-y-8">
        {/* 2. Remote Browser Isolation (RBI) */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            <span className="text-xl font-bold mr-1">🧪 2. Remote Browser Isolation (RBI)</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Shield className="inline-block h-4 w-4 text-sky-600 cursor-pointer" />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <b>Purpose:</b>
                  <p>Allow users to safely visit unknown or high-risk websites by isolating content in a secure remote container.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-5 py-3 rounded border text-sm bg-[#eaf6ff] border-[#bae0fa]">
            <div className="font-medium mb-1 flex items-center gap-1 text-green-600">
              <Check className="inline-block h-4 w-4" /> Steps:
            </div>
            <ol className="list-decimal ml-6 mt-1 space-y-1 text-gray-900">
              <li>Go to <span className="font-medium">Security Profiles → Isolation Rules</span></li>
              <li>Enable <span className="font-medium">Remote Browser Isolation</span></li>
              <li>Define the trigger:<br />
                <span className="block ml-4 text-gray-600">For example: Category = Social Media or Reputation = Unknown</span>
              </li>
              <li>Attach the rule to an existing or new Internet Access Policy</li>
              <li>Save and apply</li>
            </ol>
          </div>
          {/* Example test card */}
          <div className="mt-2 px-5 py-3 rounded border text-sm bg-[#f7fafd] border-[#d8eefe]">
            <div className="font-semibold mb-1 flex gap-1 items-center text-emerald-700">
              <FileText className="inline-block h-4 w-4 text-sky-600" /> Example Test:
            </div>
            <span className="block ml-5 text-base font-normal">
              Try accessing <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">https://www.linkedin.com</a> or a new/unrated domain.
            </span>
            <span className="block mt-2">
              <span className="inline-flex items-center gap-1 font-semibold text-green-700">
                <Check className="inline-block h-4 w-4" /> Expected:
              </span>{" "}
              Page opens in an isolated browser session, with a security banner and no data reaching the endpoint.
            </span>
          </div>
        </div>
      </div>
    ),
  }
];
