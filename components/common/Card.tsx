import React from "react";

export interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <div className="border rounded shadow p-4">
    <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default Card;
