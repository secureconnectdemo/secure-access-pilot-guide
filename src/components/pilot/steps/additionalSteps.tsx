
import React from 'react';
import { PilotStep } from '../types';

export const createAdditionalSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  {
    id: 'additional-1',
    title: '6. Monitoring and Reporting',
    content: (
      <div className="space-y-8">
        {/* Content Filtering (from 5.2) as per user request */}
        <div>
          <h3 className="font-semibold text-base mb-1 flex gap-1 items-center text-[#003366]">
            📚 Content Filtering (Acceptable Use Policies)
            <span>
              <svg className="inline-block h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={10} />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-4 py-2 bg-emerald-50 rounded border text-sm border-emerald-100">
            <div className="font-semibold mb-1 flex items-center gap-1">
              <svg className="inline-block h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg> Steps:
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
                <svg className="inline-block h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg> Expected:
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
            <span>
              <svg className="inline-block h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={10} />
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </h3>
          {/* Steps card */}
          <div className="mb-2 mt-1 px-4 py-2 bg-blue-50 rounded border text-sm border-blue-100">
            <div className="font-semibold mb-1 flex items-center gap-1">
              <svg className="inline-block h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg> Steps:
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
                <svg className="inline-block h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg> Expected:
              </span>
              Block page explaining the content is blocked due to geographic restrictions.
            </div>
          </div>
        </div>
      </div>
    )
  }
];
