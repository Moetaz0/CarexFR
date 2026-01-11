import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo with popping animation */}
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="Carex Logo"
          className="h-24 animate-pop"
        />
        {/* Animated dots */}
        <div className="flex space-x-4 mt-4">
          <div className="h-4 w-4 bg-[#4addbf] rounded-full animate-dot1"></div>
          <div className="h-4 w-4 bg-[#4addbf] rounded-full animate-dot2"></div>
          <div className="h-4 w-4 bg-[#4addbf] rounded-full animate-dot3"></div>
          <div className="h-4 w-4 bg-[#4addbf] rounded-full animate-dot4"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
