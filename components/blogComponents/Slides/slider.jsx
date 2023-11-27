import React, { useState } from "react";

import Image from "next/image";

const ImageSlider = (props) => {
  const poolImage = props.pool;

  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <Image
          src={poolImage[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full"
          height={400}
          width={550}
        />

        {currentIndex > 0 && (
          <button
            onClick={() => setCurrentIndex((prevIndex) => prevIndex - 1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
          >
            {"<"}
          </button>
        )}

        {currentIndex < poolImage.length - 1 && (
          <button
            onClick={showNextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
