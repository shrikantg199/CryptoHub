import React from "react";
import { Link } from "react-router-dom";

function CoinCard({ id, image, name, currencySymbol, price, cap }) {
  const profit = cap > 0;
  return (
    <Link to={`/coins/${id}`}>
      <div className="flex justify-center ">
        <div className="lg:m-2 mb-3 ">
          {" "}
          <ul className="bg-[#181a20] border-[0.1px] border-[#2B3139]  w-[320px]  lg:w-[90vh] h-20   lg:h-28 rounded-2xl shadow-md   text-white  hover:shadow-black hover:scale-110 transition-all ">
            <li className="flex justify-between items-center ">
              <img
                src={image}
                className="h-12   w-8 lg:w-20 lg:h-20 lg:p-3 lg:m-4 ml-3 "
                alt=""
              />
              <h2 className=" m-6 lg:m-9 text-xl font-semibold w-8">{name}</h2>
              <h2 className=" m-6 lg:m-9 text-xl w-8  font-semibold">
                {currencySymbol}
                {price}
              </h2>
              <h2
                className={` m-6 lg:m-12 text-xl w-8  font-semibold ${
                  profit ? "text-green-600" : "text-red-500"
                }`}
              >
                {profit ? "+" + cap : cap}%
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default CoinCard;
