
import React from 'react';
import { PilotStep } from '../types';
import CongratulationsCard from './next/CongratulationsCard';
import NextFocusAreas from './next/NextFocusAreas';

export const createNextSteps = (): PilotStep[] => [
  {
    id: 'whats-next',
    title: "Next Focus Areas: Continue Your Secure Access Journey",
    content: (
      <div className="space-y-6">
        <CongratulationsCard />
        <NextFocusAreas />
      </div>
    )
  }
];

export default createNextSteps;
