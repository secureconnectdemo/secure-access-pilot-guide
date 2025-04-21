
import React from "react";
import { PilotStep } from "../types";
import AdvancedThreatProtection from "./configuration/AdvancedThreatProtection";
import ContentFiltering from "./configuration/ContentFiltering";

export const createConfigurationSteps = (
  orgNumber: string,
  isSubmitted: boolean
): PilotStep[] => [
  {
    id: "config-1",
    title: "5. Advanced Threat Protection",
    content: (
      <AdvancedThreatProtection orgNumber={orgNumber} isSubmitted={isSubmitted} />
    ),
  },
  {
    id: "config-2",
    title: "6. Content Filtering (Acceptable Use Policies)",
    content: (
      <ContentFiltering orgNumber={orgNumber} isSubmitted={isSubmitted} />
    ),
  },
];
