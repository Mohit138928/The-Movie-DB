import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://images.hdqwalls.com/wallpapers/sweet-home-2-4e.jpg)`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-4">
        Sweet Home Season 2
      </div>
    </div>
  );
}

export default Banner;
