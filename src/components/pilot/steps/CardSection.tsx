import React from 'react';
interface CardSectionProps {
  title: string;
  children: React.ReactNode;
}
const CardSection: React.FC<CardSectionProps> = ({
  title,
  children
}) => <section className="mb-4">
    
    <div className="rounded border bg-white p-4 text-sm border-gray-200">{children}</div>
  </section>;
export default CardSection;