import React from 'react';

const Loader = () => (
  <div className="flex items-center justify-center h-full w-full">
    <svg className="animate-spin h-12 w-12 text-violet-600" viewBox="0 0 50 50">
      <circle
        className="opacity-25"
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"
      />
    </svg>
  </div>
);

export default Loader;
