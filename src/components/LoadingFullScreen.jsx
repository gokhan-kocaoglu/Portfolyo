import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/loading.json";

function LoadingFullScreen() {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-[#23232d]/80 flex flex-col items-center justify-center z-50">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: 180, height: 180 }}
      />
      <div className="text-gray-800 dark:text-gray-200 mt-4 text-xl font-medium animate-pulse">
        Loading...
      </div>
    </div>
  );
}

export default LoadingFullScreen;
