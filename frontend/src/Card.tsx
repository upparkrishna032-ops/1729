import React from "react";

interface CardProps {
  title: string;
  desc: string;
  className?: string; // Add optional className prop
}

export const Card: React.FC<CardProps> = ({ title, desc, className }) => {
  return (
    <article className={`card ${className || ""}`}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
};
