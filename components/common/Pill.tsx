import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 m-1 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition"
    >
      {label}
    </button>
  );
};

export default Pill;
