
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import { createPilotSteps } from './pilotStepsData';
import { FileText, Download, Printer } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PilotPlan = () => {
  const [orgNumber, setOrgNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
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

  const exportAsPDF = async () => {
    if (!contentRef.current) return;
    
    try {
      const canvas = await html2canvas(contentRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`SecureAccess_PilotPlan_${orgNumber}.pdf`);
      toast.success('PDF exported successfully');
    } catch (error) {
      toast.error('Failed to export PDF');
    }
  };

  const printContent = () => {
    window.print();
  };

  const exportAsHTML = () => {
    if (!contentRef.current) return;
    
    const content = contentRef.current.outerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SecureAccess_PilotPlan_${orgNumber}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('HTML exported successfully');
  };

  return (
    <Card className="mt-8 mb-8 bg-[#f8f9fa] border border-gray-200 shadow-md">
      <CardHeader className="pb-2">
        <div className="bg-[#003366] text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl font-bold">Secure Access Pilot Plan</h2>
        </div>
        
        <div className="flex justify-between items-start mt-4 mb-4">
          <div className="flex-grow">
            <p className="text-[#212529] mb-4">
              This Secure Access Pilot Plan provides a structured approach to deploying Cisco Secure Access (SSE/SWG) in a typical enterprise environment.
            </p>
            
            {!isSubmitted && (
              <Alert className="mb-4 bg-amber-50 border-amber-200">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertTitle className="text-amber-800">Organization Number Required</AlertTitle>
                <AlertDescription className="text-amber-700">
                  Please enter your organization number to activate dashboard links and export options.
                  <div className="mt-2">
                    <details className="group">
                      <summary className="flex items-center text-base font-semibold cursor-pointer bg-[#f3f7fd] hover:bg-[#e8f0fa] px-3 py-2 rounded border border-[#c6d4eb] text-[#163261] group-open:rounded-b-none transition">
                        <span className="mr-2">&#9432;</span>
                        More details for Org ID Sign-in
                      </summary>
                      <div className="border-l-4 border-[#003366] px-4 py-3 bg-[#f7faff] text-sm rounded-b-lg shadow-sm space-y-2 mt-0">
                        <ul className="list-disc ml-6 space-y-2 text-[#212529]">
                          <li>
                            <span className="font-medium">If you know your Org ID,</span>{" "}
                            <span>sign in to Secure Access first.</span>
                          </li>
                          <li>
                            <span className="font-medium">Check the URL:</span>{" "}
                            <span>
                              <code className="bg-[#eaeafc] text-[#003366] px-1 rounded border border-[#ccd3f2]">https://dashboard.sse.com/o/&lt;orgId&gt;/#/&lt;page&gt;</code>
                            </span>
                          </li>
                          <li>
                            In the dashboard, click your user account name (top right), then{" "}
                            <span className="font-medium underline underline-offset-2 decoration-blue-800">expand your username</span>{" "}
                            to view all organizations you belong to.
                          </li>
                          <li>
                            Confirm you are signed in to the <span className="font-medium">correct organization</span>. Your org name will appear below your account.
                          </li>
                          <li>
                            To switch organizations, click{" "}
                            <span className="font-semibold underline underline-offset-2 decoration-blue-800">Switch Organizations</span>.
                          </li>
                          <li>
                            Review <span className="font-semibold">System Status</span>{" "}for Secure Access health (found in your dashboard).
                          </li>
                        </ul>
                      </div>
                    </details>
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>
          {isSubmitted && (
            <div className="flex gap-2 ml-4 flex-shrink-0">
              <Button variant="outline" size="sm" onClick={exportAsHTML}>
                <FileText className="mr-1" size={16} />
                Export HTML
              </Button>
              <Button variant="outline" size="sm" onClick={exportAsPDF}>
                <Download className="mr-1" size={16} />
                Export PDF
              </Button>
              <Button variant="outline" size="sm" onClick={printContent}>
                <Printer className="mr-1" size={16} />
                Print
              </Button>
            </div>
          )}
        </div>
        {/* Guidance section before the dashboard links */}
        <div className="mb-4 rounded-lg bg-[#e6f1fc] border border-[#b0ceed] px-5 py-3 text-[#13457b]">
          <p className="font-medium mb-1">
            As you move through the next steps, we’ll provide direct links that point to specific locations within your own Secure Access dashboard—based on the Org ID you entered.
          </p>
          <p className="text-sm mb-2">
            To ensure smooth navigation and a seamless experience, make sure you&apos;re already logged into the Secure Access dashboard in another tab or window. This will take you directly to the right configuration pages without needing to search manually.
          </p>
          <div className="flex items-center gap-2 text-[#003366] bg-[#e2eaff] border border-[#d6e2fa] rounded px-3 py-2 text-[15px]">
            <FileText size={18} className="mr-1" />
            <span className="font-medium">
              Access the Secure Access Dashboard here:{' '}
              <a
                href="https://dashboard.sse.cisco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                https://dashboard.sse.cisco.com
              </a>
            </span>
          </div>
        </div>
        {/* End guidance section */}
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 items-center mb-4">
          <Input
            type="text"
            placeholder="Enter Organization Number"
            value={orgNumber}
            onChange={(e) => setOrgNumber(e.target.value)}
            className="max-w-xs"
          />
          <Button 
            type="submit" 
            variant={isSubmitted ? "secondary" : "default"}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isSubmitted ? 'Update Organization' : 'Set Organization'} 
          </Button>
          {isSubmitted && (
            <p className="w-full text-sm text-green-600 font-medium mt-1">
              Organization {orgNumber} set. Dashboard links are now active.
            </p>
          )}
        </form>
      </CardHeader>
      <CardContent ref={contentRef}>
        <Accordion type="single" collapsible defaultValue="">
          {steps.map((step) => (
            <AccordionItem key={step.id} value={step.id} className="border rounded-lg bg-white overflow-visible">
              <AccordionTrigger className="px-4 py-2 hover:no-underline">
                <h3 className="text-lg font-semibold text-[#003366]">{step.title}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 overflow-visible">
                {step.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default PilotPlan;

