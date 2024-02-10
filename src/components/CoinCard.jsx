import React from "react";
import { Link } from "react-router-dom";

function CoinCard({ id, image, name, currencySymbol, price, cap }) {
  const profit = cap > 0;
  return (
    <Link to={`/coins/${id}`}>
      <div className="flex justify-center ">
        <div className="lg:m-2 mb-3 ">
          {" "}
          <ul className=" bg-white/95 w-[360px]  lg:w-[90vh] h-20   lg:h-32 rounded-2xl shadow-md  hover:shadow-blue-500 ">
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
                className={` m-6 lg:m-9 text-xl w-8  font-semibold ${
                  profit ? "text-green-600" : "text-red-500"
                }`}
              >
                {profit ? "+" + cap : cap}
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default CoinCard;
