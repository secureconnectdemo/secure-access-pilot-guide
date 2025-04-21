
import React from "react";
import CardSection from "../CardSection";

interface Props {
  orgNumber: string;
  isSubmitted: boolean;
}

const ContentFiltering: React.FC<Props> = ({ orgNumber, isSubmitted }) => (
  <div className="space-y-8">
    {/* Content Filtering */}
    <CardSection title="Web Content Control">
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
            Name the rule (e.g.,{" "}
            <span className="font-mono bg-gray-100 px-1 rounded">
              Block Gambling Sites
            </span>
            )
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
          <li>Save and apply</li>
        </ol>
        <div className="mt-2 text-xs">
          <span className="font-bold">Test using:</span>{" "}
          <a
            href="https://777.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://777.com
          </a>
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
            Name the rule (e.g.,{" "}
            <span className="font-mono bg-gray-100 px-1 rounded">Geo Block Asia</span>
            )
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
          <li>Save and apply</li>
        </ol>
        <div className="mt-2 text-xs">
          <span className="font-bold">Test with:</span>{" "}
          <a
            href="https://www.qq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://www.qq.com
          </a>
          <br />
          <span className="font-bold">Expected:</span> Block page explaining the content is blocked due to geographic restrictions.
        </div>
      </div>
    </CardSection>
  </div>
);

export default ContentFiltering;
