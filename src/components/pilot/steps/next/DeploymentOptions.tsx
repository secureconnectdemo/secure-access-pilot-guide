
import React from 'react';
import CardSection from '../CardSection';
import DeploymentOptionsTable from './DeploymentOptionsTable';

const DeploymentOptions = () => {
  return (
    <CardSection title="Alternative Deployment Options to Consider">
      <div className="space-y-4">
        <div className="text-left">
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            The pilot uses a deployment model that enables the full Secure Access stack through a unified client, making it easy to roll out, test, and validate core capabilities in just a few minutes.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Beyond the pilot, for additional use cases, scenarios, and unique environments, Cisco Secure Access supports a variety of deployment models designed to scale coverage across diverse environments while applying the appropriate level of protection based on device type, user role, and security requirements.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            These flexible options empower organizations to extend protection beyond traditional endpoints, enabling coverage for remote users, unmanaged devices, branch offices, and cloud workloads—all managed through a centralized policy framework.
          </p>
        </div>
        
        <DeploymentOptionsTable />
        
        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 text-sm">
            These deployment options can be mixed and matched to meet operational, geographic, and user-specific needs while maintaining consistent security policies across all environments.
          </p>
        </div>
      </div>
    </CardSection>
  );
};

export default DeploymentOptions;
