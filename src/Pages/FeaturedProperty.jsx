import React from "react";
import premium from "../assets/images/property/premium_apartment.jpg"

const FeaturedProperty = () => {
  return (
    <div className="w-full bg-white py-10 px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl !font-semibold mb-6">
        <span className="text-[#C1AA46] !font-bold">FEATURED </span>
        <span className="text-black">PROPERTIES</span>
      </h2>

      {/* Property Card */}
      <div className="relative max-w-8xl max-h-[600px] mx-auto overflow-hidden">
        {/* Background Image */}
        <img
          src={premium}
          alt="Premium Apartment"
          className="w-full h-auto object-cover"
        />

        {/* Tag - Premium Apartment */}
        <div className="absolute top-4 right-0 bg-white bg-opacity-70 px-3 py-1 rounded text-sm !font-medium">
          Premium Apartment
        </div>

        {/* Price */}
        <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-60 px-4 py-1 rounded text-xl font-semibold">
          2.5 CORES
        </div>

        {/* Features */}
        <div className="absolute bottom-4 left-4 flex gap-4 text-sm bg-white bg-opacity-60 px-4 py-2">
          <div className="flex items-center gap-1">
            🏠 <span>3 BHK</span>
          </div>
          <div className="flex items-center gap-1">
            🚽 <span>2 BR</span>
          </div>
          <div className="flex items-center gap-1">
            🌇 <span>1 BAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
