
import React from "react";
import CardSection from "../CardSection";

interface Props {
  orgNumber: string;
  isSubmitted: boolean;
}

const AdvancedThreatProtection: React.FC<Props> = ({ orgNumber, isSubmitted }) => (
  <div className="space-y-8">
    {/* File Inspection & Malware Sandboxing */}
    <CardSection title="1. File Inspection & Malware Sandboxing">
      <div className="mb-2">
        <div className="font-bold mb-1">Steps:</div>
        <ol className="list-decimal ml-6 mt-1 space-y-1">
          <li>
            Go to <span className="font-medium">Security Profiles → File Inspection</span>{" "}
            {isSubmitted ? (
              <a
                href={`https://dashboard.sse.cisco.com/org/${orgNumber}/secure/securityprofiles`}
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
            Enable <span className="font-medium">Malware Analytics (Sandboxing)</span>
          </li>
          <li>
            Attach the profile to your Internet Access Policy
          </li>
          <li>
            Ensure HTTPS decryption is enabled{" "}
            <span className="text-gray-500">(required to inspect encrypted files)</span>
          </li>
          <li>Save and apply</li>
        </ol>
      </div>
      <div className="mt-4">
        <div className="font-bold mb-1">How It Works:</div>
        <ul className="list-disc ml-5 mt-1">
          <li>
            Files are analyzed using both static (signatures, heuristics) and dynamic
            (sandbox execution) techniques
          </li>
          <li>
            Verdicts returned: <b>Clean</b>, <b>Malicious</b>, or <b>Suspicious</b>
          </li>
          <li>Malicious files are blocked automatically</li>
        </ul>
        <div className="mt-2">
          <span className="font-bold">Test Tip:</span> Download{" "}
          <a
            href="https://www.eicar.org/download-anti-malware-testfile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            EICAR test file
          </a>{" "}
          to validate functionality.
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
            <span className="block ml-4 text-gray-600">
              For example: Category = Social Media or Reputation = Unknown
            </span>
          </li>
          <li>
            Attach the rule to an existing or new Internet Access Policy
          </li>
          <li>Save and apply</li>
        </ol>
      </div>
      <div className="mt-4">
        <div className="font-bold mb-1">Example Test:</div>
        <span className="block ml-5">
          Try accessing{" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.linkedin.com
          </a>{" "}
          or a new/unrated domain.
        </span>
        <div className="mt-2">
          <span className="font-bold">Expected:</span> Page opens in an isolated browser session, with a security banner and no data reaching the endpoint.
        </div>
      </div>
    </CardSection>
  </div>
);

export default AdvancedThreatProtection;
