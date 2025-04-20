
import React from 'react';
import { PilotStep } from '../types';

function CardSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="mb-4">
      <div className="font-semibold text-base mb-2 text-gray-900">{title}</div>
      <div className="rounded border bg-white p-4 text-sm border-gray-200">{children}</div>
    </section>
  );
}

export const createConfigurationSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'config-1',
    title: '5. Advanced Threat Protection',
    content: (
      <div className="space-y-8">
        {/* File Inspection & Malware Sandboxing */}
        <CardSection title="1. File Inspection & Malware Sandboxing">
          <div className="mb-2">
            <div className="font-bold mb-1">Steps:</div>
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
          <div className="mt-4">
            <div className="font-bold mb-1">How It Works:</div>
            <ul className="list-disc ml-5 mt-1">
              <li>Files are analyzed using both static (signatures, heuristics) and dynamic (sandbox execution) techniques</li>
              <li>Verdicts returned: <b>Clean</b>, <b>Malicious</b>, or <b>Suspicious</b></li>
              <li>Malicious files are blocked automatically</li>
            </ul>
            <div className="mt-2">
              <span className="font-bold">Test Tip:</span> Download <a href="https://www.eicar.org/download-anti-malware-testfile/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">EICAR test file</a> to validate functionality.
            </div>
          </div>
        </CardSection>
        {/* Remote Browser Isolation (RBI) */}
        <CardSection title="2. Remote Browser Isolation (RBI)">
          <div className="mb-2">
            <div className="font-bold mb-1">Steps:</div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Security Profiles → Isolation Rules</span>{" "}
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/policy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400 ml-1">(Dashboard link locked)</span>
                )}
              </li>
              <li>
                Enable <span className="font-medium">Remote Browser Isolation</span>
              </li>
              <li>
                Define the trigger:
                <br />
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
          <div className="mt-4">
            <div className="font-bold mb-1">Example Test:</div>
            <span className="block ml-5">
              Try accessing <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.linkedin.com</a> or a new/unrated domain.
            </span>
            <div className="mt-2">
              <span className="font-bold">Expected:</span>
              Page opens in an isolated browser session, with a security banner and no data reaching the endpoint.
            </div>
          </div>
        </CardSection>
      </div>
    ),
  },
  {
    id: 'config-2',
    title: '6. Content Filtering (Acceptable Use Policies)',
    content: (
      <div className="space-y-8">
        {/* Content Filtering */}
        <CardSection title="Content Filtering (Acceptable Use Policies)">
          <div className="mb-2">
            <div className="font-bold mb-1">Steps:</div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Dashboard → Policies → Internet Access</span>{" "}
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/policy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400 ml-1">(Dashboard link locked)</span>
                )}
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
              <span className="font-bold">Test using:</span> <a href="https://777.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://777.com</a>
              <br />
              <span className="font-bold">Expected:</span> Secure Access block page with:
              <ul className="list-disc ml-8">
                <li>Reason: Category: Gambling</li>
                <li>User info, IP, timestamp</li>
              </ul>
            </div>
          </div>
        </CardSection>
        {/* Geolocation Blocking */}
        <CardSection title="Geolocation Blocking">
          <div className="mb-2">
            <div className="font-bold mb-1">Steps:</div>
            <ol className="list-decimal ml-6 mt-1 space-y-1">
              <li>
                Go to <span className="font-medium">Policy Dashboard → Internet Access Policy → Add Rule</span>{" "}
                {isSubmitted ? (
                  <a
                    href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/policy`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    (Open Dashboard)
                  </a>
                ) : (
                  <span className="text-gray-400 ml-1">(Dashboard link locked)</span>
                )}
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
              <span className="font-bold">Test with:</span> <a href="https://www.qq.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.qq.com</a>
              <br />
              <span className="font-bold">Expected:</span> Block page explaining the content is blocked due to geographic restrictions.
            </div>
          </div>
        </CardSection>
      </div>
    )
  }
];

