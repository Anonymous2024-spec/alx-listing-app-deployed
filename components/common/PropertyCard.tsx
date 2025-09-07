import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={property.image || "/fallback-image.jpg"} // fallback if no image
        alt={property.name || "Property Image"}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {property.name || "Unnamed Property"}
        </h3>
        <p className="text-sm text-gray-600">
          ${property.price?.toLocaleString() || "N/A"} / night
        </p>
        <p className="text-yellow-500 text-sm">
          ⭐ {property.rating ?? "No rating"}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
