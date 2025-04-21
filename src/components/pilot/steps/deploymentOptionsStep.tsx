
import React from 'react';
import { PilotStep } from '../types';
import DeploymentOptions from './next/DeploymentOptions';

export const createDeploymentOptionsStep = (): PilotStep[] => [
  {
    id: 'deployment-options',
    title: "Flexible Deployment Models for Diverse Environments (Not Covered in This Pilot)",
    content: (
      <div className="space-y-6">
        <DeploymentOptions />
      </div>
    )
  }
];

export default createDeploymentOptionsStep;
