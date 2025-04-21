
import React from 'react';
import { PilotStep } from './types';
import { createAccessSteps } from './steps/accessSteps';
import { createClientSteps } from './steps/clientSteps';
import { createVerificationSteps } from './steps/verificationSteps';
import { createSecuritySteps } from './steps/securitySteps';
import { createConfigurationSteps } from './steps/configurationSteps';
import { createAdditionalSteps } from './steps/additionalSteps';
import { createNextSteps } from './steps/nextSteps';

export const createPilotSteps = (orgNumber: string, isSubmitted: boolean): PilotStep[] => [
  ...createAccessSteps(orgNumber, isSubmitted),
  ...createClientSteps(orgNumber, isSubmitted),
  ...createVerificationSteps(orgNumber, isSubmitted),
  ...createSecuritySteps(orgNumber, isSubmitted),
  ...createConfigurationSteps(orgNumber, isSubmitted),
  ...createAdditionalSteps(orgNumber, isSubmitted),
  ...createNextSteps()
];
