import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "./BaseUrl";
import { IoMdStarOutline } from "react-icons/io";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { IoMdPulse } from "react-icons/io";
import { CgShare } from "react-icons/cg";
import Loader from "./Loader";
import CoinChartData from "./CoinChartData";
function CoinDetails() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const { id } = useParams();
  const profit = coin.market_data?.price_change_percentage_24h.toFixed(2) > 0;
  useEffect(() => {
    const getCoin = async () => {
      try {
        const response = await axios.get(`${BaseUrl}/coins/${id}`);

        setCoin(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getCoin();
  }, [id]);

  const formatDate = () => {
    const date = coin.last_updated;
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");
    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");
    const seconds = dateObject.getSeconds().toString().padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#181a20] h-screen w-screen fixed block lg:flex overflow-y-auto lg:overflow-hidden ">
          <div className="bg-[#181a20] text-white full lg:w-[30%] h-screen   lg:overflow-y-auto  border-[1px] border-[#2B3139] ">
            <div className=" flex justify-evenly  bg-[#181a20]items-center shadow-sm  w-full rounded-sm h-14">
              <span className="text-3xl font-semibold ">{coin.name}</span>
              <div className="flex justify-center gap-4">
                <IoMdStarOutline className="text-3xl" />
                <CgShare className="text-3xl" />
              </div>
            </div>
            <div className="">
              <div className="flex justify-center mt-2">
                <img
                  src={coin.image?.large}
                  className="h-20    w-20 lg:w-32 lg:h-32   "
                  alt=""
                />
              </div>

              <div className="text-5xl flex justify-center">
                <h2 className="m-6 font-bold hover:scale-110 transition-all">
                  ₹ {coin.market_data?.current_price["inr"]}
                </h2>
              </div>

              <div
                className={`lg:ml-60 ml-52 font-bold text-lg w-44 ${
                  profit ? "text-green-400" : "text-red-600"
                }`}
              >
                <div className="flex">
                  {profit ? (
                    <BiSolidUpArrow className="text-green-400  text-2xl " />
                  ) : (
                    <BiSolidDownArrow className="text-red-600 text-2xl" />
                  )}
                  {profit && "+"}
                  {coin.market_data?.price_change_percentage_24h.toFixed(2)}%
                  (1D)
                </div>
              </div>

              <h1 className="text-lg m-4 ">
                <span className="font-bold">Last Update- </span>
                {formatDate()}
              </h1>
              <div className="font-bold text-3xl lg:m-3 ml-12 flex  ">
                <IoMdPulse className="text-orange-500 ml-10" /> #
                {coin.market_data?.market_cap_rank}
              </div>
              <div className="bg-gray-500/15 rounded-xl  h-auto lg:w-[350px] p-2 lg:ml-8 m-2">
                <div className="m-2 mr-3 flex ">
                  <div className="p-1 w-[320px] ">
                    {" "}
                    <span className="font-bold text-lg"> Description: </span>
                    <span className="">
                      {coin?.description?.en?.split(".")[0]}.
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-4">
                {" "}
                <h1 className="font-bold mt-3">official link</h1>
                <Link to={coin.links?.homepage[0]}>
                  <h1 className="w-20 text-center rounded-xl text-white bg-gray-700 m-2">
                    webiste
                  </h1>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-[#181a20] w-full lg:w-[70%] h-full text-white  ">
            <CoinChartData
              img={coin.image?.large}
              price={coin.market_data?.current_price["inr"]}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default CoinDetails;
