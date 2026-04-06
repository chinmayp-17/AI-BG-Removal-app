import React from 'react';
import { assets } from '../assets/assets';

const Upload = () => {
  return (
    <div className="bg-[#f6faff] flex flex-col items-center text-center mt-12 min-h-[300px]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 mb-8">
        See the magic. Try now.
      </h1>
      <button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium text-lg px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform duration-300">
        <img src={assets.upload_icon} alt="Upload Icon" className="w-6 h-6" />
        Upload your image
      </button>
    </div>
  );
};

export default Upload;