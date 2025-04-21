
import React from 'react';
import { PilotStep } from '../types';
import CongratulationsCard from './next/CongratulationsCard';
import NextFocusAreas from './next/NextFocusAreas';

export const createNextSteps = (): PilotStep[] => [
  {
    id: 'whats-next',
    title: "What's Next: Continued Adoption & Optimization",
    content: (
      <div className="space-y-6">
        <CongratulationsCard />
        <NextFocusAreas />
      </div>
    )
  }
];
