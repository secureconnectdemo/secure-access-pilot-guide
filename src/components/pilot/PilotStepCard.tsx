
import React from "react";

interface PilotStepCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const PilotStepCard: React.FC<PilotStepCardProps> = ({ icon, title, children }) => (
  <div className="rounded-xl border border-gray-200 bg-white mb-6 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 border-b border-gray-100 bg-gradient-to-br from-[#f6faff] to-[#f3f4fa] px-4 py-3">
      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#EEF6FB]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#003366]">{title}</h3>
    </div>
    <div className="px-6 py-5">{children}</div>
  </div>
);

export default PilotStepCard;
