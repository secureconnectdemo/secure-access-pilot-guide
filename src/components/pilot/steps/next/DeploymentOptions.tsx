
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import CardSection from '../CardSection';
import DeploymentOptionsTable from './DeploymentOptionsTable';

const DeploymentOptions = () => {
  return (
    <CardSection title="Alternative Deployment Options to Consider">
      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
          <p className="text-gray-700">
            Cisco Secure Access supports multiple deployment models to scale coverage across diverse environments and provide appropriate protection based on device type, use case, and security requirements.
          </p>
          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="space-y-4">
          <DeploymentOptionsTable />
          <div className="mt-4 bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 text-sm">
              These deployment options can be mixed and matched to meet operational, geographic, and user-specific needs while maintaining consistent security policies across all environments.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </CardSection>
  );
};

export default DeploymentOptions;
