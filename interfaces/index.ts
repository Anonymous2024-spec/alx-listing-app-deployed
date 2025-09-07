export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

// interfaces/PropertyProps.ts (or wherever fits your structure)

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string; // Empty string or numeric string like "15", "30"
}
