
import React from 'react';
import { PilotStep } from '../types';
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ShieldCheck, Browser } from "lucide-react";

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: 'Advanced Threat Protection',
    content: (
      <div className="space-y-6">
        {/* 1. File Inspection & Malware Sandboxing */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center">
            <span role="img" aria-label="DNA">🧬</span> 1. File Inspection &amp; Malware Sandboxing
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <ShieldCheck className="inline-block h-4 w-4 text-violet-500 cursor-pointer" />
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
          <div className="mb-2 mt-1 px-2 py-1 bg-violet-50 rounded border text-sm border-violet-100">
            <b>✅ Steps:</b>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Security Profiles → File Inspection</span>
              </li>
              <li>Enable <span className="font-medium">Malware Analytics (Sandboxing)</span></li>
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
          <div className="mt-2 px-2 py-1 bg-slate-50 rounded border text-sm border-slate-100">
            <b className="inline-flex gap-1 items-center" role="img" aria-label="Experiment">🧪 How It Works:</b>
            <ul className="list-disc ml-5 mt-1">
              <li>Files are analyzed using both static (signatures, heuristics) and dynamic (sandbox execution) techniques</li>
              <li>Verdicts returned: <b>Clean</b>, <b>Malicious</b>, or <b>Suspicious</b></li>
              <li>Malicious files are blocked automatically</li>
            </ul>
            <span className="block mt-2">
              <b>✅ Test Tip:</b> Download <a href="https://www.eicar.org/download-anti-malware-testfile/"
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline">EICAR test file</a> to validate functionality.
            </span>
          </div>
        </div>
        {/* 2. Remote Browser Isolation (RBI) */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center">
            <span role="img" aria-label="Lab">🧪</span> 2. Remote Browser Isolation (RBI)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span>
                    <Browser className="inline-block h-4 w-4 text-sky-500 cursor-pointer" />
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
          <div className="mb-2 mt-1 px-2 py-1 bg-sky-50 rounded border text-sm border-sky-100">
            <b>✅ Steps:</b>
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
          <div className="mt-2 px-2 py-1 bg-slate-50 rounded border text-sm border-slate-100">
            <b className="inline-flex gap-1 items-center" role="img" aria-label="Lab">🧪 Example Test:</b>
            <span className="block ml-5">
              Try accessing <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.linkedin.com</a> or a new/unrated domain.
            </span>
            <span className="block mt-2">
              <b>✅ Expected:</b> Page opens in an isolated browser session, with a security banner and no data reaching the endpoint.
            </span>
          </div>
        </div>
      </div>
    ),
  }
];
