import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#223749] bg-[#182834] p-6 transition-all hover:border-[#2094f3]/50 hover:shadow-xl hover:shadow-[#2094f3]/10">
      <div className="text-[#2094f3]">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
