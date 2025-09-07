import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div>
          <h4 className="font-bold mb-2">StayEase</h4>
          <p className="text-sm">
            Book the best luxury stays and unique properties around the world.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <ul className="flex space-x-4 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} StayEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
