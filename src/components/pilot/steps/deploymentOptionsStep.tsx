
import React from 'react';
import { PilotStep } from '../types';
import DeploymentOptions from './next/DeploymentOptions';

export const createDeploymentOptionsStep = (): PilotStep[] => [
  {
    id: 'deployment-options',
    title: "Alternative Deployment Options to Consider",
    content: (
      <div className="space-y-6">
        <DeploymentOptions />
      </div>
    )
  }
];
