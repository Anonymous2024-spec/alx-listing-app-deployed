import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/common/PropertyCard";
import Pill from "@/components/common/Pill";
import { HERO_IMAGE } from "@/constants";
import BookingForm from "@/components/booking/BookingForm";
import Cancellation from "@/components/booking/CancellationPolicy";
import {OrderSummary} from "../components/booking/OrderSummary";
import { PropertyProps } from "@/interfaces";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Free Parking",
  "Mountain View",
  "Pet Friendly",
  "Private Pool",
];

const Home = () => {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="bg-black/50 p-6 rounded-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-2">Filter by:</h2>
        <div className="flex flex-wrap">
          {filters.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Top Properties</h2>

        {loading && <p>Loading properties...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            !error &&
            properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
        <BookingForm />
      </section>

      {/* Order Summary Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <OrderSummary />
      </section>

      {/* Cancellation Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
        <Cancellation />
      </section>
    </div>
  );
};

export default Home;
