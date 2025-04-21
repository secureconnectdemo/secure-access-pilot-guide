import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { createPilotSteps } from './pilotStepsData';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Clock, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const PilotPlan = () => {
  const [orgNumber, setOrgNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const steps = createPilotSteps(orgNumber, isSubmitted);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgNumber) {
      toast.error('Please enter an organization number');
      return;
    }
    setIsSubmitted(true);
    toast.success('Organization number set successfully. Links are now active.');
  };

  return (
    <Card className="mt-8 mb-8 bg-[#f8f9fa] border border-gray-200 shadow-md">
      <CardHeader className="pb-2">
        <div className="bg-[#003366] text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Secure Access Pilot Plan</h2>
        </div>
        
        <div className="flex justify-between items-start mt-4 mb-4">
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-[#003366]" />
              <p className="text-sm text-gray-600">
                Estimated Setup Time: 45-60 minutes (1-2 test windows machines)
              </p>
            </div>

            <p className="text-[#212529] mb-4">
              This Secure Access Pilot Plan provides a streamlined, step-by-step approach to deploying Cisco Secure Access (SIA), guided by best practices and key requirements. Most configurations are completed directly in the dashboard, with advanced deployments addressed in the follow-up Adoption Pilot Plan.
            </p>

            {!isSubmitted && (
              <Alert className="mb-4 bg-amber-50 border-amber-200 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-amber-600 mt-1" />
                <div>
                  <AlertTitle className="text-amber-800">Organization Number Required</AlertTitle>
                  <AlertDescription className="text-amber-700 flex items-center gap-1">
                    Please enter your organization number to activate dashboard links.
                    <TooltipProvider>
                      <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-amber-600 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-amber-50 text-amber-900">
                          Enter your organization number to enable all features
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </AlertDescription>
                </div>
              </Alert>
            )}

      {isSubmitted && (
        <Alert className="mb-4 bg-green-50 border-green-200 flex items-start gap-2">
          <div>
            <AlertTitle className="text-green-800">Thank you!</AlertTitle>
            <AlertDescription className="text-green-700">
              Your organization number has been added. You can now begin navigating through the setup steps—each link has been customized to work directly with your Secure Access dashboard.
            </AlertDescription>
          </div>
        </Alert>
      )}

            <form onSubmit={handleSubmit} className="flex gap-4 items-start mb-6">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Enter organization number"
                  value={orgNumber}
                  onChange={(e) => setOrgNumber(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="bg-[#003366] hover:bg-[#002347]">
                Set Organization
              </Button>
            </form>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          {steps.map((step) => (
            <AccordionItem key={step.id} value={step.id}>
              <AccordionTrigger className="text-lg font-semibold">
                {step.title}
              </AccordionTrigger>
              <AccordionContent>{step.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>

      <CardFooter className="bg-[#003366] text-white p-4 rounded-b-lg">
        <p className="text-sm">
          For any questions or feedback, contact: josfonse@cisco.com
        </p>
      </CardFooter>
    </Card>
  );
};

export default PilotPlan;
