import React from "react";

interface StepProps {
  num: string;
  title: string;
  desc: string;
}

export const Step: React.FC<StepProps> = ({ num, title, desc }) => {
  return (
    <article className="card step-card">
      <span className="step-num">{num}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
};
