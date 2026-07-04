import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-100/80 backdrop-blur-sm z-50">
      <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl px-10 py-8 border border-gray-200">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 border-r-purple-600 animate-spin"></div>

          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 animate-spin [animation-direction:reverse] [animation-duration:1.2s]"></div>
        </div>

        {/* Loading Text */}
        <h2 className="mt-6 text-xl font-bold text-gray-800">
          Loading
        </h2>

        <p className="mt-2 text-sm text-gray-500 text-center">
          Please wait while we fetch the latest blogs.
        </p>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce"></span>
          <span
            className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;