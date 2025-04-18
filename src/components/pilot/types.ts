
export interface PilotStep {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface StepCardProps {
  step: PilotStep;
  orgNumber: string;
  isSubmitted: boolean;
  isOpen: boolean;
  onToggle: () => void;
}
