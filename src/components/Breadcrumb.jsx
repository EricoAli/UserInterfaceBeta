import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-screen-lg mx-auto flex items-center text-gray-500 text-sm">
        <a href="#" className="hover:text-gray-700">
          Home
        </a>
        <svg
          className="w-4 h-4 mx-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="font-medium text-gray-700">Shop</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
