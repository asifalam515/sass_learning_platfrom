import React from "react";
interface CompanionCardProps {
  id: string;
  name: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return <div>Companion Card</div>;
};

export default CompanionCard;
