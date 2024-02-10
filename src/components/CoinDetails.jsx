import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "./BaseUrl";
import { IoMdStarOutline } from "react-icons/io";
import { CgShare } from "react-icons/cg";
import Loader from "./Loader";
function CoinDetails() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const { id } = useParams();
  const profit =
    coin.market_data &&
    coin.market_data.price_change_percentage_24h.toFixed(2) > 0;
  useEffect(() => {
    const getCoin = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/coins/${id}`);
        console.log(response.data);
        setCoin(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exchanges:", error);
        setLoading(false);
      }
    };

    getCoin();
  }, [id]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#10b97e]/70 h-screen w-screen fixed block lg:flex">
          <div className="bg-white full lg:w-[30%] h-screen border-1 m-[2px] overflow-y-auto  ">
            <div className=" flex justify-evenly  bg-green-500/40 items-center shadow-sm  w-full rounded-sm h-14">
              <span className="text-3xl font-semibold ">{coin.name}</span>
              <div className="flex justify-center gap-4">
                <IoMdStarOutline className="text-3xl" />
                <CgShare className="text-3xl" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-center mt-2">
                <img
                  src={coin.image.large}
                  className="h-32    w-32 lg:w-40 lg:h-40   "
                  alt=""
                />
              </div>

              <div className="text-5xl flex justify-center">
                <h2 className="m-6 font-bold">
                  ₹ {coin.market_data.current_price["inr"]}
                </h2>
              </div>
              <h2
                className={`text-end mr-20 font-bold text-xl ${
                  profit ? "text-green-400 " : "text-red-700"
                }`}
              >
                {profit && "+"}
                {coin.market_data.price_change_percentage_24h.toFixed(2)}(1D)
              </h2>

              <h1 className="text-lg m-4 text-gray-600">
                <span className="font-bold">Last Update-</span>
                {coin.last_updated}
              </h1>
              <div className="font-bold text-4xl lg:m-3 ml-12  ">
                #{coin.market_data.market_cap_rank}
              </div>
              <div className="bg-gray-500/15 rounded-xl  h-auto w-[350px] p-2 ">
                <div className="m-2 mr-3 flex ">
                  <div className="p-1 w-[320px] ">
                    {" "}
                    <span className="font-bold text-lg"> Description: </span>
                    <span className="">
                      {coin.description["en"].slice(0, 300)}....
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-4">
                {" "}
                <h1 className="font-bold mt-3">official link</h1>
                <Link to={coin.links.homepage[0]}>
                  <h1 className="w-20 text-center rounded-xl text-white bg-gray-700 m-2">
                    webiste
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white w-[70%] h-screen border-3 m-[3px]  "></div>
        </div>
      )}
    </>
  );
}

export default CoinDetails;
