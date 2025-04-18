
import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { toast } from 'sonner';
import { createPilotSteps } from './pilotStepsData';
import { AlertCircle, FileText, Download, Printer, ChevronDown } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PilotPlan = () => {
  const [orgNumber, setOrgNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="mt-8 mb-8"
    >
      <Card className="bg-[#f8f9fa] border border-gray-200 shadow-md">
        <CardHeader className="pb-2">
          <CollapsibleTrigger className="flex w-full justify-between items-center bg-[#003366] text-white py-4 px-6 rounded-t-lg hover:bg-[#002244] transition-colors duration-300">
            <h2 className="text-2xl font-bold flex-grow">Secure Access Pilot Plan</h2>
            <ChevronDown 
              className={`h-6 w-6 text-white transition-transform duration-200 ${
                isOpen ? '' : '-rotate-180'
              }`}
            />
          </CollapsibleTrigger>
          
          <CollapsibleContent>
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
          </CollapsibleContent>
        </CardHeader>
        <CollapsibleContent>
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
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default PilotPlan;
