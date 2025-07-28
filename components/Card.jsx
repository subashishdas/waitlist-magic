import React from "react";

const Card = ({ title, description, icon, index = 0 }) => {
  const animationClass = `animate-card-${Math.min(index + 1, 6)}`;

  return (
    <div
      className={`relative flex flex-col gap-4 rounded-xl border border-[#223749] bg-[#182834] p-6 smooth-hover hover:border-[#2094f3]/50 hover:shadow-xl hover:shadow-[#2094f3]/10 hover:scale-105 hover:-translate-y-2 group cursor-pointer overflow-hidden ${animationClass}`}
    >
      <div className="text-[#2094f3] transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse-glow relative z-10">
        {icon}
      </div>
      <div className="relative z-10">
        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>
      </div>

      {/* Subtle background glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2094f3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default Card;
