
import React from "react";

/**
 * Renders a simple rounded badge for numbered steps.
 */
const StepNumberBadge: React.FC<{ number: number }> = ({ number }) => (
  <span
    className="inline-flex items-center justify-center h-6 w-6 mr-2 rounded bg-gray-200 text-gray-700 font-semibold text-base border border-gray-300"
    style={{ minWidth: 24, minHeight: 24 }}
  >
    {number}
  </span>
);

export default StepNumberBadge;
