
import React from 'react';
import { Globe, Activity, Shield, FileText, ShieldCheck } from 'lucide-react';

const achievementItems = [
  { icon: Globe, text: "DNS Security and Web Protection (Full Proxy)" },
  { icon: Activity, text: "Advanced Threat Protection use cases in production" },
  { icon: Shield, text: "HTTPS Decryption with custom Do Not Decrypt lists" },
  { icon: ShieldCheck, text: "Remote Browser Isolation, CASB policies, and File Sandboxing" },
  { icon: FileText, text: "Basic Acceptable Use Policy enforcement" }
];

const CongratulationsCard = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-green-800 mb-4">
        Congratulations on completing your Secure Access Pilot! 🎉
      </h3>
      <p className="text-green-700 font-medium mb-4">
        You've successfully deployed foundational and advanced features, including:
      </p>
      <ul className="space-y-3 mb-6">
        {achievementItems.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-green-700">
            <item.icon className="h-5 w-5 flex-shrink-0" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CongratulationsCard;
