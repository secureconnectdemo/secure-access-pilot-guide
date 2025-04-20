
import React from "react";
import StepNumberBadge from "./StepNumberBadge";
import { Info } from "lucide-react";
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface StepBlockProps {
  number: number;
  title: string;
  info?: React.ReactNode;
  children: React.ReactNode;
}

const StepBlock: React.FC<StepBlockProps> = ({ number, title, info, children }) => (
  <section className="mb-6">
    <div className="flex items-center mb-1">
      <StepNumberBadge number={number} />
      <h3 className="font-bold text-base leading-tight mr-2">{title}</h3>
      {info && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Info className="h-4 w-4 text-gray-400 cursor-pointer" />
              </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">{info}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
    <div className="ml-8">{children}</div>
  </section>
);

export default StepBlock;
