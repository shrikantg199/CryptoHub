import React from "react";

function CoinCard({ name }) {
  return (
    <div className="flex  justify-center mt-8 h-screen">
      <div className="flex justify-between items-center px-8 h-32 bg-white m-2 w-[50%]  rounded-2xl">
        <img src="" alt="" />
        <h2 className="text-2xl">{name}</h2>
        <h2 className="text-2xl">rating</h2>
      </div>
    </div>
  );
}

export default CoinCard;
