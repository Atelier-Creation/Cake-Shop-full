import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const LocationDropdown = () => {
  return (
    <div className="inline-flex items-center gap-1 text-white font-medium">
      <IoLocationSharp size={20} color="#fdc700" />
      Coimbatore
    </div>
  );
};

export default LocationDropdown;
